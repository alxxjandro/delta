import { Router } from 'express'
import { generate, getCoverLetters } from '../controllers/letter.controller'
import { authMiddleware } from '../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getCoverLetters)
router.post('/', authMiddleware, generate)

export default router
