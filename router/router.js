import express from 'express';

import {getNames,CreateNames,getName,deleteName,updateName}  from "../controllers/names.js";

const router = express.Router();

router.get('/', getNames);
router.get('/:id', getName);
router.post('/', CreateNames);
router.delete('/:id', deleteName);
router.put('/:id', updateName);


export default router;
