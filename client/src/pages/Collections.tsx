import img1 from "../assets/images/product images/turtleneck.png";
import img2 from "../assets/images/product images/crewneck.png";
import img3 from "../assets/images/product images/cardigan.png";
import img4 from "../assets/images/product images/polo.png";
import img5 from "../assets/images/product images/mockNeck.png";
import img6 from "../assets/images/product images/cottonTee.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState,useEffect} from "react";
import { type CategoryFilterState } from "../types/categoryFilterState";
// import { BsWindowDash } from "react-icons/bs";
import {useGC} from '../contexts/useGC'
interface Item {
    img: string;
    name: string;
    price: number;
    color: string;
}

const items: Item[] = [
    {
        img: img1,
        name: "Merino Ribbed Turtleneck",
        price: 245,
        color: "Ivory",
    },
    {
        img: img2,
        name: "Cashmere Crewneck",
        price: 320,
        color: "Onyx",
    },
    {
        img: img3,
        name: "Oversized Alpaca Cardigan",
        price: 410,
        color: "Ash",
    },
    {
        img: img4,
        name: "Textured Knit Polo",
        price: 195,
        color: "Charcoal",
    },
    {
        img: img5,
        name: "Structured Mock Neck",
        price: 210,
        color: "Taupe",
    },
    {
        img: img6,
        name: "Heavyweight Cotton Tee",
        price: 95,
        color: "Noir",
    },
];
const categories = [
    "Outerwear",
    "Knitwear",
    "Shirts",
    "Trousers",
    "Accessories",
];
const sizes = ["XS", "S", "M", "L", "XL"];
const buttonsColors = ["#000000", "#FFFFFF", "#E5E2E1", "#747878", "#1C1B1B"];
const sortBy=["BEST SELLING","ALPH., Z-A","ALPH., A-Z","PRICE, DESC","PRICE, ASC","NEW FIRST","OLD FIRST"];
const sortRule=["best_selling_f","product_name desc","product_name asc","price desc","price asc","creation_date desc","creation_date asc"]
export default function Collection() {
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilterState>({
        id: -1,
        val: "",
    });
    const [sizeFilter, setSizeFilter] = useState<CategoryFilterState>({
        id: -1,
        val: "",
    });
    const [colorFilter, setColorFilter] = useState<CategoryFilterState>({
        id: -1,
        val: "",
    });
    const {smallScreen,filterIsOpen,setFilterIsOpen,setSmallScreen}=useGC();
    const [sortByMenuIsOpen,setSortByMenuIsOpen]=useState<boolean>(false);
    const [sortOption,setSortOption]=useState<string>("SORT BY")
    function proceedSorting(idx:number){
        setSortByMenuIsOpen(false);
        setSortOption(sortBy[idx]);
    }
    useEffect(() => {
        function handleResize() {
            setSmallScreen(p=>{
                if(p){
                    if(window.innerWidth>985){
                        document.getElementsByClassName('filter')[0].classList.remove('open');
                        setFilterIsOpen(false);

                        return false;
                    }
                    return p;
                }
                return window.innerWidth>985?p:true;
            })
            setFilterIsOpen(p=>{
                return window.innerWidth>985?false:p;
            })
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <main>
            <section className="collection">
                <div className="container">
                    <div className="shadow" style={{zIndex:filterIsOpen&&smallScreen?1:-1}} onClick={()=>setFilterIsOpen(false)}></div>
                    <div className={`filter ${filterIsOpen&&'open'}`}>
                        <button className="closeFilter" onClick={()=>setFilterIsOpen(false)}><IoMdClose size={'3rem'}/></button>
                        <div className="filterSection categoryFilter">
                            <span className="sectionName">CATEGORY</span>
                            <div>
                                {categories.map((el, id) => (
                                    <button
                                        onClick={() =>
                                            setCategoryFilter({ id, val: el })
                                        }
                                        key={id}
                                        className={
                                            categoryFilter.id == id
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {el}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="filterSection sizeFilter">
                            <span className="sectionName">SIZE</span>
                            <div className="sizesContainer">
                                {sizes.map((el, id) => (
                                    <button
                                        onClick={() =>
                                            setSizeFilter({ id, val: el })
                                        }
                                        key={id}
                                        className={
                                            sizeFilter.id == id ? "active" : ""
                                        }
                                    >
                                        {el}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="filterSection colors">
                            <span className="sectionName">COLORS</span>
                            <div>
                                {buttonsColors.map((el, id) => (
                                    <button
                                        onClick={() =>
                                            setColorFilter({ id, val: el })
                                        }
                                        key={id}
                                        style={{ backgroundColor: el }}
                                        className={
                                            colorFilter.id == id ? "active" : ""
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="top">
                            {smallScreen && <button className="filterBtn" onClick={()=>setFilterIsOpen(true)}>FILTERS</button>}
                            <span>{categoryFilter.val}</span>
                            <div className="sortby">
                                <button onClick={()=>setSortByMenuIsOpen(p=>!p)}>
                                    <span>{sortOption}</span>
                                    <MdKeyboardArrowDown
                                        color="#444748"
                                        size="2rem"
                                    />
                                </button>
                                <div className="options" style={{display:sortByMenuIsOpen?'block':'none'}}>
                                    {sortBy.map((el,id)=>(
                                        <button key={id} onClick={()=>proceedSorting(id)}>{el}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="productsHolder">
                            {items.map((el, id) => (
                                <div className="item" key={id}>
                                    <img src={el.img} alt="Item Image" />
                                    <div className="description">
                                        <span className="itemName">
                                                {el.name}
                                            </span>
                                        <div>

                                            <span className="color">
                                                {el.color}
                                            </span>
                                            <span className="price">
                                            ${el.price}
                                        </span>
                                        </div>

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
