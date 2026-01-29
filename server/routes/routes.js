import express from 'express'
import { askApi } from "../services/ai.services.js";
import { saveInDb ,getHistory } from "../controllers/prompt.controller.js";
const router=express.Router()

router.post('/ask-ai', askApi);
router.post('/save',saveInDb)
router.get("/history", getHistory);
export default router;
