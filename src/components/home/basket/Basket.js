import React, {useContext} from "react";
import basket from "../../../assets/navigation/basket.svg";
import {BasketContext} from "../../../context/BasketContext";

const Basket = () => {
    const {isEmpty, showPanel} = useContext(BasketContext)
    return (
        <>
            <div style={{display: "inline-block", position: "relative"}}>
                <img src={basket} alt="basket" onClick={showPanel} className="panel__img basket"/>
                {!isEmpty && <span className="basket-indicator"/>}
            </div>
        </>
    )
}

export default Basket