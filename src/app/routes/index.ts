import express from 'express';
import { studentRoute } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
const router = express.Router();

const moduleRouters = [
  {
    path: '/student',
    route: studentRoute,
  },
  {
    path: '/user',
    route: userRouter,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
