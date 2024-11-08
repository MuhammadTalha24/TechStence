import express from "express"
import { getServices, createService } from "../controllers/serviceController.js"

const router = express.Router()

router.get('/services', getServices)
router.post('/services', createService)
export default router
