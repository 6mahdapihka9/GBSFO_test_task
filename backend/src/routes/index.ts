import express from 'express'
import authRouter from "./authRouter";
import passwordsRouter from "./passwordsRouter";
import passport from "passport";

const router = express.Router();

router.use('/auth', authRouter);
router.use('/passwords', passport.authenticate('jwt', { session: false }), passwordsRouter);

export default router