import express,{type Response,type Request} from 'express'
import {pool} from '../config/db.js'
import {compare} from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {hash} from 'bcrypt';
import {type UserRow} from '../config/db.js';

dotenv.config();

export const router=express.Router();

export async function authentification(req:Request,res:Response){
    const client=await pool.connect();
    const {password,email}=req.body;
    try{
        const user=(await client.query<UserRow>('select * from users where email=$1',[email])).rows[0];
        if(!user)
            return res.status(409).json({message:"User with such email doesn\'t exists"})
        else if(!(await compare(password,user.password)))
            return res.status(400).json({message:"Wrong password"})
        else if(!process.env.ACCESS_TOKEN_SECRET)
            return res.status(401).json({message:"Access is invalid or revoked"});
        else if(!process.env.REFRESH_TOKEN_SECRET)
            return res.status(401).json({message:"Refresh is invalid or revoked"});
        let {first_name,last_name,phone,user_id,role}=user;
        const accessToken=jwt.sign(
            {userId:user.user_id,userRole:role},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'15m'}
        );
        const refreshToken=jwt.sign(
            {userId:user.user_id},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'7d'}
        )
        const hashedRefreshToken=await hash(refreshToken,10);
        await pool.query('update users set refresh_token=$1 where user_id=$2',[hashedRefreshToken,user.user_id]);
        res.cookie('jwt_refresh',hashedRefreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:'none',
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json({user_id,firstName:first_name,lastName:last_name,phone,accessToken})
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
