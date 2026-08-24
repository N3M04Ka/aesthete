import {pool} from '../db.js';
import {type Request,type Response} from 'express'

export default async function deleteAccountController(req:Request,res:Response){
    const {userId}=req.body;
    const client=await pool.connect();
    console.log(userId)
    try{
        await client.query('begin');
        await client.query('delete from users where user_id=$1',[userId]);
        res.status(200).json({isOk:true, message:"Account has been deleted"});
        await client.query('commit');
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.stack);
        else
            console.log(err);
        await client.query('rollback');
        res.status(500).json({isOk:false,message:'Something went wrong'});
    }
    finally{
        await client.release();
    }
}
