/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statuscode = 500;
  const message = error || 'Something went wrong';

  return res.status(statuscode).json({ message, success: false, error });
};

export default globalErrorHandler;
