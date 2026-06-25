import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState,useEffect} from "react";
import { type CategoryFilterState } from "@/types/categoryFilterState";
import {setSmallScreen,setFilterIsOpen} from '@/app/slices/uiSlice';
import {useDispatch,useSelector} from 'react-redux';
import type { RootState } from "@/app/store";
import CollectionItem from '@/components/CollectionItem';

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
// const sortRule=["best_selling_f","product_name desc","product_name asc","price desc","price asc","creation_date desc","creation_date asc"]
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
    const [sortByMenuIsOpen,setSortByMenuIsOpen]=useState<boolean>(false);
    const [sortOption,setSortOption]=useState<string>("SORT BY")
    const dispatch=useDispatch();
    const filterIsOpen=useSelector((state:RootState)=>state.ui.filterIsOpen);
    const smallScreen=useSelector((state:RootState)=>state.ui.smallScreen);
    const itemsToDisplay=useSelector((state:RootState)=>state.storage);
    function proceedSorting(idx:number){
        setSortByMenuIsOpen(false);
        setSortOption(sortBy[idx]);
    }
    useEffect(() => {
        function handleResize() {
            if(smallScreen){
                if(window.innerWidth>985){
                    document.getElementsByClassName('filter')[0].classList.remove('open');
                    dispatch(setFilterIsOpen(false));
                    dispatch(setSmallScreen(false))
                }
            }
            else{
                if(window.innerWidth<=985)
                    dispatch(setSmallScreen(true));
            }
            if(filterIsOpen&&window.innerWidth>985)
                dispatch(setFilterIsOpen(false));
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="collection">
            <div className="container">
                <div className="shadow" style={{zIndex:filterIsOpen&&smallScreen?1:-1}} onClick={()=>dispatch(setFilterIsOpen(false))}></div>
                <div className={`filter ${filterIsOpen&&'open'}`}>
                    <button className="closeFilter" onClick={()=>dispatch(setFilterIsOpen(false))}><IoMdClose size={'3rem'}/></button>
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
                        {smallScreen && <button className="filterBtn" onClick={()=>dispatch(setFilterIsOpen(true))}>FILTERS</button>}
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
                        {itemsToDisplay.map((el, id) => (
                            <CollectionItem el={el} key={id}/>
                        ))}
                    </div>
                    <button className="loadMoreBtn">LOAD MORE</button>
                </div>
            </div>
        </section>
    );
}
