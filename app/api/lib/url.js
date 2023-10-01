import { nanoid } from "nanoid";
import GetPrismaClient from "./prismaClient";

const prisma = GetPrismaClient;

export const findURLs = async (userId) => {
    try {
        const urls = await prisma.uRL.findMany({ where: { userId: userId } });

        if (Array.isArray(urls)) {
            return urls;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const createURL = async (userId, long) => {
    try {
        const duplicate = await prisma.uRL.findFirst({
            where: { userId: userId, long: long },
        });

        if (duplicate) {
            return duplicate;
        }

        let short;
        do {
            short = nanoid(4);
        } while (await prisma.uRL.findFirst({ where: { short: short } }));

        const url = await prisma.uRL.create({
            data: {
                userId,
                long,
                short,
            },
        });

        if (typeof url === "object") {
            return url;
        }
        throw new Error(url);
    } catch (err) {
        console.error(err);
        return err;
    }
};
