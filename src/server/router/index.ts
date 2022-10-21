// src/server/router/index.ts
import { createRouter } from "./createRouter";
import superjson from "superjson";

import { exampleRouter } from "./example";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";

export const appRouter = createRouter()
  .merge("auth.", authRouter)
  .merge("example.", exampleRouter)
  .merge("users.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
