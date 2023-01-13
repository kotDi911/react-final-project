import React from "react";

const BurgerBtn = ({isActive, onClick}) => {

    return (
        <div className={`burger-btn ${isActive ? "active-btn" : "disable-btn"}`} onClick={onClick}>
            <span className="hr"/>
            <span className="hr"/>
            <span className="hr"/>
        </div>
    )
}

export default BurgerBtn