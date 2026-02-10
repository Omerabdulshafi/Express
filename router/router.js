import express from 'express';
import authMiddleware from '../middleware/auth.js';

import {getNames,CreateNames,getName,deleteName,updateName}  from "../controllers/names.js";

const router = express.Router();


router.get('/', authMiddleware, getNames);
router.get('/:id', authMiddleware, getName);
router.post('/', authMiddleware, CreateNames);
router.delete('/:id', authMiddleware, deleteName);
router.put('/:id', authMiddleware, updateName);


export default router;
