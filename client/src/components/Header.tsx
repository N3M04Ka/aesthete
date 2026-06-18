import { Link, NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {useGC} from '../contexts/useGC'
import SearchPanel from "./SearchPanel";
// import { IoMdClose } from "react-icons/io";

export default function Header() {

    const {setSearchPanelIsShown,burgerMenuIsShownUp,setBurgerMenuIsShownUp}=useGC();
    return (
        <>
            <header>
                <div className="shadow" style={{zIndex:burgerMenuIsShownUp?1:-1}} onClick={()=>setBurgerMenuIsShownUp(false)}></div>
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
                            <button className="searchButton" onClick={()=>setSearchPanelIsShown(true)}>
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
                        </div>
                        <button className="burgerMenuBtn" onClick={()=>setBurgerMenuIsShownUp(true)}><MdMenu/></button>
                    </div>
                    <div className="burgerMenu" style={{right:burgerMenuIsShownUp?0:'-320px'}}>
                        <button className="closeBtn" onClick={()=>setBurgerMenuIsShownUp(false)}><IoMdClose/></button>
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
