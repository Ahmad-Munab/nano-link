"use server";

import NotFound404 from "@/components/404";
import { redirect } from "next/navigation";
import GetPrismaClient from "../api/lib/prismaClient";

const Page = async ({ params }) => {
  const prisma = GetPrismaClient();

  let long;

  try {
    long = await prisma.uRL.update({
      where: { short: params.short },
      data: { clicks: { increment: 1 } },
      select: { long: true },
    });
  } catch (err) {
    long = null;
  }

  if (long) {
    return redirect(long.long);
  }

  if (!long) return <NotFound404 />;
};

export default Page;
