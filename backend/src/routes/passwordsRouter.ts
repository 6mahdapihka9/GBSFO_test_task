import express from 'express'
import PasswordController from "../controllers/PasswordController";

const passwordsRouter = express.Router();

passwordsRouter.put('/create', PasswordController.createPassword);
passwordsRouter.get('/read', PasswordController.readPasswords);
passwordsRouter.patch('/update', PasswordController.updatePassword);
passwordsRouter.delete('/delete', PasswordController.deletePassword);

export default passwordsRouter;