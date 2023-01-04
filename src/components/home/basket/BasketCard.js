import React, {useContext} from "react";
import {BasketContext} from "../../../context/BasketContext";
import plus from "../../../assets/card/basket_plus.svg"
import minus from "../../../assets/card/basket_minus.svg"

const BasketCard = (props) => {
    const {img, title, description, price, count} = props
    const {countPlus, countMinus, deleteCard} = useContext(BasketContext);

    return (
        <div className="message flex">
            <div className="basket__img-box">
                <img src={img} alt="" className="basket__img"/>
            </div>
            <div className="message__container flex">
                <div>
                    <p className="card__title">
                        {title}
                    </p>
                    <p className="card__description">
                        {description}
                    </p>
                </div>
                <div className="message__marks flex">
                    <button className="basket__counter increments"
                            onClick={() => count > 1 ? countMinus(props) : deleteCard(props)}
                    >
                        <img src={minus} alt=""/>
                    </button>
                    <span className="basket__counter">x{count}</span>
                    <button className="basket__counter increments" onClick={() => countPlus(props)}>
                        <img src={plus} alt=""/>
                    </button>
                    <span className="basket__price">${price}</span>
                </div>
            </div>
        </div>
    )
}

export default BasketCard