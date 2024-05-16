import { Request, Response } from 'express';
import { studentServices } from './student.servise';

const createStudent = async (req: Request, res: Response) => {
  const { student: data } = req.body;

  try {
    const result = await studentServices.createStudentInBD(data);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({
      success: false,
      message: 'Unable to create student',
      data: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentInfo();

    res.status(200).json({
      success: true,
      message: 'Students data fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({
      success: false,
      message: 'Unable to fetch students',
      data: error,
    });
  }
};

const getStudentByID = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  try {
    const result = await studentServices.getStudentByID(studentId);

    res.status(200).json({
      success: true,
      message: 'Student data fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(200).json({
      success: false,
      message: 'Unable to fetch student info',
      data: error,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getStudentByID,
};
