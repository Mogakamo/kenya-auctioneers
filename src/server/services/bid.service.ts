import { Bid, Prisma } from "@prisma/client";
import { prisma } from "../db/client";

export const addBid = async (input: Prisma.BidCreateInput) => {
  return (await prisma.bid.create({
    data: input,
  })) as Bid;
};

export const getBid = async (
  where: Partial<Prisma.BidWhereInput>,
  select?: Prisma.BidSelect
) => {
  return (await prisma.bid.findFirst({
    where,
    select,
  })) as Bid;
};

export const getUniqueBid = async (
  where: Partial<Prisma.BidWhereInput>,
  select?: Prisma.BidSelect
) => {
  return (await prisma.bid.findUnique({
    where,
    select,
  })) as Bid;
};

export const getBids = async (page: number, limit: number) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return await prisma.bid.findMany({
    include: { BidOwner: true },
    skip,
    take,
  });
};

export const updateBid = async (
  where: Partial<Prisma.BidWhereUniqueInput>,
  data: Prisma.BidUpdateInput,
  select?: Prisma.BidSelect
) => {
  return (await prisma.bid.update({
    where,
    data,
    select,
  })) as Bid;
};

export const deleteBid = async (where: Partial<Prisma.BidWhereUniqueInput>) => {
  return (await prisma.bid.delete({
    where,
  })) as Bid;
};
