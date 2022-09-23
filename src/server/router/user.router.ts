import { createUserSchema } from "../../schema/user.schema";
import { createRouter } from "./context";
import * as trpc from "@trpc/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const UserRouter = createRouter().mutation("register-user", {
  input: createUserSchema,
  async resolve({ ctx, input }) {
    const { name, email, photo, password } = input;

    try {
      const user = await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          photo: input.photo,
          password: input.password,
        },
      });

      return user;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new trpc.TRPCError({
            code: "CONFLICT",
            message: "User already exists",
          });
        }
      }

      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  },
})
.query("get-user", {
    async resolve({ ctx }) {
        return ctx.user
    }
