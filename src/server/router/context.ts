import { NextApiRequest, NextApiResponse } from 'next';
import { deserializeUser } from '../middleware/deserializeUser';
import { prisma } from '../db/client';

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return deserializeUser({ req, res });
}

export type Context = ReturnType<typeof createContext>;