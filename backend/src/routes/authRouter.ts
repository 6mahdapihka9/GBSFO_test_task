import express from 'express'
import AuthController from "../controllers/AuthController";

const authRouter = express.Router()

authRouter.get('/check-token', AuthController.checkJwt)
authRouter.post('/sign-up', AuthController.signUp)
authRouter.post('/sign-in', AuthController.signIn)

export default authRouter