import { AuthService, SignupService } from '../services/authService'
import { Request, Response } from 'express'
import { HttpError } from '../errors'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const result = await AuthService({ email, password })
    console.log(result)
    return res.status(200).json({
      success: true,
      message: 'Successful login',
      token: result?.token,
      user: result?.user,
    })
  } catch (e) {
    if (e instanceof HttpError) {
      return res.status(e.status).json({ success: false, message: e.message })
    }

    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password } = req.body
    await SignupService({ name, username, email, password })

    return res.status(200).json({
      success: true,
      message: 'Account created successfully',
    })
  } catch (e) {
    if (e instanceof HttpError) {
      return res.status(e.status).json({ success: false, message: e.message })
    }
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
