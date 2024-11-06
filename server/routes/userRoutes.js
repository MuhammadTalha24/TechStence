import express from 'express';
import { userDetails } from '../controllers/userControllers.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/user', verifyToken, userDetails)

export default router;

