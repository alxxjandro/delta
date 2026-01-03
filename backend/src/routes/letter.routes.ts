import { Router } from 'express'
import { generate } from '../controllers/letter.controller'
import { authMiddleware } from '../middleware/auth.middleware'

const router = Router()

router.post('/', authMiddleware, generate)

export default router
