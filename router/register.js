import express from "express"

import {getRegisters,getNames} from "../controllers/register.js"


const router=express.Router()

router.post("/", getRegisters);
router.get("/", getNames);





export default router