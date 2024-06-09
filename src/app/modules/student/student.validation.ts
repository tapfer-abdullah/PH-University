import { z } from 'zod';

// Define the Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

// Define the Local Guardian schema
const localGuardianSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

// Define the Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string(), // required: true
      middleName: z.string().optional(),
      lastName: z.string(), // required: true
    }),
    email: z.string().email(), // required: true
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    contactNo: z.string(), // required: true
    emergencyContactNo: z.string(), // required: true
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    guardian: guardianSchema.optional(),
    localGuardian: localGuardianSchema,
    profileImg: z.string().optional(),
    admissionSemester: z.string().optional(), // Assuming this is an ObjectId represented as a string
    academicDepartment: z.string().optional(), // Assuming this is an ObjectId represented as a string
  }),
});

export { createStudentValidationSchema };
