import {Pool} from 'pg'
import dotenv from 'dotenv'

dotenv.config();

export const pool=new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT)||5432,
    database:process.env.DB_NAME,
})

export interface UserRow{
    user_id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone:string,
    password:string,
    refresh_token:string,
    role:string,
}
