import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {

  const { text } = await req.json()

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  })

  const result = await model.generateContent(
    `Rewrite this resume description into professional bullet points:\n\n${text}`
  )

  const response = result.response.text()

  return NextResponse.json({ result: response })
}