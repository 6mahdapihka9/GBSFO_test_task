import { Response, Request } from 'express';
import PasswordModel from "../models/PasswordModel";

const PasswordController = {
  async createPassword (req: Request, res: Response) {
    try {
      const _id = req.user;
      const password = JSON.parse(req.body.password as string);
      if (!password || !password.name || !password.value) {
        return res.status(403).json({ message: 'error: bad request' });
      }

      await (new PasswordModel({
        name: password.name,
        value: password.value,
        author: _id
      })).save();

      return res.status(200).json({ message: 'created' });
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err });
    }
  },
  async readPasswords (req: Request, res: Response) {
    try {
      const _id = req.user;

      const list = await PasswordModel.find({ author: _id });

      return res.status(200).json({ message: 'read', list });
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err });
    }
  },
  async updatePassword (req: Request, res: Response) {
    try {
      const password = JSON.parse(req.body.password as string);
      const passwordID = req.params.id;

      if (!password || !password.name || !password.value) {
        return res.status(403).json({ message: 'error: bad request' });
      }

      const isSuccess = await PasswordModel.findByIdAndUpdate(passwordID, {
        ...password
      });
      if (!isSuccess) {
        return res.status(200).json({ message: 'error: password was not found' });
      }

      return res.status(200).json({ message: 'updated' });
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err });
    }
  },
  async deletePassword (req: Request, res: Response) {
    try {
      const passwordID = req.params.id;

      const isSuccess = await PasswordModel.findByIdAndRemove(passwordID);
      if (!isSuccess) {
        return res.status(200).json({ message: 'error: password was not found' });
      }

      return res.status(200).json({ message: 'deleted' });
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err });
    }
  }
}
export default PasswordController
