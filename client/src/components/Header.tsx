import { Link, NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchPanel from "@/components/SearchPanel";
import {useSelector,useDispatch} from 'react-redux';
import {type RootState} from '@/app/store';
import {setSearchPanelIsShown,setBurgerMenuIsShownUp} from '@/app/slices/uiSlice';

export default function Header() {
    const dispatch=useDispatch();
    const burgerMenuIsShownUp=useSelector((state:RootState)=>state.ui.burgerMenuIsShownUp);
    const cartSize=useSelector((state:RootState)=>state.cart.items.length)
    return (
        <>
            <header>
                <div className="shadow" style={{zIndex:burgerMenuIsShownUp?1:-1}} onClick={()=>dispatch(setBurgerMenuIsShownUp(false))}></div>
                <SearchPanel/>
                <div className="container">
                    <nav className="headNav">
                        <NavLink to="/new-arrivals" className="navLink">
                            New Arrivals
                        </NavLink>
                        <NavLink to="/collection" className="navLink">
                            Collection
                        </NavLink>
                        <NavLink to="/sale" className="navLink">
                            Sales
                        </NavLink>
                    </nav>
                    <Link to="/" className="centerLink">
                        <span>AESTHETE</span>
                    </Link>
                    <div className="actions">
                        <div className="action">
                            <button className="searchButton" onClick={()=>dispatch(setSearchPanelIsShown(true))}>
                                <GrSearch />
                            </button>
                        </div>
                        <div className="action">
                            <Link to="user/personal-info" className="userBtn">
                                <FaRegUser />
                            </Link>
                        </div>
                        <div className="action">
                            <Link
                                to="/shopping-bag"
                                className="shoppingBagLink"
                            >
                                <MdOutlineShoppingBag />
                            </Link>
                                {cartSize>0&&(<span className="cartSize">{cartSize}</span>)}
                        </div>
                        <button className="burgerMenuBtn" onClick={()=>dispatch(setBurgerMenuIsShownUp(true))}><MdMenu/></button>
                    </div>
                    <div className="burgerMenu" style={{right:burgerMenuIsShownUp?0:'-320px'}}>
                        <button className="closeBtn" onClick={()=>dispatch(setBurgerMenuIsShownUp(false))}><IoMdClose/></button>
                        <nav>
                            <NavLink to="/new-arrivals" className="navLink">
                                New Arrivals
                            </NavLink>
                            <NavLink to="/collection" className="navLink">
                                Collections
                            </NavLink>
                            <NavLink to="/sale" className="navLink">
                                Sales
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
