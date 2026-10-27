import {type Request,type Response} from 'express';
import { hash,compare} from 'bcrypt';
import {pool} from '../config/db.js';

export default async function changePasswordController(req:Request,res:Response){
    const client=await pool.connect();
    const {oldPassword,newPassword,userId}=req.body;
    console.log(req.cookies.jwt_refresh);
    try{
        await client.query('begin');
        const passwordFromDb:string=(await client.query('select * from users where user_id=$1',[userId])).rows[0].password;
        if(!(await compare(oldPassword,passwordFromDb))){
            await client.query('rollback');
            res.status(409).json({message:'Wrong old password'});
            return;
        }
        if(await compare(newPassword,passwordFromDb)){
            await client.query('rollback');
            res.status(409).json({message:'New password is the same as a new one'})
            return;
        }
        await client.query('update users set password=$1 where user_id=$2 returning *',[await hash(newPassword,10),userId]);
        await client.query('commit');
        res.sendStatus(200);
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.stack);
        else
            console.log(err);
        await client.query('rollback');
        res.status(409).json({message:err});
    }
    finally{
        client.release();
    }
}
