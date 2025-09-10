import express from 'express';
import auth from './auth.routes.js';
import userRoutes from './user.routes.js';
import student from './student.routes.js';
import { getHome } from '../controllers/home/home.controller.js';
import { getHeader } from '../controllers/home/header.controller.js';
import { getFooter } from '../controllers/home/footer.controller.js';


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Public routes like Home, Header, Footer
 */

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Get home page content
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Home content retrieved successfully
 */
router.get("/home", getHome);

/**
 * @swagger
 * /header:
 *   get:
 *     summary: Get header content
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Header content retrieved successfully
 */
router.get("/header", getHeader);

/**
 * @swagger
 * /footer:
 *   get:
 *     summary: Get footer content
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Footer content retrieved successfully
 */
router.get("/footer", getFooter);

router.use('/auth', auth);
router.use('/student', student);
router.use('/user', userRoutes);

export default router;
