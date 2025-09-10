import express from "express";
import {
  homework,
  getHomework,
} from "../controllers/student/homework.student.controller.js";
import {
  leaveRequest,
  getLeaveRequest,
} from "../controllers/student/leave_request.student.controller.js";
import {
  timeTable,
  getTimeTable,
} from "../controllers/student/time_table.student.controller.js";
import { verifyToken } from "../config/jwt.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
const router = express.Router();
router.use(verifyToken);
router.use(roleMiddleware(["student"]));
/**
 * @swagger
 * /student/homework:
 *   post:
 *     summary: homework
 *     tags: [Student]
 *     responses:
 *       201:
 *         description: student content retrieved successfully
 */
router.post("/homework", homework);
/**
 * @swagger
 * /student/leave-request:
 *   post:
 *     summary: Submit multiple leave requests
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               required:
 *                 - user
 *                 - subject
 *                 - className
 *                 - date
 *                 - time
 *                 - duration
 *                 - roomNo
 *               properties:
 *                 user:
 *                   type: string
 *                   example: student123
 *                 subject:
 *                   type: string
 *                   example: Sick Leave
 *                 className:
 *                   type: string
 *                   example: 12th Science
 *                 date:
 *                   type: string
 *                   format: date
 *                   example: 2025-07-15
 *                 time:
 *                   type: string
 *                   example: Full Day
 *                 duration:
 *                   type: string
 *                   example: 1 day
 *                 roomNo:
 *                   type: string
 *                   example: N/A
 *                 reason:
 *                   type: string
 *                   example: Fever
 *     responses:
 *       201:
 *         description: Leave requests submitted
 *       400:
 *         description: Invalid input
 */
router.post("/leave-request", leaveRequest);

/**
 * @swagger
 * /student/time-table:
 *   post:
 *     summary: Add student time table entries
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 user:
 *                   type: string
 *                   example: teacher1@example.com
 *                 subject:
 *                   type: string
 *                   example: Mathematics
 *                 className:
 *                   type: string
 *                   example: Class 1
 *                 date:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-07-15T09:00:00Z
 *                 time:
 *                   type: string
 *                   example: 10:30 AM
 *                 duration:
 *                   type: string
 *                   example: 3 hours
 *                 roomNo:
 *                   type: string
 *                   example: 101
 *                 totalMarks:
 *                   type: integer
 *                   example: 100
 *                 requiredMarks:
 *                   type: integer
 *                   example: 35
 *     responses:
 *       200:
 *         description: Time table added successfully
 */

router.post("/time-table", timeTable);
/**
 * @swagger
 * /student/homework:
 *   get:
 *     summary: Get Student homework entries by email
 *     tags: [Student]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Student email
 *     responses:
 *       200:
 *         description: Homework entries fetched successfully
 *       400:
 *         description: Email is required
 *       404:
 *         description: No homework found
 */
router.get("/homework", getHomework);
/**
 * @swagger
 * /student/leave-request:
 *   get:
 *     summary: Get Student leave request
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Student leve request content retrieved successfully
 */
router.get("/leave-request", getLeaveRequest);

/**
 * @swagger
 * /student/time-table:
 *   get:
 *     summary: Get student time table
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Student Time content retrieved successfully
 */



router.get("/time-table", getTimeTable);

export default router;
