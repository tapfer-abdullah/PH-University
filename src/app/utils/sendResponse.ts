import { Response } from 'express';

type TResponse<T> = {
  message?: string;
  statusCode: number;
  success: boolean;
  data?: T;
};

export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data?.statusCode).json({
    message: data?.message,
    success: data?.success,
    data: data.data,
  });
};
