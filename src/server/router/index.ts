// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { BidderRouter } from "./user.routes";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("bidder.", BidderRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
