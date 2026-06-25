import { type StorageItem } from "@/app/slices/storageSlice";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

interface props {
    el: StorageItem;
}

export default function CollectionItem({ el }: props) {
    const [mouseIsOver,setMouseIsOver]=useState<boolean>(false);
    const [activeImg,setActiveImg]=useState<number>(0);
    const allImages=[el.mainImage,...el.otherImages];
    const navigate=useNavigate();
    return (
        <div className="item"  onClick={()=>navigate(el.id.toString())} onMouseEnter={()=>setMouseIsOver(true)} onMouseLeave={()=>{setMouseIsOver(false);setActiveImg(0)}}>
            <div className="imgHolder">
                <img src={allImages[activeImg]} alt="Item Image" />
                <div className="bottomBtns" style={{display:mouseIsOver?'flex':"none"}}>
                    {allImages.map((_,id)=>(
                        <div key={id} onMouseEnter  ={()=>setActiveImg(id)}/>
                    ))}
                </div>
            </div>
            <div className="description">
                <span className="itemName">{el.name}</span>
                <div>
                    <span className="color">{el.color}</span>
                    <span className="price">${el.price}</span>
                </div>
            </div>
        </div>
    );
}
