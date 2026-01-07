import { Request, Response } from 'express'
import { ICoverLetterPDFRequest } from '../ValueObjects/letterVO'
import { generateCoverLetterPDFService } from '../services/pdf.service'
import { generateLetter, getCoverLettersByUser } from '../services/letter.service'

export const generate = async (req: Request, res: Response) => {
  try {
    const data = req.body?.data
    const userId = (req as any).user?.id

    if (!data) throw new Error('Missing data!')
    if (!userId) throw new Error('Unauthorized!')

    const result = await generateLetter(userId, data)

    return res.status(201).json(result)
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Internal server error',
    })
  }
}

export const getCoverLetters = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id
    const letters = await getCoverLettersByUser(userId)
    res.status(200).json(letters)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cover letters' })
  }
}

export const generateCoverLetterPDF = async (req: Request, res: Response) => {
  try {
    const data = req.body as ICoverLetterPDFRequest
    const userId = (req as any).user?.id

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    if (!data?.user || !data?.letter) {
      console.log(data, data.user, data.letter)
      return res.status(400).json({ message: 'Invalid payload' })
    }

    const pdfBuffer = await generateCoverLetterPDFService(data)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=cover-letter.pdf')

    return res.send(pdfBuffer)
  } catch (error: any) {
    return res.status(500).json({
      message: error.message || 'Failed to generate PDF',
    })
  }
}
