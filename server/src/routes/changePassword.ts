import express from 'express';
import changePasswordController from '../controllers/changePasswordController.js';
export const router=express.Router();

router.post('/',changePasswordController);
