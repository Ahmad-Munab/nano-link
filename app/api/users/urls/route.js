import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { createURL, findURLs } from "../../lib/url";

export async function GET(req) {
  const { user } = auth(req);
  if (!user?.id)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const res = await findURLs(user.id);

    return NextResponse.json(res, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req) {
  const { user } = auth(req);
  if (!user?.id)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { long } = await req.json();
  if (!long)
    return NextResponse.json({ message: "Not enough data" }, { status: 400 });

  try {
    const res = await createURL(user.id, long);

    return NextResponse.json(res, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
