import { Router } from 'express'
import {
  generate,
  getCoverLetters,
  generateCoverLetterPDF,
} from '../controllers/letter.controller'
import { authMiddleware } from '../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getCoverLetters)
router.post('/', authMiddleware, generate)
router.post('/pdf', authMiddleware, generateCoverLetterPDF)

export default router
