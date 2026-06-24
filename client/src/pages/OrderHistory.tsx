import SideBar from "@/components/SideBar";
import img1 from '/images/orderHistory1.png'
import img2 from '/images/orderHistory2.png';
import img3 from '/images/orderHistory3.png'
import img4 from '/images/orderHistory4.png'
import dateToString from '@/functions/converteDateToString'
interface Order{
    orderId:number,
    date:Date,
    imgs:string[],
    status:string,
    price:number
}

const orders:Order[]=[
    {
        orderId:98243,
        date:new Date(2024,9,12),
        imgs:[img1,img2],
        price:450,
        status:"Delivered"
    },
    {
        orderId:97112,
        date:new Date(2024,8,5),
        imgs:[img3],
        price:210,
        status:"Delivered"
    },
    {
        orderId:94005,
        date:new Date(2024,9,22),
        imgs:[img4],
        price:890,
        status:"Returned"
    },
]

export default function Orderhistory() {
    return (
        <section className="orderHistory">
            <div className="container">
                <SideBar/>
                <div className="content">
                    <div className="top">
                        <h1>Order History</h1>
                        <span>{orders.length==0?"No orders found":`${orders.length} Order${orders.length>1?'s':''}`} Found</span>
                    </div>
                    <div className="orders">
                        {orders.map((el,id)=>(
                            <div className="order" key={id}>
                                <div className="header">
                                    <div className="orderDetails">
                                        <span className="orderNumber">Order #AD-{el.orderId}</span>
                                        <span className="orderDate">{dateToString(el.date)}</span>
                                    </div>
                                    <div className="otherInfo">
                                        <span className="status">{el.status}</span>
                                        <span className={"price"+(el.status=="Returned"?" canceled":"")}>${el.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="imgs">
                                        {el.imgs.map((el,id)=>(
                                            <img src={el} key={id} alt="Images of items in this order" />
                                        ))}
                                    </div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
