import "./CartItem.scss";
import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/textile-1.webp"
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="search-result-item" onClick={() => {}}>
                <div className="image-container">
                    <img alt="" src={prod} />
                </div>
                <div className="prod-details">
                    <span className="name">Handmade cotton pillow</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span></span>
                        <span></span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="highlight">
                            <span>&#8377;4567</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
