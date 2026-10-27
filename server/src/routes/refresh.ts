import express from 'express';
import refreshController from '../controllers/refreshController.js';
export const router=express.Router();

router.post('/',refreshController);
