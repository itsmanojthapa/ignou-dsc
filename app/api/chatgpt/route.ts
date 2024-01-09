import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = async (request: Request) => {
  try {
    const { question } = await request.json();

    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content:
    //           "You're a knowledgeable assistant that provides quality information.",
    //       },
    //       {
    //         role: "user",
    //         content: `You're an assistant, return a reply to ${question}`,
    //       },
    //     ],
    //   }),
    // });

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You're a knowledgeable assistant that provides quality information.",
        },
        {
          role: "user",
          content: `You're an assistant, return a reply to ${question}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const responseData = chatCompletion;
    const reply = responseData.choices[0]?.message?.content;

    if (reply) {
      return NextResponse.json({ reply });
    } else {
      throw new Error("No valid reply received from the OpenAI API.");
    }
  } catch (error: any) {
    // Handle any other errors
    console.error("Error:", error.message);
    return NextResponse.json({
      error: error.message,
    });
  }
};
