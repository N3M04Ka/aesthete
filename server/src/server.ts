import express, {type Request,type Response,type NextFunction} from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'
import {router as root} from './routes/root.js'
import {router as authentification} from './routes/auth.js'
import {router as signUp} from './routes/signUp.js'
import {router as changePassword} from './routes/changePassword.js'
import {router as deleteAccount} from './routes/deleteAccount.js'
import {router as refresh} from './routes/refresh.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const port=3500;
const app=express();
const __dirname=path.dirname(fileURLToPath(import.meta.url));

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true,
}))

app.use(cookieParser());

app.use(express.static(path.join(__dirname,"..","..","client","public")));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

// app.use('/',root);

app.use('/auth/signUp',signUp);

app.use('/auth/login',authentification);

app.use('/auth/changePassword',changePassword);

app.use('/auth/delete-account',deleteAccount)

app.use('/auth/refresh',refresh);

app.use((req,res)=>{
    res.status(404).send("Sorry can't find that");
});

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

(()=>{
    app.listen(port,()=>console.log("Server is running on port "+port));
})()
