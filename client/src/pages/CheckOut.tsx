import { MdLockOutline } from "react-icons/md"
import img1 from '/images/checkoutImg1.png'
import img2 from '/images/checkoutImg2.png'
import NameInput from '@/components/NameInput'
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

function getFullPrice():number{
    let res=0;
    for(let item of checkoutItems)
        res+=item.count*item.price;
    return res;
}
export default function CheckOut() {

    return (
        <section className="checkOutPage">
            <div className="container">
                <div className="paymentDetails">
                    <h2>Checkout</h2>
                    <div className="contactContainer">
                        <h3>Contact</h3>
                        <NameInput label="Email" placeholder="Enter your email address" isDisabled={false} type="string"/>
                        {/* <input type="text" /> */}
                        <div className="checkBoxContainer">
                            <input type="checkbox" name="checkBox" id="checkBox" />
                            <label htmlFor="checkBox">Email me with news and offers</label>
                        </div>
                    </div>
                    <div className="shippingDelivery">
                        <h3>Shipping Delivery</h3>
                        <div className="fullName">
                            <NameInput label="First Name" placeholder="" isDisabled={false} type="string"/>
                            <NameInput label="Last Name" placeholder="" isDisabled={false} type="string"/>
                        </div>
                        <div>
                            <NameInput label="Address" placeholder="" isDisabled={false} type="string"/>
                        </div>
                        <div>
                            <NameInput label="Apartment, suit, etc. (optional)" placeholder="" isDisabled={false} type="string"/>
                        </div>
                        <div>
                            <NameInput label="City" placeholder="" isDisabled={false} type="string"/>
                            <NameInput label="Postal Code" placeholder="" isDisabled={false} type="string"/>
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
                            <NameInput label="Card Number" placeholder="0000 0000 0000 0000" isDisabled={false} type="string"/>
                            <div className="cardSpecificDetails">
                                <NameInput label="Expiration Date (MM/YY)" placeholder="MM/YY" isDisabled={false} type="string"/>
                                <NameInput label="Security Code" placeholder="CVC" isDisabled={false} type="string"/>
                            </div>
                            <NameInput label="Name on Card" placeholder="" isDisabled={false} type="string"/>
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
                    <h3>Order Summary</h3>
                    <div className="items">
                        {checkoutItems.map((el,id)=>(
                            <div className="item" key={id}>
                                <div className="imgContainer">
                                <img src={el.img} alt="" />
                                <span>{el.count}</span>
                                </div>
                                <div className="textInfo">
                                    <span className="name">{el.name}</span>
                                    <div><span className="colorAndSize">{el.color} / {el.size}</span></div>
                                </div>
                                <span className="price">${(el.price*el.count).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="discountPart">
                        <input type="text" placeholder="Discount code or gift card" />
                        <button>Apply</button>
                    </div>
                    <div className="finalPayment">
                        <div>
                            <span className="label">Subtotal</span>
                            <span className="value">${getFullPrice().toFixed(2)}</span>
                        </div>
                        <div>
                            <span className="label">Shipping</span>
                            <span className="value">Calculated on the next step</span>
                        </div>
                        <div>
                            <span className="label">Taxes</span>
                            <span className="value">${(getFullPrice()*0.2).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="totalPayment">
                        <span className="total">Total</span>
                        <div className="price">
                            <span className="currency">USD</span>
                            <div className="value">${(getFullPrice()*1.2).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
