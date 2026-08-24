import express from 'express'
import deleteAccountController from '../controllers/deleteAccountController.js';
export const router =express.Router();

router.post('/',deleteAccountController);
