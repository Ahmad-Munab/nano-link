import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (id, email) => {
    try {
        const user = await prisma.user.create({
            data: { id, email },
        });

        if (typeof user === "object") {
            return user;
        }
        throw new Error(user);
    } catch (err) {
        console.error(err);
        return err;
    }
};
