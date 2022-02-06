import express from 'express';
import { getUser, createUser } from '../controllers/accounts.js';

const router = express.Router();

router.get('/:id',getUser);
router.get('/',createUser);

export default router;