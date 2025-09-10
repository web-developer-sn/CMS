import express from 'express';
import {createLecture,getAllLectures,updateLecture,deleteLecture} from '../controllers/teacher/lectures.teacher.controller.js'
import { verifyToken } from '../config/jwt.js';
import { roleMiddleware } from '../middlewares/role.middleware.js';
const router=express.Router();
router.use(verifyToken)
router.use(roleMiddleware(['teacher']))
// router.post("/lectures",createLecture);
router.get("/lectures",getAllLectures);
router.put("/lectures/:id",updateLecture);
router.delete("/lectures/:id",deleteLecture);
// router.post("/leave-request",leaveRequest);
// router.post("/exam-schedule",examSchedule);
// router.get("/settings",settings);
// router.get('/dashboard',dashboardTeacher);

export default router;