import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Application started on port ${port}!`);
});