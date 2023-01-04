import React from "react";
import {NavLink} from "react-router-dom";

const Li = ({img, title, path, isActive}) => {
    return(
        <li className="nav__li">
            <NavLink className={`${isActive && "active"} nav`} to={path}>
                <img src={img} alt="icon" className="nav__img"/>
                <span className="nav__link">{title}</span>
            </NavLink>
        </li>
    )
}
export default Li