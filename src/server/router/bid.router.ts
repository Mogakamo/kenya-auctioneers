import { TRPCError } from "@trpc/server";
import {
  addBidSchema,
  updateBidSchema,
  params,
  filterQuery,
} from "../../schema/bid.schema";
import {
  addBidHandler,
  deleteBidHandler,
  getBidsHandler,
  getSingleBidHandler,
  updateBidHandler,
} from "../controllers/bid.controllers";
import { getBids } from "../services/bid.service";
import { createRouter } from "./createRouter";

export const bidRouter = createRouter()
//   .middleware(async ({ ctx, next }) => {
//     if (!(await ctx).user) {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: "You are not authorized to access this route",
//       });
//     }

//     return next();
//   })
  .mutation("add-bid", {
    input: addBidSchema,
    resolve: ({ input, ctx }) => addBidHandler({ input, ctx }),
  })
  //   .mutation("update-bid", {
  //     input: updateBidSchema,
  //     resolve: ({ input }) => updateBidHandler({ paramsInput: input.params, input: input.body }),
  //   })
  .mutation("delete-bid", {
    input: params,
    resolve: ({ input }) => deleteBidHandler({ paramsInput: input }),
  })
  .query("single-bid", {
    input: params,
    resolve: ({ input }) => getSingleBidHandler({ paramsInput: input }),
  })
  .query("all-bids", {
    input: filterQuery,
    resolve: async ({ input }) => getBidsHandler({ filterQuery: input }),
  });
