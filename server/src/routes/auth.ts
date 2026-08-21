import * as controller from '../controllers/authController.js'
import express from 'express'

export const router =express.Router();

router.post('/',controller.authentification);
