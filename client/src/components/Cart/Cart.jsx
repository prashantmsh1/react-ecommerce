import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowcart }) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer">
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="heading">Shopping Cart</span>
                        <span
                            className="close-btn"
                            onClick={() => setShowcart(false)}
                        >
                            <MdClose className="close-btn" />
                            <span className="text">close</span>
                        </span>
                    </div>
                    {/* <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div> */}
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">&#8377;499</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Cart;
