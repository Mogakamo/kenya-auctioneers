import { OptionsType } from "cookies-next/lib/types";
import {
  CreateUserInput,
  LoginUserInput,
  loginUserSchema,
} from "../../schema/user.schema";
import customConfig from "../config";
import { createUser, findUniqueUser, findUser, signTokens } from "../services/user.service";
import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";
import { Context } from "../router/context";
import { getCookie, setCookie } from "cookies-next";
import { signJwt, verifyJwt } from "../../utils/jwt";
import redisClient from "../../utils/redis";

const cookieOptions: OptionsType = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

const accessTokenCookieOptions: OptionsType = {
  ...cookieOptions,
  expires: new Date(Date.now() + customConfig.accessTokenExpiresIn * 60 * 1000),
};

const refreshTokenCookieOptions: OptionsType = {
  ...cookieOptions,
  expires: new Date(
    Date.now() + customConfig.refreshTokenExpiresIn * 60 * 1000
  ),
};

// Register
export const registerHandler = async ({
  input,
}: {
  input: CreateUserInput;
}) => {
  try {
    const hashedPassword = await bcrypt.hash(input.password, 12);
    const user = await createUser({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      img: input.photo,
      provider: "local",
    });

    return {
      status: "success",
      data: {
        user,
      },
    };
  } catch (e: any) {
    if (e.code === "P2002") {
      throw new TRPCError({
        code: "CONFLICT",
        message: "Email already exists",
      });
    }
    throw e;
  }
};

// Login
export const loginHandler = async ({
  input,
  ctx,
}: {
  input: LoginUserInput;
  ctx: Context;
}) => {
  const { req, res } = await ctx;

  try {
    const user = await findUser({ email: input.email });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(input.password, user.password))) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid credentials",
      });
    }

    const { access_token, refresh_token } = await signTokens(user);

    // send access token in cookies
    setCookie("access_token", access_token, {
      req,
      res,
      ...accessTokenCookieOptions,
    });

    setCookie("refresh_token", refresh_token, {
      req,
      res,
      ...refreshTokenCookieOptions,
    });

    setCookie("logged_in", "true", {
        req,
        res,
        ...accessTokenCookieOptions,
        httpOnly: false,
    })

    return {
      status: "success",
      access_token,
    };
  } catch (e) {
    throw e;
  }
};

// Refresh tokens
export const refreshAccessTokenHandler = async ({
    ctx,
}: {
    ctx: Context;
}) => {
    const { req, res } = await ctx;
  try {
    // Get the refresh token from cookie
    const refresh_token = getCookie("refresh_token", { req, res }) as string;

    const message = "Could not refresh access token";
    if (!refresh_token) {
      throw new TRPCError({ code: "FORBIDDEN", message });
    }

    // Validate the Refresh token
    const decoded = verifyJwt<{ sub: string }>(
      refresh_token,
      "refreshTokenPublicKey"
    );

    if (!decoded) {
      throw new TRPCError({ code: "FORBIDDEN", message });
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded.sub);
    if (!session) {
      throw new TRPCError({ code: "FORBIDDEN", message });
    }

    // Check if the user exist
    const user = await findUniqueUser({ id: JSON.parse(session).id });

    if (!user) {
      throw new TRPCError({ code: "FORBIDDEN", message });
    }

    // Sign new access token
    const access_token = signJwt({ sub: user.id }, "accessTokenPrivateKey", {
      expiresIn: `${customConfig.accessTokenExpiresIn}m`,
    });

    // Send the access token as cookie
    setCookie("access_token", access_token, {
      req,
      res,
      ...accessTokenCookieOptions,
    });
    setCookie("logged_in", "true", {
      req,
      res,
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    // Send response
    return {
      status: "success",
      access_token,
    };
  } catch (err: any) {
    throw err;
  }
}

// [...] Logout user
const logout = async ({ ctx }: { ctx: Context }) => {
    const { req, res } = await ctx;
    setCookie("access_token", "", { req, res, maxAge: -1 });
    setCookie("refresh_token", "", { req, res, maxAge: -1 });
    setCookie("logged_in", "", { req, res, maxAge: -1 });
  };
  
  export const logoutHandler = async ({ ctx }: { ctx: Context }) => {
    try {
      const user =  (await ctx).user!;
      await redisClient.del(user?.id!);
      logout({ ctx });
      return { status: "success" };
    } catch (err: any) {
      throw err;
    }
  };
