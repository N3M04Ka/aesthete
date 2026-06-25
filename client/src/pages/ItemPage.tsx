import {type CategoryFilterState as SelectedSize}  from '@/types/categoryFilterState'
import {useState} from 'react';
import { RiArrowRightLongLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import {useDispatch,useSelector} from 'react-redux';
import {addItem,type CartItem} from '@/app/slices/cartSlice'
import {useParams} from 'react-router-dom'
import type { RootState } from '@/app/store';

export default function ItemPage() {
    const [selectedSize,setSelectedSize]=useState<SelectedSize>({id:-1,val:""});
    const [imageToDisplay,setImageToDisplay]=useState<number>(0);
    const [amountSelectIsActive,setAmountSelectIsActive]=useState<boolean>(false);
    const [selectedAmount,setSelectedAmount]=useState<number>(1);
    const dispatch=useDispatch();
    const id=useParams().id;
    const item=useSelector((state:RootState)=>state.storage.find((el)=>el.id===Number(id)));
    if (!item) {
        return (
            <div className="container">
                <h2>Sorry, this item could not be found.</h2>
            </div>
        );
    }
    const  addItem1=()=>{
        const newItem:CartItem={
            id:item.id+"/"+selectedSize.val,
            name:item.name,
            description:item.description,
            size:selectedSize.val,
            price:item.price,
            quantity:selectedAmount,
            color:item.color,
            mainImage:item.mainImage,
            otherImages:item.otherImages,
        }
        dispatch(addItem(newItem))
    }
    function selectSize(id:number,size:string){
        if(selectedSize.id==id){
                setSelectedSize({id:-1,val:""});
                setSelectedAmount(1);
            if(amountSelectIsActive)
                setAmountSelectIsActive(false);
        }
        else{
            setSelectedSize({id:id,val:size})
        }
    }
    const proceedAmount=(newAmount:number)=>{
        if(Number.isNaN(Number(newAmount))){
            setSelectedAmount(1);
            return;
        }
        else
            setSelectedAmount(Math.min(100,Math.max(1,newAmount)));
    }
    return (
       <section className="itemDescriptionPage">
            <div className="container">
                <section className="itemDescription">
                    <div className="imagesContainer">
                        <div className="otherImages">
                            {item.otherImages.map((el,id)=><button key={id} onClick={()=>setImageToDisplay(id)}><img src={el} alt="another items image"/></button>)}
                        </div>
                        <img src={item.otherImages[imageToDisplay]} alt="items main image" className="mainImage" />
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
                                    {item.availableSizes.filter((el)=>el.quantity>0).map((el,id)=><button key={id} onClick={()=>selectSize(id,el.size)} className={selectedSize.id==id?'active':''}>{el.size}</button>)}
                                </div>
                            </div>
                        </div>
                        <div className="bottomSection">
                            {selectedSize.id!=-1&&amountSelectIsActive?(
                                <div className="finalAddToBagBtnHolder">
                                    <div className="changeAmountContainer">
                                        <button onClick={()=>setSelectedAmount(p=>Math.min(100,p+1))}>+</button>
                                        {/* <span className="centered">{selectedAmount}</span> */}
                                        <input type="text" placeholder={selectedAmount.toString()} value={selectedAmount}  onChange={(el)=>proceedAmount(+el.target.value)}/>
                                        <button onClick={()=>setSelectedAmount(p=>Math.max(1,p-1))}>-</button>
                                    </div>
                                    <button onClick={addItem1}>Add to Bag</button>
                                </div>
                            ):(
                                <button className="addToBagBtn" onClick={()=>setAmountSelectIsActive(selectedSize.id!=-1)}><span>Add to Bag</span><RiArrowRightLongLine size={"1.6rem"}/></button>
                            )}
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
