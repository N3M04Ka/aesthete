import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {useSelector,useDispatch} from 'react-redux';
import {setSearchPanelIsShown} from '../app/slices/uiSlice'
import type { RootState } from "../app/store";
export default function SearchPanel() {
    const dispatch=useDispatch();
    const searchPanelIsShown=useSelector((state:RootState)=>state.ui.searchPanelIsShown)
    return (
        <>
            <div
                className="searchPanel"
                style={{zIndex:searchPanelIsShown?"4":'-1',opacity:searchPanelIsShown?"1":"0"}}
            >
                <div className="searchContainer">
                    <form action="" method="GET">
                        <input
                            type="text"
                            placeholder="Search for items, collections..."
                            name="searchRequest"
                        />
                        <button type="submit">
                            <IoSearchSharp />
                        </button>
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
                                <Link to="fw26-collection">
                                    FW26 Collection
                                </Link>
                                <Link to="essentials">Essentials</Link>
                                <Link to="accessories">Accessories</Link>
                                <Link to="gift-guide">Gift Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="closeTag centered"
                    onClick={() => dispatch(setSearchPanelIsShown(false))}
                >
                    <IoMdClose size={"3rem"} />
                </button>
            </div>
        </>
    );
}
