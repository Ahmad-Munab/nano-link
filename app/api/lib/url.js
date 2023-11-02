import GetPrismaClient from "./prismaClient";
import shortid from "shortid";

export const getURLs = async (userId) => {
  const prisma = GetPrismaClient();
  try {
    const urls = await prisma.uRL.findMany({ where: { userId: userId } });

    if (Array.isArray(urls)) {
      return { urls, status: 200 };
    } else {
      return { urls: [], status: 200 };
    }
  } catch (err) {
    console.error(err);
    return { err, status: 500 };
  }
};

export const createURL = async (userId, long) => {
  const prisma = GetPrismaClient();
  try {
    const duplicate = await prisma.uRL.findFirst({
      where: { userId, long },
    });

    if (duplicate) {
      return { url: duplicate, status: 200 };
    }

    let short = shortid.generate().substring(0, 4);
    console.log(short);
    // do {
    //   short = nanoid(4);
    // } while (await prisma.uRL.findFirst({ where: { short: short } }));

    const url = await prisma.uRL.create({
      data: {
        userId,
        long,
        short,
      },
    });

    if (typeof url === "object") {
      return { url, status: 200 };
    }
    throw new Error(url);
  } catch (err) {
    console.error(err);
    return { err };
  }
};
