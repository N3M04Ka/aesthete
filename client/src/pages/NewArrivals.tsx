import img from '../assets/images/Gemini_Generated_Image_a61o3ca61o3ca61o.png'
import img1 from '../assets/images/cloth1.png'
import img2 from '../assets/images/cloth2.png'
import img3 from '../assets/images/cloth3.png'
import img4 from '../assets/images/cloth4.png'
import img5 from '../assets/images/image.png'
import img6 from '../assets/images/product images/Без имени-2.png'

interface NewArrivalItem{
    image:string,
    name:string,
    price:number
}

const arr:NewArrivalItem[]=[
    {
        image:img1,
        name:"Structured Blazer",
        price:285
    },
    {
        image:img2,
        name:"Pleated Wide Trouser",
        price:195
    },
    {
        image:img3,
        name:"Organic Cotton Tee",
        price:65
    },
    {
        image:img4,
        name:"Oversized Light Coat",
        price:340
    }
]

export default function NewArrivals() {
  return (
    <main className="newArrivals">
            <section className="heroSection">
                <div className="container">
                    <img src={img} alt="Model wearing an ivory suit in modern settings" />
                    <div className="text">
                        <h1>The Foundation</h1>
                        <p>Essential silhouettes crafted from sustainable materials, designed for the modern wardrobe.</p>
                        <button>EXPLORE COLLECTION</button>
                    </div>
                </div>
            </section>
            <section className="newArrivalsItself">
                <div className="container">
                    <div className="top">
                        <h2>New Arrivals</h2>
                        <button>VIEW ALL</button>
                    </div>
                    <div className="items">
                        {arr.map((el,id)=>(
                            <div className="item" key={id}>
                                <img src={el.image} alt="new-arrivals item"/>
                                <span className="productName">{el.name}</span>
                                <span className="price">${el.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="feature">
                <div className="container">
                    <div className="text">
                        <span>EDITORIAL</span>
                        <h2>Form & Function</h2>
                        <p>Our latest curation explores the intersection of utility
                            and elegance. Discover pieces that seamlessly
                            transition from studio to street, characterized by
                            precise tailoring and muted palettes.</p>
                        <button>READ THE FEATURE</button>
                    </div>
                    <img src={img6}/>
                </div>
            </section>
    </main>
  );
}
