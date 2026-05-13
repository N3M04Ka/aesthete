import { MdLockOutline } from "react-icons/md"
import {useId} from 'react'
import img1 from '../assets/images/checkoutImg1.png'
import img2 from '../assets/images/checkoutImg2.png'

interface props{
    label:string,
    placeholder:string,
}
interface Item{
    img:string,
    count:number,
    name:string,
    color:string,
    size:string,
    price:number
}

const checkoutItems:Item[]=[
    {
        img:img1,
        count:1,
        name:"STRUCTURED TRENCH COAT",
        color:"Charcoal",
        size:"M",
        price:450,
    },
    {
        img:img2,
        count:2,
        name:"ESSENTIAL POPLIN SHIRT",
        color:"Optic White",
        size:"M",
        price:120,
    },
]

function NameInput({label,placeholder}:props){
    const inputId=useId();
    return(
        <div className="nameInput">
            <label htmlFor={inputId}>{label}</label>
            <input type="text" name="nameInput" id={inputId} placeholder={placeholder}/>
        </div>
    )
}
export default function CheckOut() {

    return (
        <main>
           <section className="checkOutPage">
                <div className="container">
                    <div className="paymentDetails">
                        <h2>Checkout</h2>
                        <div className="contactContainer">
                            <h3>Contact</h3>
                            <NameInput label="Email" placeholder="Enter your email address"/>
                            {/* <input type="text" /> */}
                            <div className="checkBoxContainer">
                                <input type="checkbox" name="checkBox" id="checkBox" />
                                <label htmlFor="checkBox">Email me with news and offers</label>
                            </div>
                        </div>
                        <div className="shippingDelivery">
                            <h3>Shipping Delivery</h3>
                            <div className="fullName">
                                <NameInput label="First Name" placeholder=""/>
                                <NameInput label="Last Name" placeholder=""/>
                            </div>
                            <div>
                                <NameInput label="Address" placeholder=""/>
                            </div>
                            <div>
                                <NameInput label="Apartment, suit, etc. (optional)" placeholder=""/>
                            </div>
                            <div>
                                <NameInput label="City" placeholder=""/>
                                <NameInput label="Postal Code" placeholder=""/>
                            </div>
                            <select name="countrySelect" id="countrySelect">
                                <option value="United Stated">United Stated</option>
                                <option value="Mexica">Mexica</option>
                                <option value="Canada">Canada</option>
                                <option value="Europe">Europe</option>
                            </select>
                        </div>
                        <div className="payment">
                            <h3>Payment</h3>
                            <span>All transactions are secure and encrypted.</span>
                            <div className="cardDetails">
                                <NameInput label="Card Number" placeholder="0000 0000 0000 0000"/>
                                <div className="cardSpecificDetails">
                                    <NameInput label="Expiration Date (MM/YY)" placeholder="MM/YY"/>
                                    <NameInput label="Security Code" placeholder="CVC"/>
                                </div>
                                <NameInput label="Name on Card" placeholder=""/>
                            </div>
                        </div>
                        <div className="payButton">
                            <button>PAY NOW</button>
                            <div className="bottom">
                                <MdLockOutline size={"1.6rem"}/>
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                    <div className="purchaseDetails">
                        <h2>Order Summary</h2>
                        <div className="items">
                            {checkoutItems.map((el,id)=>(
                                <div className="item" key={id}>
                                    <div className="imgContainer">
                                    <img src={el.img} alt="" />
                                    <span>{el.count}</span>
                                    </div>
                                    <div className="textInfo">
                                        <div className="left">
                                            <span className="name">{el.name}</span>
                                            <div><span>{el.color}/{el.size}</span></div>
                                        </div>
                                        <span className="price">{(el.price*el.count).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="discountPart">
                            <input type="text" />
                            <button>Apply</button>
                        </div>
                        <div className="finalPayment">
                            <div>
                                <span className="label">Subtotal</span>
                                <span className="value"></span>
                            </div>
                            <div>
                                <span className="label">Shipping</span>
                                <span className="value"></span>
                            </div>
                            <div>
                                <span className="label">Taxes</span>
                                <span className="value"></span>
                            </div>
                        </div>
                        <div className="totalPayment">
                            <span className="total">Total</span>
                            <span className="price"></span>
                        </div>
                    </div>
                </div>
           </section>
        </main>
    );
}
