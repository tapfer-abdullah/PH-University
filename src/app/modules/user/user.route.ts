import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';
import { userControllers } from './user.controller';

export const userRouter = express.Router();

userRouter.post(
  '/',
  validateRequest(createStudentValidationSchema),
  userControllers.createUser,
);
