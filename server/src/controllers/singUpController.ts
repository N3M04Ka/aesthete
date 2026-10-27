import {pool} from '../config/db.js';
import {type Request,type Response} from 'express'
import {hash} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { type UserRow } from '../config/db.js';

export default async function singUpContoller(req:Request,res:Response){
    const client=await pool.connect();
    const {firstName,lastName,phone,email,password}=req.body;
    if(!(process.env.REFRESH_TOKEN_SECRET&&process.env.ACCESS_TOKEN_SECRET))
        return res.status(409).json({message:"There is no secret for generating refresh token"});
    try{
        await client.query('begin');
        if((await client.query<UserRow>('select * from users where email=$1',[email])).rowCount){
            await client.query('rollback');
            return res.status(409).json({message:"There is already exists user with such email"})
        }
        const hashedPassword=await hash(password,10);
        const user=(await client.query<UserRow>('insert into users(first_name,last_name,email,phone,password,refresh_token) values ($1,$2,$3,$4,$5,$6) returning *',[firstName,lastName,email,phone,hashedPassword,"-"])).rows[0];
        if(!user)
            return res.status(409).json({message:"Something went wrong"});
        const refreshToken=jwt.sign(
            {
                userId:user.user_id,
                userRole:user.role
            },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:"7d"}
        )
        const accessToken=jwt.sign(
            {
                userId:user.user_id
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'15m'}
        )
        await client.query('update users set refresh_token=$1 where user_id=$2',[await hash(refreshToken,10),user.user_id]);
        await client.query('commit');
        res.cookie('jwt_refresh',refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:'none',
            maxAge:7*24*60*60*1000,
        })
        res.status(200).json({userId:user.user_id,accessToken});
    }
    catch(err){
        await client.query('rollback');
        console.error(err);
        res.status(409).json({message:err});
    }
    finally{
        client.release()
    }
}
