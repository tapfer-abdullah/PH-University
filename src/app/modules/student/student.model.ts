import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({
  name: {
    firstName: {
      type: String,
      require: true,
    },
    middleName: String,
    lastName: {
      type: String,
      require: true,
    },
  },
  email: {
    type: String,
    require: true,
  },
  contact: { type: String, require: true },
  gender: ['male', 'female'],
  address: {
    city: String,
    country: String,
    postalCode: String,
  },
});

const studentModel = model<Student>('Student', studentSchema);

export { studentModel };
