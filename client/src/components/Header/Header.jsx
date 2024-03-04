import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";

import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const [scrolled, setscrolled] = useState(false);
    const [showcart, setShowcart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handlescroll = () => {
        const offset = window.scrollY;
        
        if (offset > 200) {
            setscrolled(true);
        } else {
            setscrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handlescroll);
       
    }, []);
    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li>Home </li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">ARTILANE</div>
                    <div className="right">
                        <TbSearch onClick={()=>setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=>setShowcart(true)}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showcart && <Cart setShowcart={setShowcart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    );
};

export default Header;
