import express from 'express'

const passwordsRouter = express.Router();

passwordsRouter.put('/create', () => {});
passwordsRouter.get('/read', () => {});
passwordsRouter.patch('/update', () => {});
passwordsRouter.delete('/delete', () => {});

export default passwordsRouter;