// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { prisma } from "../db/client";
import CtxUser from "../../lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import IBidder from "../../lib/types";
import superjson from "superjson"

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = Record<string, never>;

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
// export const createContextInner = async (opts: CreateContextOptions) => {
//   return {
//     prisma,
//   };
// };


function getBidderFromRequest(req: NextApiRequest) {
  const token = req.cookies.token

  if (token) {
    // const verified = verifyJWT<IBidder>(token)
  }
}


/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  // const bidder = getUserFromRequest(req)

  return {req, res, prisma};
};



type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>()
