import mongoose, { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';

export const guardianSchema = new mongoose.Schema({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

export const localGuardianSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  contactNo: String,
  address: String,
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: String,
    lastName: {
      type: String,
      required: true,
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: String,
  permanentAddress: String,
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: String,
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: '',
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: '',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// virtual schema for adding new field using existing fields. It will return fullName field as well with the documents
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Adding indexes to ensure uniqueness
// studentSchema.index({ id: 1 }, { unique: true });
// studentSchema.index({ user: 1 }, { unique: true });
// studentSchema.index({ email: 1 }, { unique: true });

const studentModel = model<TStudent>('Student', studentSchema);

// Ensure indexes are created
// studentModel
//   .createIndexes()
//   .then(() => console.log('Indexes created successfully'))
//   .catch((error) => console.error('Error creating indexes:', error));

export { studentModel };
