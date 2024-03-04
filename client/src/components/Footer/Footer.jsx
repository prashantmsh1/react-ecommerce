import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        We are a small business dedicated to bringing you the
                        finest handcrafted products from around the world. We
                        believe that handicrafts are a way to connect with our
                        cultures and traditions, and we are proud to offer a
                        wide variety of products that are both beautiful and
                        meaningful.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kiet Group Of Institutions , Ghaziabad
                            <p> Pin: 201206</p>
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:+91 88234*****</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: artilane@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Category</div>
                    <span className="text">Textile Crafts</span>
                    <span className="text">Decorational Crafts</span>
                    <span className="text">Functional Crafts</span>
                    <span className="text">Paper Crafts</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        ARTILANE created with ❤️ by Prashant , Arpit and Abhinav
                    </div>
                    <img alt="Payment" src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
