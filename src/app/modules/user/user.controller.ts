import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../routes/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { userServices } from './user.service';
// import userValidationSchema from './user.validation';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const password = data?.password;
  const studentData = data.body;

  // const zodParsedData = userValidationSchema.parse(password);
  const result = await userServices.createStudentIntoBD(password, studentData);

  sendResponse(res, {
    success: true,
    message: 'Student created successfully',
    data: result,
    statusCode: httpStatus.OK,
  });
});

export const userControllers = {
  createUser,
};
