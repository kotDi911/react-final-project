import React from "react";
import right from "../assets/navigation/right_arrow.svg"
import left from "../assets/navigation/left_arrow.svg"

const BurgerBtn = ({isActive, onClick}) => {

    return (
        <div className="burger-btn" onClick={onClick}>
            <img className="burger-img" src={isActive ? right : left} alt=""/>
        </div>
    )
}

export default BurgerBtn