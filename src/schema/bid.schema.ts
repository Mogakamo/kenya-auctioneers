import { z } from "zod";

export const addBidSchema = z.object({
  name: z.string().min(1, "Name must be greater than 0"),
  price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
  description: z.string().min(1, "Description must be greater than 0"),
  category: z.string().min(1, "Category must be greater than 0"),
  brand: z.string().min(1, "Brand must be greater than 0"),
  img: z.string().min(1, "Image must be greater than 0"),
  bidStatus: z.string(),
  bidEnd: z.string(),
  bidStart: z.string(),
});

export const params = z.object({
  bidId: z.string(),
});

export const updateBidSchema = z.object({
  name: z.string().min(1, "Name must be greater than 0"),
  price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
  description: z.string().min(1, "Description must be greater than 0"),
  category: z.string().min(1, "Category must be greater than 0"),
  brand: z.string().min(1, "Brand must be greater than 0"),
  img: z.string().min(1, "Image must be greater than 0"),
  bidStatus: z.string(),
  bidEnd: z.string(),
  bidStart: z.string(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type AddBidInput = z.TypeOf<typeof addBidSchema>;
export type UpdateBidInput = z.TypeOf<typeof updateBidSchema>;
export type FilterQuery = z.TypeOf<typeof filterQuery>;
export type Params = z.TypeOf<typeof params>;
