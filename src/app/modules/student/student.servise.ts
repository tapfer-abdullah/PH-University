import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentInBD = async (studentData: Student) => {
  const result = await studentModel.create(studentData);
  return result;
};

const getAllStudentInfo = async () => {
  const result = await studentModel.find();
  return result;
};

const getStudentByID = async (studentId: string) => {
  const result = await studentModel.findById(studentId);
  return result;
};

export const studentServices = {
  createStudentInBD,
  getAllStudentInfo,
  getStudentByID,
};
