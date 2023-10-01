import { PrismaClient } from "@prisma/client"

let prisma = null;

const GetPrismaClient = () =>  {
    if (prisma) return prisma

    prisma = new PrismaClient()
    return prisma
}

GetPrismaClient()

export default GetPrismaClient;

