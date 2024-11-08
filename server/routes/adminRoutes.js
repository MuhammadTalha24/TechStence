import express from 'express'
import { getAllUsers, getAllContacts, deleteUser, editUser, deleteContact } from '../controllers/adminController.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'
const router = express.Router()


router.get('/admin/users', getAllUsers);
router.delete('/admin/users/delete/:id', deleteUser);
router.put('/admin/users/edit/:id', editUser);
router.get('/admin/contact', getAllContacts);
router.delete('/admin/contact/delete/:id', deleteContact);
export default router
