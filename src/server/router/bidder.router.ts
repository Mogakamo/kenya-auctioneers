import {
  createBidderSchema,
  loginBidderSchema,
} from "../../schema/bidder.schema";
import { createRouter } from "./context";
import * as trpc from "@trpc/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const BidderRouter = createRouter()
  .mutation("register-bidder", {
    input: createBidderSchema,
    async resolve({ ctx, input }) {
      const { name, email, photo, password } = input;

      try {
        const user = await ctx.prisma.bidder.create({
          data: {
            name,
            email,
            photo,
            password,
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
  .mutation("login-bidder", {
    input: loginBidderSchema,
    async resolve({ ctx, input }) {
      const { email, password } = input;
      
      const bidder = await ctx.prisma.bidder.findUnique({
        where: {
          email,
        },
      })

      if (!bidder) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        })
      }
    },
  })
  .query("get-bidder", {
    async resolve({ ctx }) {
      // return ctx.bidder;
    },
  });
