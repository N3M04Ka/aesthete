import { Link, NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState,useEffect} from "react";
import { IoSearchSharp } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [burgerMenuIsShownUp,setBurgerMenuIsShownUp]=useState<boolean>(false);
    const [searchPanelIsShown,setSearchPanelIsShown]=useState<boolean>(false);
    useEffect(()=>{
        function handleResize(){
            setBurgerMenuIsShownUp(p=>{
                return p?(window.innerWidth>650?false:p):p;
            });
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])
    useEffect(()=>{
        document.body.classList.toggle('fixed');
    },[searchPanelIsShown])
    return (
        <>
            <div className="searchPanel" style={{display:searchPanelIsShown?"flex":"none"}}>
                <div className="searchContainer">
                    <form action="" method="GET">
                        <input type="text" placeholder="Search for items,collections..."/>
                        <button type="submit"><IoSearchSharp/></button>
                    </form>
                    <div className="suggestions">
                        <div className="column">
                            <span>TRENDING SEARCHES</span>
                            <div className="links">
                                <Link to="outerwear">Outerwear</Link>
                                <Link to="cashmere">Cashmere</Link>
                                <Link to="new-arrivals">New Arrivals</Link>
                                <Link to="silk-shirts">Silk Shirts</Link>
                            </div>
                        </div>
                        <div className="column">
                            <span>QUICK LINKS</span>
                            <div className="links">
                                <Link to="fw26-collection">FW26 Collection</Link>
                                <Link to="essentials">Essentials</Link>
                                <Link to="accessories">Accessories</Link>
                                <Link to="gift-guide">Gift Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="closeTag centered" onClick={()=>setSearchPanelIsShown(false)}>
                    <IoMdClose size={"3rem"}/>
                </button>
            </div>
            <header>
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
