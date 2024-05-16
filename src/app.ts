import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
// cors
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// all routes
app.use('/api/v1/student', studentRoute);
app.use('/api/v1/user', studentRoute);

export default app;
