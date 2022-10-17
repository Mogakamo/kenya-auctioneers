import { Prisma } from "@prisma/client";
import {prisma} from "../db/client"

export const user = async(input: Prisma.UserCreateInput) => {
    return (await prisma.user.create({
        data: input.
    })) as User
}