import { createUserSchema } from "../../schema/user.schema";
import { createRouter } from "./context";

export const UserRouter = createRouter()
    .mutation("register-user", {
        input: createUserSchema,
        async resolve({ ctx, input }) {
            const user = await ctx.prisma.user.create({
                data: {
                    name: input.name,
                    email: input.email,
                    photo: input.photo,
                    password: input.password,
                },
            });

            return user;
        }
    })