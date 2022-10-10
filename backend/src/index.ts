import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';
import router from "./routes";
import './config';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ credentials: true, origin: '*' }));

app.use('/api', router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Application started on port ${port}!`);
});