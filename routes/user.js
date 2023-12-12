import express from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup',  createUser);
router.post('/login',  loginUser);
router.get("/logout", isAuthenticated, logoutUser);

export default router;