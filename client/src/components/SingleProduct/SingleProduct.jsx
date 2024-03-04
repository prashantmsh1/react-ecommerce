import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import  './SingleProduct.scss';
import prod from "../../assets/products/textile-4.png";
import Usefetch from "../../hooks/usefetch";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    return (
        <div className="single-product—main—content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Product name</span>
                        <span className="price">Price</span>
                        <span className="description">Description</span>
                        <div className="cart-buttons">
                            <div className="quantity-button">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                Add to cart
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category: <span>Textile</span>
                            </span>

                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaInstagram size={16} />
                                    <FaTwitter size={16} />
                                    <FaPinterest size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
