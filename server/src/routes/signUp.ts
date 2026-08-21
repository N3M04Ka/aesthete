import singUpContoller from "../controllers/singUpController.js";
import express from 'express';

export const router=express.Router();

router.post('/',singUpContoller);
