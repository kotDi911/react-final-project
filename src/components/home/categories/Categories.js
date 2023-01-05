import React, {useState} from "react";
import {useLocation} from "react-router";
import CategoryBtn from "./CategoryBtn";
import Comments from "../comments/Comments";
import Cards from "../cards/Cards";
import filter from "../../../assets/filter.svg"
import arrow from "../../../assets/navigation/arrow.svg"
import chicken from "../../../assets/category/chicken.png";
import burger from "../../../assets/category/burger.png";
import pizza from "../../../assets/category/pizza.png";
import salads from "../../../assets/category/salads.png";
import donut from "../../../assets/category/donut.png";
import drinks from "../../../assets/category/drinks.png";
import prom from "../../../assets/discount.png"

const categories = [
    {
        id: 1,
        path: "/all",
        img: chicken,
        title: "All"
    },
    {
        id: 2,
        path: "/burger",
        img: burger,
        title: "Burger"
    },
    {
        id: 3,
        path: "/pizza",
        img: pizza,
        title: "Pizza"
    },
    {
        id: 4,
        path: "/salads",
        img: salads,
        title: "Salads"
    },
    {
        id: 5,
        path: "/donut",
        img: donut,
        title: "Donut"
    },
    {
        id: 6,
        path: "/drinks",
        img: drinks,
        title: "Drinks"
    }
]

const Categories = () => {
    const {pathname} = useLocation()
    const [name, setName] = useState("All")
    return (
        <div className="home flex">
            <div className="flex column category__container">
                <ul className="flex category__ul">
                    {categories.map((category) => <CategoryBtn key={category.id} setFilterName={setName}{...category} />)}
                </ul>
                <div className="filter flex">
                    <span className="filter__title">{name} items</span>
                    <img src={filter} alt="filter" className="filter__img"/>
                </div>
                <Cards path={pathname}/>
            </div>
            <div className="flex column right-panel">
                <div className="promotion">
                    <img src={prom} alt="" className="promotion__img"/>
                    {/*<span className="promotion__mark"/>*/}
                    <p className="promotion__text">the full price of burgers</p>
                    <h3 className="promotion__title">-50% Off</h3>
                </div>
                <div className="articles flex">
                    <span className="articles__title">Articles</span>
                    <img src={arrow} alt="filter" className="articles__img"/>
                </div>
                <Comments/>
            </div>
        </div>
    )
}
export default Categories