import express,{type Response,type Request} from 'express'
import {pool} from '../db.js'

export const router=express.Router();

export async function authentification(req:Request,res:Response){
    const client=await pool.connect();
    let result;
    let isOk=true;
    try{
        result=(await client.query('select * from users where email=$1 ',[req.params.password])).rows;
        if(result.length==0)
            res.status(200).json({isOk:false,data:"There is no user with such email"})
        else if(result[0].password!=req.params.password)
            res.status(200).json({isOk:false,data:"Wrong password"})
    }
    catch(err){
        if(err instanceof Error){
            console.error(err.stack);
        }
        else
            console.log(err);
        isOk=false;
    }
    finally{
        client.release();
        if(isOk){
            res.status(200).json({isOk:true,data:result![0]});
        }
        else{
            res.end();
        }
    }
}
