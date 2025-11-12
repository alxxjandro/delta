import { Request, Response } from 'express'
import * as userService from '../services/user.service.js'

export const getAllUsers = (req: Request, res: Response) => {
  res.send('get all users')
}
export const getUserById = (req: Request, res: Response) => {}
export const createUser = (req: Request, res: Response) => {}
export const updateUser = (req: Request, res: Response) => {}
export const deleteUser = (req: Request, res: Response) => {}
