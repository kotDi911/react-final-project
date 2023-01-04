import React from "react";
import Li from "../components/home/Li";
import home from "../assets/menus/home.svg"
import menu from "../assets/menus/menu.svg"
import trending from "../assets/menus/trending.svg"
import setting from "../assets/menus/setting.svg"
import {useLocation} from "react-router";

const links = [
    {
        id: 1,
        path: "/home",
        img: home,
        title: "Home",
    },
    {
        id: 2,
        path: "/menu",
        img: menu,
        title: "Menu"
    },
    {
        id: 3,
        path: "/trending",
        img: trending,
        title: "Trending"
    },
    {
        id: 4,
        path: "/settings",
        img: setting,
        title: "Settings"
    }
]

const Navigation = () => {
    const {pathname} = useLocation()

    const home = (path) => {
        if (path === "/home") {
            switch (pathname) {
                case "/home":
                    return true;
                case "/home/all":
                    return true;
                case "/home/burger":
                    return true;
                case "/home/pizza":
                    return true;
                case "/home/salads":
                    return true;
                case "/home/donut":
                    return true;
                case "/home/drinks":
                    return true;
                default:
                    return false;
            }
        }
    }

    return (
        <ul className="nav">
            {links.map((link) => <Li key={link.id} isActive={home(link.path)} {...link}/>)}
        </ul>
    )
}

export default Navigation