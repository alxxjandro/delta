import prisma from '../db'
import { HttpError } from '../errors'
import { coverLetterPrompt } from '../AI/prompts/coverLetter.prompt'
import { generateWithGemini } from './gemini.service'
import {
  ICoverLetterGenerateRequest,
  ICoverLetter,
  ToneType,
} from '../ValueObjects/letterVO'

export async function generateLetter(
  userId: string,
  data: ICoverLetterGenerateRequest
): Promise<ICoverLetter> {
  if (!userId) throw new HttpError('Unauthorized', 401)

  const prompt = coverLetterPrompt(data)
  const generatedContent = await generateWithGemini(prompt)

  const coverLetter = await prisma.coverLetters.create({
    data: {
      title: data.title,
      company: data.company,
      position: data.position,
      tone: data.tone,
      keypoints: data.keypoints,
      jobDescription: data.jobDescription,
      content: generatedContent,
      userId,
    },
  })

  return coverLetter as ICoverLetter
}

export async function getCoverLettersByUser(userId: string): Promise<ICoverLetter[]> {
  const letters = await prisma.coverLetters.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })

  return letters.map((letter) => ({
    ...letter,
    tone: letter.tone as ToneType,
  }))
}
