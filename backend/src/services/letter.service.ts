import prisma from '../db'
import { HttpError } from '../errors'
import { ICoverLetterGenerateRequest, ICoverLetter } from '../ValueObjects/letterVO'

export async function generateLetter(
  userId: string,
  data: ICoverLetterGenerateRequest
): Promise<ICoverLetter> {
  const { title, company, position, tone, keypoints } = data

  if (!userId) {
    throw new HttpError('Unauthorized', 401)
  }

  if (!title || !company || !position || !tone || !keypoints) {
    throw new HttpError('Missing required fields', 400)
  }

  const generatedContent = 'This is a boilerplate :)'

  const coverLetter = await prisma.coverLetters.create({
    data: {
      title,
      company,
      position,
      tone,
      keypoints,
      content: generatedContent,
      userId,
    },
  })

  return coverLetter as ICoverLetter
}
