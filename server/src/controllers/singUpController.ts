import {pool} from '../db.js';
import {type Request,type Response} from 'express'

export default async function singUpContoller(req:Request,res:Response){
    const client=await pool.connect();
    const {firstName,lastName,phone,email,password}=req.body;
    console.log('signUp controller');
    try{
        await client.query('begin');
        if((await client.query('select * from users where email=$1',[email])).rowCount){
            console.log("There is already exists user with such email");
            await client.query('rollback');
            res.status(409).json({isOk:false,message:"There is already exists user with such email"})
        }
        const userId=(await client.query('insert into users(first_name,last_name,email,phone,password) values ($1,$2,$3,$4,$5) returning user_id',[firstName,lastName,email,phone,password])).rows[0].user_id;
        await client.query('commit');
        res.status(200).json({isOk:true,userId});
    }
    catch(err){
        await client.query('rollback');
        console.error(err);
    }
    finally{
        client.release()
    }
}
