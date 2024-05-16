import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.get('/', studentController.getAllStudent);
router.post('/create-student', studentController.createStudent);
router.get('/:studentId', studentController.getStudentByID);

export const studentRoute = router;
