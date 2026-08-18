import { TfiInfoAlt } from "react-icons/tfi";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import {type IconType} from 'react-icons'
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {removeSnackbar} from '@/app/slices/SnackbarSlice'
import {type RootState} from '@/app/store'

interface SnackbarT{
    icon:IconType,
    color:string
}
interface SnackbarTypeHolder{
    info:SnackbarT,
    error:SnackbarT,
    success:SnackbarT,
}
const types:SnackbarTypeHolder={
    info:{
        icon:TfiInfoAlt,
        color:'0fa0e2',
    },
    error:{
        icon:MdErrorOutline,
        color:"BA1A1A",
    },
    success:{
        icon:IoMdCheckmark,
        color:"0dd11a",
    }
}
export interface Snackbar{
    id:string,
    message:string,
    type:keyof SnackbarTypeHolder,
}
const milisecondsBeforeClose=3000;

function Snackbar({type,message,id}:Snackbar) {
    const snackBarProps=types[type];
    const Icon= snackBarProps.icon;
    const dispatch=useDispatch();
    useEffect(()=>{
        const timer=setTimeout(()=>{
            dispatch(removeSnackbar(id))
        },milisecondsBeforeClose)
        return ()=>{clearTimeout(timer)};
    },[id])
    return (
        <div className="snackbar" style={{borderColor:"#"+snackBarProps.color}}>
            <span><Icon color={snackBarProps.color}/></span>
            <p>{message}</p>
            <button onClick={()=>{dispatch(removeSnackbar(id))}}><IoMdClose/></button>
        </div>
    );
}
export default function SnackBarHolder(){
    const snackBarArray=useSelector((state:RootState)=>state.snackbar);
    return (
        <div className="snackbarHolder">
            {snackBarArray.map((el)=>
                <Snackbar key={el.id} type={el.type} message={el.message} id={el.id}/>
            )}
        </div>
    )
}
