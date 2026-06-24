import SideBar from "@/components/SideBar";
import img1 from '/images/savedItems1.png'
import img2 from '/images/savedItems2.png'
import img3 from '/images/savedItems3.png'
import img4 from '/images/savedItems4.png'

interface Item{
    img:string;
    name:string;
    price:number;
}
const items:Item[]=[
    {
        name:"Essential Cashmere Crewneck",
        img:img1,
        price:295,
    },
    {
        name:"Monolith Automatic Timepiece",
        img:img2,
        price:450,
    },
    {
        name:"Structured Chelsea Boot",
        img:img3,
        price:380,
    },
    {
        name:"Architectural Wool Blazer",
        img:img4,
        price:650,
    }
]

export default function SavedItems() {
    return (
        <section className="savedItems">
            <div className="container">
                <SideBar/>
                <div className="mainContent">
                    <h1>Saved Items</h1>
                    <p>You have {items.length} {items.length==1?"item":"items"} saved.</p>
                    <div className="items">
                        {items.map((el,id)=>(
                            <div className="item" key={id}>
                                <img src={el.img} alt="items image" />
                                <span className="name">{el.name}</span>
                                <span className="price">${el.price.toFixed(2)}</span>
                                <button>ADD TO BAG</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
