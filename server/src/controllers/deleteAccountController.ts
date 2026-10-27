import {pool} from '../config/db.js';
import {type Request,type Response} from 'express'

export default async function deleteAccountController(req:Request,res:Response){
    const {userId}=req.body;
    const client=await pool.connect();
    try{
        await client.query('begin');
        await client.query('delete from users where user_id=$1',[userId]);
        res.status(200).json({message:"Account has been deleted"});
        await client.query('commit');
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.stack);
        else
            console.log(err);
        await client.query('rollback');
        res.status(500).json({message:'Something went wrong'});
    }
    finally{
        client.release();
    }
}
