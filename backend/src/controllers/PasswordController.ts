import { Response, Request } from 'express';
import PasswordModel from "../models/PasswordModel";
import {PasswordType} from "../types";

const PasswordController = {
  async createPassword (req: Request, res: Response) {
    try {
      const userID = req.user;

      const { name, value } = req.body;
      if (!name || !value) {
        return res.status(403).json({ error: 'bad request' });
      }

      const { _id } = await (new PasswordModel({
        name,
        value,
        author: userID
      })).save();

      return res.status(200).json({ message: 'created', _id });
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
      const { name, value } = req.body;
      const passwordID = req.params.id;

      if (!name && !value) {
        return res.status(403).json({ error: 'bad request' });
      }

      const isSuccess = await PasswordModel.findByIdAndUpdate(passwordID, {
        name,
        value
      });
      if (!isSuccess) {
        return res.status(403).json({ error: 'password was not found' });
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
        return res.status(403).json({ error: 'password was not found' });
      }

      return res.status(200).json({ message: 'deleted' });
    } catch (err: any) {
      return res.status(500).json({ error: 'other server error', err });
    }
  }
}
export default PasswordController
