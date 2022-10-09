import express from 'express'
import authRouter from "./authRouter";
import passwordsRouter from "./passwordsRouter";

const router = express.Router();

router.use('/auth', authRouter);
router.use('/passwords', passwordsRouter);

export default router