import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const body = await request.json();

    const response = await fetch(
        `http://${process.env.BACKEND_NAME}:${process.env.BACKEND_PORT}/api/messages`,
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json",
            },

            body: JSON.stringify(
                body
            ),

            cache: "no-store",
        }
    );

    const data = await response.json()
        .catch(
            () => ({
                error: "Backend returned an invalid response"
            })
        );

    return NextResponse.json(data, {
        status: response.status,
    });
}