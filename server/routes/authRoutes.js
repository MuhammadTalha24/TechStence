import express from 'express';
import { userRegister, userLogin } from '../controllers/authControllers.js';
import validate from '../middlewares/validationsMiddleware.js';
import { userRegisterValidation, userLoginValidation } from '../validations/authValidator.js';

const router = express.Router();



router.post('/register', validate(userRegisterValidation), userRegister);
router.post('/login', validate(userLoginValidation), userLogin);


export default router;