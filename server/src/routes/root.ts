import path from 'path'
import express from 'express'
import {fileURLToPath} from 'url';

const __dirname=path.dirname(fileURLToPath(import.meta.url));

export const router=express.Router();
router.get(['/'],(req,res,next)=>{
    // next('route')
})
