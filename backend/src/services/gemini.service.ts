import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!)

export async function generateWithGemini(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
  })

  const result = await model.generateContent(prompt)
  return result.response.text()
}
