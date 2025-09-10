import express from 'express';
import { user,getUser } from '../controllers/user.controller.js';
import { updatePassword } from '../controllers/auth.controller.js';
const router =express.Router();

router.post("/",user);
router.get("/:user",getUser)
router.post('/update-password',updatePassword)

export default router