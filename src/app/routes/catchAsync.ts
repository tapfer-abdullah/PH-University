import { NextFunction, Request, RequestHandler, Response } from 'express';

// for handling asynchronus function e.g. try catch
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

export default catchAsync;
