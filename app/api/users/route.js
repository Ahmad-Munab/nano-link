import { NextResponse } from "next/server";
import { createUser } from "../lib/user";

export async function POST(req) {
    // console.log(req.headers.origin);

    const {
        data: { id, email_addresses },
    } = await req.json();

    if (!id || email_addresses?.length === 0) {
        return NextResponse.json(
            {
                message: "Not enough information",
            },
            { status: 400 }
        );
    }

    try {
        const user = await createUser(id, email_addresses[0].email_address);
        return NextResponse.json(
            {
                message: "User created successfully",
                user,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Server error",
                error,
            },
            { status: 500 }
        );
    }
}
