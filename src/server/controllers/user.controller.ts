import { TRPCError } from '@trpc/server';
import type { Context } from '../router/context';

export const getMeHandler = async ({ ctx }: { ctx: Context }) => {
  try {
    const user = (await ctx).user;
    return {
      status: 'success',
      data: {
        user,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
}