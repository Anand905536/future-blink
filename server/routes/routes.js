import express from 'express'
import { askApi } from "../services/ai.services.js";
import { saveInDb } from "../controllers/prompt.controller.js";
const router=express.Router()

router.post('/ask-ai', askApi);
router.post('/save',saveInDb)

export default router;
