import React from "react";
import grapes from "../assets/decoration/grapes.png"
import burger from "../assets/discount.png"

const Loader = () => {
    return (
        <div className="loader">
            <h1 className="loader__logo">
                Yelp App
            </h1>
            <span className="loader__text">
                developer by Nikolay Golub
            </span>
            <img src={grapes} alt="img" className="loader__img1"/>
            <img src={burger} alt="img" className="loader__img2"/>
        </div>
    )
}

export default Loader