import img1 from '../assets/images/product images/turtleneck.png'
import img2 from '../assets/images/product images/crewneck.png'
import img3 from '../assets/images/product images/cardigan.png'
import img4 from '../assets/images/product images/polo.png'
import img5 from '../assets/images/product images/mockNeck.png'
import img6 from '../assets/images/product images/cottonTee.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import {useState} from 'react';
import {type CategoryFilterState} from '../types/categoryFilterState'

interface Item{
    img:string,
    name:string,
    price:number,
    color:string,
}

const items:Item[]=[
    {
        img:img1,
        name:'Merino Ribbed Turtleneck',
        price:245,
        color:"Ivory",
    },
    {
        img:img2,
        name:'Cashmere Crewneck',
        price:320,
        color:"Onyx",
    },
    {
        img:img3,
        name:'Oversized Alpaca Cardigan',
        price:410,
        color:"Ash",
    },
    {
        img:img4,
        name:'Textured Knit Polo',
        price:195,
        color:"Charcoal",
    },
    {
        img:img5,
        name:'Structured Mock Neck',
        price:210,
        color:"Taupe",
    },
    {
        img:img6,
        name:'Heavyweight Cotton Tee',
        price:95,
        color:"Noir",
    },
]
const categories=["Outerwear","Knitwear","Shirts","Trousers","Accessories"];
const sizes=["XS","S","M","L","XL"];
const buttonsColors=["#000000","#FFFFFF","#E5E2E1","#747878","#1C1B1B"];

export default function Collection() {
    const [categoryFilter,setCategoryFilter]=useState<CategoryFilterState>({id:-1,val:""});
    const [sizeFilter,setSizeFilter]=useState<CategoryFilterState>({id:-1,val:""});
    const [colorFilter,setColorFilter]=useState<CategoryFilterState>({id:-1,val:""});
    return (
    <main>
        <section className="collection">
            <div className="container">
            <div className="filter">
                <div className="filterSection categoryFilter">
                    <span className="sectionName">CATEGORY</span>
                    <div>
                        {categories.map((el,id)=>(<button onClick={()=>setCategoryFilter({id,val:el})} key={id} className={categoryFilter.id==id?'active':''}>{el}</button>))}
                    </div>
                </div>
                <div className="filterSection sizeFilter">
                    <span className="sectionName">SIZE</span>
                    <div className="sizesContainer">
                        {sizes.map((el,id)=>(<button onClick={()=>setSizeFilter({id,val:el})} key={id} className={sizeFilter.id==id?'active':''}>{el}</button>))}
                    </div>
                </div>
                <div className="filterSection colors">
                    <span className="sectionName">COLORS</span>
                    <div>
                        {buttonsColors.map((el,id)=><button onClick={()=>setColorFilter({id,val:el})} key={id} style={{backgroundColor:el}} className={colorFilter.id==id?'active':''}/>)}
                    </div>
                </div>
            </div>
                <div className="products">
                    <div className="top">
                        <span>Knitwear</span>
                        <button><span>SORT BY</span><MdKeyboardArrowDown color="#444748" size="2rem"/></button>
                    </div>
                    <div className="productsHolder">
                        {items.map((el,id)=>(

                            <div className="item" key={id}>
                                <img src={el.img} alt="Item Image" />
                                <div className="description">
                                    <div>
                                        <span className="itemName">{el.name}</span>
                                        <span className="color">{el.color}</span>
                                    </div>
                                    <span className="price">${el.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="loadMoreBtn">LOAD MORE</button>
                </div>
            </div>
        </section>
    </main>
    );
}
