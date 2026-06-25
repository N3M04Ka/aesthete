import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import type { RootState } from '@/app/store';
import {changeItemQuantity, removeItem, type CartItem} from '@/app/slices/cartSlice'
import { useEffect, useState } from 'react';

interface props{
    el:CartItem,
    id:number,
    startAmount:number,
}

// const items:Item[]=[
//     {
//         name:"Structured Wool Coat",
//         color:"Noir",
//         size:"M",
//         pricePerUnit:450,
//         count:1,
//         img:img1,
//     },
//     {
//         name:"Silk Blend Trouser",
//         color:"Toupe",
//         size:"L",
//         pricePerUnit:285,
//         count:1,
//         img:img2,
//     }
// ]

function ItemContainer({el,id,startAmount}:props){
    const [selectedAmount,setSelectedAmount]=useState<number>(startAmount);
    const dispatch=useDispatch();
    const proceedAmount=(newAmount:number)=>{
        if(Number.isNaN(Number(newAmount)))
            setSelectedAmount(1);
        else
            setSelectedAmount(Math.min(100,Math.max(1,newAmount)));
    }
    useEffect(()=>{
        dispatch(changeItemQuantity({id:el.id,newQuantity:selectedAmount}))
    },[selectedAmount])
    return (
        <div className="item">
            <img src={el.mainImage} alt="item's image"/>
            <div className="info">
                <div className="top">
                    <span className="name">{el.name}</span>
                    <span className="price">${(el.price*el.quantity).toFixed(2)}</span>
                </div>
                <span className="color">Color: {el.color}</span>
                <span className="size">Size: {el.size}</span>
                <div className="buttons">
                    <div className="changeAmountContainer">
                        <button onClick={()=>proceedAmount(selectedAmount+1)}>+</button>
                        {/* <span className="centered">{selectedAmount}</span> */}
                        <input type="text" placeholder={selectedAmount.toString()} value={selectedAmount}  onChange={(el)=>proceedAmount(+el.target.value)}/>
                        <button onClick={()=>proceedAmount(selectedAmount-1)}>-</button>
                    </div>
                    <button className="removeItem" onClick={()=>dispatch(removeItem(el.id))}>Remove</button>
                </div>
            </div>
        </div>
    )
}
function calculateTotal(items:CartItem[]):number{
    let res=0;
    for(let item of items)
        res+=item.quantity*item.price;
    return res;
}
export default function ShoppingBag() {
    let items=useSelector((state:RootState)=>state.cart.items);
    items=[...items].sort((a,b)=>a.name.localeCompare(b.name)==0?(a.size.localeCompare(b.size)):a.name.localeCompare(b.name))
    return (
        <section className="shoppingBag">
            <div className="container">
                <h1>Shopping Bag</h1>
                <p>{items.length==0?"There is no items in your shopping bag":(items.length+" item"+(items.length!=1?"s":""))}</p>
                <div className="content">
                    <div className="items">
                        {items.map((el,id)=>(
                            <ItemContainer el={el} id={id} key={id} startAmount={el.quantity}/>
                        ))}
                    </div>
                    <div className="summary">
                        <h2>Order Summary</h2>
                        <div className="line">
                            <span className="label">Subtotal</span>
                            <span className="value">${calculateTotal(items).toFixed(2)}</span>
                        </div>
                        <div className="line">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="totalRes">
                            <span>Total</span>
                            <span>${calculateTotal(items).toFixed(2)}</span>
                        </div>
                        <Link to="checkout">Proceed to Chekout</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
