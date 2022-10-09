import express from 'express'

const router = express.Router();

router.use('/auth', () => {});
router.use('/passwords', () => {});

export default router