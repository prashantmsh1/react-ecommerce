import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/textile-1.webp";
const Search = () => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                />
                <MdClose className="close-btn" />
            </div>
            <div className="search-result-content">
                <div className="start-msg">
                    Start typing to see products you are looking for.
                </div>

                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img alt="" src={prod} />
                        </div>
                        <div className="prod-details">
                            <span className="name"></span>
                            <span className="desc"></span>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default Search;
