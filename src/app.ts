import express, { Express, Request, Response, NextFunction } from 'express';
import { sendJsonErrors } from '../helpers/responseHandler';
import createError from 'http-errors';
const app: Express = express();

import articlesRouter from './routes/v1/articles.route'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});


app.use('/api/v1/articles',articlesRouter);

//Handle Errors App
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler --> tất cả lỗi khác rơi vào đây
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log('<<< Error Handler Stack >>>', err.stack);
  //console.error('<< Middleware Error >>', err);
  
  sendJsonErrors(res, err);
});
export default app