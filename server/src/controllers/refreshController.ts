import {type Request,type Response} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {pool} from '../config/db.js';
import {compare} from 'bcrypt';

dotenv.config();

export default async function refreshController(req:Request,res:Response){
    const refreshToken=req.cookies.jwt_refresh;
    if(!refreshToken)
        return res.status(401).json({message:"No refresh token"});
    if(!process.env.REFRESH_TOKEN_SECRET)
        throw new Error("REFRESH_TOKEN_SECRET is undefined");
    try{
        const decoded=jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET as string) as jwt.JwtPayload;
        const dbRefreshToken=(await pool.query<{refresh_token:string}>('select refresh_token from users where user_id=$1',[decoded.userId])).rows[0]?.refresh_token;
        console.log(refreshToken+"1 2"+dbRefreshToken);
        if(!dbRefreshToken||(await compare(refreshToken,dbRefreshToken)))
            return res.status(403).json({message:"Invalid or revoked token"});
        const newAccessToken=jwt.sign(
            {userId:decoded.userId},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'15m'}
        );
        res.json({accessToken:newAccessToken});
    }catch(err){
        if(err instanceof Error)
            console.error(err.message);
        else
            console.log(err);
    }
}
