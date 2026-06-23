import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'
import {router as root} from './routes/root.js'

const port=3500;
const app=express();
const __dirname=path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,"..","..","client","public")));

app.use(express.json());

app.use('/',root);

(()=>{
    app.listen(port,()=>console.log("Server is running on port "+port));
})()
