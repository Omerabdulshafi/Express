import express from "express"
import authMiddleware from "../middleware/auth.js";
import {getRegisters,getNames} from "../controllers/register.js"


const router=express.Router()

router.post("/", authMiddleware, getRegisters);
router.get("/", authMiddleware, getNames);





export default router