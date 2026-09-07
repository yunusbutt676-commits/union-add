import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion =
      await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content:
              "You are Union Add AI Assistant. Help users about branding, websites and apps, digital media marketing, and company services.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn't answer.";

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "AI failed",
      },
      {
        status: 500,
      }
    );
  }
}