import { NextFunction, Request, Response } from 'express'

const AuthController = {
  async signUp (req: Request, res: Response, next: NextFunction) {
    try {

      return res.status(200).json({ message: 'signUp' })
    } catch (err: any) {
      return res.status(500).json({ message: 'error' })
    }
  },

  async signIn (req: Request, res: Response, next: NextFunction) {
    try {

      return res.status(200).json({ message: 'signIn' })
    } catch (err: any) {
      return res.status(500).json({ message: 'error' })
    }
  },

  async checkJwt (req: Request, res: Response) {
    try {

      return res.status(200).json({ message: 'check Jwt' })
    } catch (err: any) {
      return res.status(500).json({ message: 'error' })
    }
  }
}

export default AuthController
