import express,{type Response,type Request} from 'express'
import {pool} from '../db.js'

export const router=express.Router();

export async function authentification(req:Request,res:Response){
    const client=await pool.connect();
    try{
        const result=(await client.query('select * from users where email=$1',[req.body.email])).rows;
        if(result.length==0)
            res.status(409).json({message:"User with such email doesn\'t exists"})
        else if(result[0].password!=req.body.password)
            res.status(400).json({message:"Wrong password"})
        else{
            let {first_name,last_name,phone,user_id}=result[0];
            res.status(200).json({user_id,firstName:first_name,lastName:last_name,phone})
        }
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.stack);
        else
            console.log(err);
    }
    finally{
        client.release();
    }
}
