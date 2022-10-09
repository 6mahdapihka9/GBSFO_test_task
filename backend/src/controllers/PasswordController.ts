import { Response, Request } from 'express';

const PasswordController = {
  async createPassword (req: Request, res: Response) {
    try {

      return res.status(200).json({ message: 'create' })
    } catch (err: any) {
      return res.status(500).json({ message: 'error' })
    }
  },
  async readPasswords (req: Request, res: Response) {
    try {

      return res.status(200).json({ message: 'read' })
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err })
    }
  },
  async updatePassword (req: Request, res: Response) {
    try {

      return res.status(200).json({ message: 'update' })
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err })
    }
  },
  async deletePassword (req: Request, res: Response) {
    try {

      return res.status(200).json({ message: 'delete' })
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err })
    }
  }
}
export default PasswordController
