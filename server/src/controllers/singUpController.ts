import {pool} from '../db.js';
import express,{type Request,type Response} from 'express'

export default async function singUpContoller(req:Request,res:Response){
    const client=await pool.connect();
    const {firstName,lastName,phone,email,password}=req.body;
    let isOk=true,message="Everything is okey";
    console.log('signUp controller');
    try{
        await client.query('begin');
        if((await client.query('select * from users where email=$1',[email])).rowCount){
            console.log("There is already exists user with such email");
            await client.query('rollback');
            return res.status(409).json({isOk:false,data:"There is already exists user with such email"})
        }
        await client.query('insert into users(first_name,last_name,email,phone,password) values ($1,$2,$3,$4,$5)',[firstName,lastName,email,phone,password]);
        await client.query('commit');
        res.status(201).json({isOk:true,data:"Account has been created"});
    }
    catch(err){
        await client.query('rollback');
        console.error(err);
    }
    finally{
        client.release()
    }
}
