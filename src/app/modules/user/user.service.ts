import config from '../../config';
import { TStudent } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoBD = async (password: string, studentData: TStudent) => {
  // creating new user
  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);
  //set role to student
  user.role = 'student';
  //   set manually generated id
  user.id = studentData.id || '242-0118-203';
  // console.log({ password, studentData, user });

  const newUser = await User.create(user);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await studentModel.create(studentData);
    console.log({ newStudent });
    return { newStudent, newUser };
  }
};

export const userServices = {
  createStudentIntoBD,
};
