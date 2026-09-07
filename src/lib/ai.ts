import { groq } from "./groq";

export async function askAI(message: string) {
  const chat =
    await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content:
            "You are Union Add AI Assistant. Help users about Union Add services and business queries.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

  return (
    chat.choices[0].message.content ||
    "Sorry, I couldn't answer."
  );
}