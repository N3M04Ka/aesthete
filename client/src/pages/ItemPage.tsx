import mainImg from '../assets/images/product images/specific product images/Main Image.png'
import img1 from '../assets/images/product images/specific product images/img1.png'
import img2 from '../assets/images/product images/specific product images/img2.png'
import img3 from '../assets/images/product images/specific product images/img3.png'
import img4 from '../assets/images/product images/specific product images/img4.png'
import {type CategoryFilterState as SelectedSize}  from '../types/categoryFilterState'
import {useState} from 'react';
import { RiArrowRightLongLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";

interface ItemDescription{
    name:string,
    price:number,
    description:string,
    availableSize:string[],
}

const item:ItemDescription={
    name:"Structured Wool Coat",
    price:850.00,
    description:"An exploration of architectural form and soft tailoring. Crafted from Italian virgin wool, this piece features a relaxed, drop-shoulder silhouette balanced by sharp lapel detailing. Designed for a discerning aesthetic, it offers warmth without bulk.",
    availableSize:["XS","S","M","L"]
}
const otherImages=[mainImg,img1,img2,img3,img4];

export default function ItemPage() {
    const [selectedSize,setSelectedSize]=useState<SelectedSize>({id:-1,val:""});
    const [imageToDisplay,setImageToDisplay]=useState<number>(0);
    return (
       <section className="itemDescriptionPage">
            <div className="container">
                <section className="itemDescription">
                    <div className="imagesContainer">
                        <div className="otherImages">
                            {otherImages.map((el,id)=><button key={id} onClick={()=>setImageToDisplay(id)}><img src={el} alt="another items image"/></button>)}
                        </div>
                        <img src={otherImages[imageToDisplay]} alt="items main image" className="mainImage" />
                    </div>
                    <div className="description">
                        <div className="topSection">
                            <h1>{item.name}</h1>
                            <span className="price">${item.price.toFixed(2)}</span>
                            <p className="description">{item.description}</p>
                            <div className="sizeSection">
                                <div className="top">
                                    <span>SIZE</span>
                                    <button><span>Sized Guide</span></button>
                                </div>
                                <div className="sizesContainer">
                                    {item.availableSize.map((el,id)=><button key={id} onClick={()=>setSelectedSize({id,val:el})} className={selectedSize.id==id?'active':''}>{el}</button>)}
                                </div>
                            </div>
                        </div>
                        <div className="bottomSection">
                            <button className="addToBagBtn"><span>Add to Bag</span><RiArrowRightLongLine size={"1.6rem"}/></button>
                            <div className="detailsButtons">
                                <button className="first"><span>DETAILS & CARE</span><BiPlus size={"2.8rem"}/></button>
                                <button className="second"><span>SHIPPING & RETURNS</span><BiPlus size={"2.8rem"}/></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
