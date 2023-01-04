import React, {useContext, useEffect} from "react";
import Header from "../components/home/Header";
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
            <Header/>
            <Categories/>
            {isShowPanel && <BasketMenu/>}
        </div>
    )
}

export default Home