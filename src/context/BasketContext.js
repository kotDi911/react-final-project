import React, {useEffect, useState} from "react";

export const BasketContext = React.createContext();

export const BasketProvider = (props) => {
    const [cards, setCards] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isShowPanel, setIsShowPanel] = useState(false);

    useEffect(() => {
        if (cards.length > 0) {
            setIsEmpty(false)
        }
        if (cards.length === 1) {
            setIsShowPanel(true);
        }
    }, [cards])

    const addCard = (card) => {
        setCards((prevState) => [...prevState, card])
    }

    const countPlus = (card) => {
        const updateCounts = cards.map((el) => el.title === card.title ? {...el, count: el.count + 1} : el)
        setCards(updateCounts)
    }

    const countMinus = (card) => {
        const updateCounts = cards.map((el) => el.title === card.title ? {...el, count: el.count - 1} : el)
        setCards(updateCounts)
    }

    const deleteCard = (card) => {
        card.setAddToBasket(false)
        const updateCounts = cards.filter((el) => {
            if(el.title !== card.title) {
                return {...el}
            }
        })
        if(cards.length <= 1){
            setIsEmpty(true);
        }
        setCards(updateCounts)
    }

    const showPanel = () => {
        setIsShowPanel(true);
    }

    const hidePanel = () => {
        setIsShowPanel(false);
    }

    const clearBasket = () => {
        setIsEmpty(true);
        setCards([])
    }

    return (
        <BasketContext.Provider value={{
            cards,
            isShowPanel,
            isEmpty,
            setIsShowPanel,
            addCard,
            showPanel,
            hidePanel,
            clearBasket,
            countPlus,
            countMinus,
            deleteCard
        }}>
            {props.children}
        </BasketContext.Provider>
    )
};