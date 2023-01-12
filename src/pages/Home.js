import React, {useContext, useEffect} from "react";
import HomeHeader from "../components/home/HomeHeader";
import Categories from "../components/home/categories/Categories";
import {useNavigate} from "react-router";
import {BasketContext} from "../context/BasketContext";
import BasketMenu from "../components/home/basket/BasketMenu";

const Home = () => {
    const {isShowPanel} = useContext(BasketContext)
    const navigate = useNavigate()
    
    useEffect(()=> { navigate("/home/all")},[])
    
    return (
        <div className="container">
            <HomeHeader/>
            <Categories/>
            {isShowPanel && <BasketMenu/>}
        </div>
    )
}

export default Home