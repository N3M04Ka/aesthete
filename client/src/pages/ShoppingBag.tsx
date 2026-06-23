import img1 from '../assets/images/shoppingBag1.png'
import img2 from '../assets/images/shoppingBag2.png'
import {Link} from 'react-router-dom'

interface Item{
    name:string,
    color:string,
    size:string,
    img:string,
    pricePerUnit:number,
    count:number
}
interface props{
    el:Item,
    id:number
}

const items:Item[]=[
    {
        name:"Structured Wool Coat",
        color:"Noir",
        size:"M",
        pricePerUnit:450,
        count:1,
        img:img1,
    },
    {
        name:"Silk Blend Trouser",
        color:"Toupe",
        size:"L",
        pricePerUnit:285,
        count:1,
        img:img2,
    }
]

function ItemContainer({el,id}:props){

    return (
        <div className="item" key={id}>
            <img src={el.img} alt="item's image"/>
            <div className="info">
                <div className="top">
                    <span className="name">{el.name}</span>
                    <span className="price">${(el.pricePerUnit*el.count).toFixed(2)}</span>
                </div>
                <span className="color">Color: {el.color}</span>
                <span className="size">Size: {el.size}</span>
                <div className="buttons">
                    <div className="buttonsContainer">
                        <button>-</button>
                        <span className="centered">{el.count}</span>
                        <button>+</button>
                    </div>
                    <button className="removeItem">Remove</button>
                </div>
            </div>
        </div>
    )
}
function calculateTotal():number{
    let res=0;
    for(let item of items)
        res+=item.count*item.pricePerUnit;
    return res;
}
export default function ShoppingBag() {
    return (
        <section className="shoppingBag">
            <div className="container">
                <h1>Shopping Bag</h1>
                <p>{items.length==0?"There is no items in your shopping bag":(items.length+" item"+(items.length!=1?"s":""))}</p>
                <div className="content">
                    <div className="items">
                        {items.map((el,id)=>(
                            <ItemContainer el={el} id={id} key={id}/>
                        ))}
                    </div>
                    <div className="summary">
                        <h2>Order Summary</h2>
                        <div className="line">
                            <span className="label">Subtotal</span>
                            <span className="value">${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="line">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="totalRes">
                            <span>Total</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <Link to="checkout">Proceed to Chekout</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
