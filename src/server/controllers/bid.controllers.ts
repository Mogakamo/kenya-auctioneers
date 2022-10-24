import { TRPCError } from "@trpc/server";
import {
  AddBidInput,
  Params,
  FilterQuery,
  UpdateBidInput,
} from "../../schema/bid.schema";
import { Context } from "../router/context";
import {
  addBid,
  getBids,
  getUniqueBid,
  updateBid,
  deleteBid,
} from "../services/bid.service";

export const addBidHandler = async ({
  input,
  ctx,
}: {
  input: AddBidInput;
  ctx: Context;
}) => {
  try {
    const { user } = await ctx;

    const bid = await addBid({
      name: input.name,
      description: input.description,
      price: input.price,
      category: input.category,
      bidEnd: input.bidEnd,
      bidStart: input.bidStart,
      brand: input.brand,
      img: input.img,
      BidOwner: {
        connect: {
          id: user?.id,
        },
      },
    });
  } catch (e: any) {
    if (e.code === "P2002") {
      throw new TRPCError({
        code: "CONFLICT",
        message: "Product already exists",
      });
    }
    throw e;
  }
};

export const getSingleBidHandler = async ({
  paramsInput,
}: {
  paramsInput: Params;
}) => {
  try {
    const bid = await getUniqueBid({
      id: paramsInput.bidId,
    });

    if (!bid) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Bid not found",
      });
    }

    return {
      status: "success",
      data: {
        bid,
      },
    };
  } catch (e: any) {
    throw e;
  }
};

export const getBidsHandler = async ({
  filterQuery,
}: {
  filterQuery: FilterQuery;
}) => {
  try {
    const bids = await getBids(filterQuery.page, filterQuery.limit);
    return {
      status: "success",
      results: bids.length,
      data: {
        bids,
      },
    };
  } catch (e: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: e.message,
    });
  }
};

export const updateBidHandler = async ({
  paramsInput,
  input,
}: {
  paramsInput: Params;
  input: UpdateBidInput;
}) => {
  try {
    const bid = await updateBid(
      {
        id: paramsInput.bidId,
      },
      input
    );

    if (!bid) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Bid not found",
      });
    }

    return {
      status: "success",
      data: {
        bid,
      },
    };
  } catch (e: any) {
    throw e;
  }
};

export const deleteBidHandler = async ({
    paramsInput,
    }: {
    paramsInput: Params;
    }) => {
        try{
            const bid = await deleteBid({
                id: paramsInput.bidId,
            })

            if(!bid){
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Bid not found",
                })
            }

            return {
                status: "success",
                data: null,
            }
        }
        catch(e: any) {
            throw e
        }
    }
