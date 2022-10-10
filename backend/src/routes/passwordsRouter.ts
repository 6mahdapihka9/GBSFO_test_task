import express from 'express'
import PasswordController from "../controllers/PasswordController";

const passwordsRouter = express.Router();

passwordsRouter.put('/create', PasswordController.createPassword);
passwordsRouter.get('/read', PasswordController.readPasswords);
passwordsRouter.patch('/update/:id', PasswordController.updatePassword);
passwordsRouter.delete('/delete/:id', PasswordController.deletePassword);

export default passwordsRouter;