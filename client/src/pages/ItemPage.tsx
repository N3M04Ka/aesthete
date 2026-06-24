import mainImg from '/images/product images/productImages/mainProductImage.jpg'
import img1 from '/images/product images/productImages/productImage1.jpg'
import img2 from '/images/product images/productImages/productImage2.jpg'
import img3 from '/images/product images/productImages/productImage3.jpg'
import img4 from '/images/product images/productImages/productImage4.jpg'
import {type CategoryFilterState as SelectedSize}  from '@/types/categoryFilterState'
import {useState} from 'react';
import { RiArrowRightLongLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import {useDispatch,useSelector} from 'react-redux';
import {addItem,type CartItem} from '@/app/slices/cartSlice'
import {useParams} from 'react-router-dom'

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
    const dispatch=useDispatch();
    const id=useParams();
    // console.log(id);
    function addItem(){
        const newItem:CartItem={

        }
    }
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
                            <button className="addToBagBtn" onClick={()=>addItem()}><span>Add to Bag</span><RiArrowRightLongLine size={"1.6rem"}/></button>
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
