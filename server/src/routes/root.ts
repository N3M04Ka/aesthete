import path from 'path'
import express from 'express'
import {fileURLToPath} from 'url';
const __dirname=path.dirname(fileURLToPath(import.meta.url));

export const router=express.Router();
router.get(['/'],(req,res)=>{
    // res.sendFile(path.join(__dirname,"..","..","..","client","index.html"));
    console.log(path.join('__dirname',"..",'index.html'));
    res.sendFile(path.join('__dirname',"..",'index.html'));
})
