// src/server/router/index.ts
import { createRouter } from "./createRouter";
import superjson from "superjson";

import { exampleRouter } from "./example";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import { bidRouter } from "./bid.router";

export const appRouter = createRouter()
  .merge("auth.", authRouter)
  .merge("example.", exampleRouter)
  .merge("users.", userRouter)
  .merge("bids.", bidRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
