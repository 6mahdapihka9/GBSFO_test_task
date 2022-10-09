import express from 'express'

const authRouter = express.Router()

authRouter.get('/check-token', () => {})
authRouter.post('/sign-up', () => {})
authRouter.post('/sign-in', () => {})

export default authRouter