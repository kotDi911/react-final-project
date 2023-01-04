import React, {useEffect, useState} from "react";
import Navigation from "../../router/Navigation";
import avatar from "../../assets/avatar.png";
import delivery from "../../assets/delivery.png";
import arrow from "../../assets/navigation/arrow.svg";
import useWindowDimensions from "../Resize";
import BurgerBtn from "../BurgerBtn";

const NavPanel = () => {
    const [isBurger, setIsBurger] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const {width} = useWindowDimensions()

    const handleClick =()=>{
        setIsActive(!isActive);
    }

   useEffect(() => {
       if(width <= 980){
           setIsBurger(true)
       }else {
           setIsBurger(false)
       }
   }, [width])

    return (
        <div className={`flex column ${isBurger && "burger-panel"} ${!isActive ? "active-p" : "disable-p"}`}>
            {isBurger && <BurgerBtn onClick={handleClick} isActive={isActive}/>}
            <div className="avatar flex column">
                <div className="avatar__container">
                    <img className="avatar__img" src={avatar} alt="avatar"/>
                </div>
                <span className="avatar__name">Full Name</span>
            </div>
            <Navigation/>
            <div className="delivery flex column-r ">
                <img className="delivery__img" src={delivery} alt="delivery"/>
                <div className="flex space-b delivery__link">
                    <span className="delivery__small">Know More</span>
                    <img src={arrow} alt="arrow"/>
                </div>
                <span className="delivery__title">Faster delivery!</span>
            </div>
        </div>
    )
}

export default NavPanel