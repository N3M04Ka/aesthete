import {type Request,type Response} from 'express';
import {pool} from '../db.js'

export default async function changePasswordController(req:Request,res:Response){
    const client=await pool.connect();
    const {oldPassword,newPassword,userId}=req.body;
    try{
        client.query('begin');
        if(!(await client.query('select password=$1 as result from users where user_id=$2',[oldPassword,userId])).rows[0].result){
            client.query('rollback');
            res.status(409).json({message:'Wrong old password'});
            return;
        }
        if((await client.query('select password=$1 as result from users where user_id=$2',[newPassword,userId])).rows[0].result){
            client.query('rollback');
            res.status(409).json({message:'New password is the same as a new one'})
            return;
        }
        const result =(await client.query('update users set password=$1 where user_id=$2 returning *',[newPassword,userId])).rows;
        await client.query('commit');
        res.sendStatus(200);
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.stack);
        else
            console.log(err);
        await client.query('rollback');
    }
    finally{
        client.release();
    }
}
