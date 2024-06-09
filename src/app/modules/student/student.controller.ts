import { Request, Response } from 'express';
import catchAsync from '../../routes/catchAsync';
import { studentServices } from './student.servise';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student: data } = req.body;

  const result = await studentServices.createStudentInBD(data);

  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await studentServices.getAllStudentInfo();

  res.status(200).json({
    success: true,
    message: 'Students data fetched successfully',
    data: result,
  });
});

const getStudentByID = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;

  const result = await studentServices.getStudentByID(studentId);

  res.status(200).json({
    success: true,
    message: 'Student data fetched successfully',
    data: result,
  });
});

export const studentController = {
  createStudent,
  getAllStudent,
  getStudentByID,
};
