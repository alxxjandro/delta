import { Request, Response } from 'express'
import { generateLetter } from '../services/letter.service'

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
