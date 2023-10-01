"use server";

import NotFound404 from "@/components/404";
import { redirect } from "next/navigation";
import GetPrismaClient from "../api/lib/prismaClient";


const Page = async ({ params }) => {
    const prisma = GetPrismaClient()
    const long = await prisma.uRL.findFirst({ where: { short: params.short } });

    if (long) {
        return redirect(long.long);
    }

    if (!long) return <NotFound404 />;
};

export default Page;
