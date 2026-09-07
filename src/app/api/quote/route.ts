import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Quote from "../../../models/Quote";
import { quoteSchema } from "../../../lib/validations";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    await connectDB();
    console.log("DB CONNECTED");

    const body = await req.json();
    console.log("BODY:", body);

    const validated = quoteSchema.safeParse(body);

    if (!validated.success) {
      console.log(
        "VALIDATION ERROR:",
        validated.error.flatten()
      );

      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const quote = await Quote.create(validated.data);
    console.log("QUOTE SAVED:", quote);

    return NextResponse.json(
      {
        success: true,
        quote,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error("Quote API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}