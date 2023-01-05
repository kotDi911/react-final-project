import React, {useContext, useEffect} from "react";
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import NavPanel from "../components/home/NavPanel";
import Menu from "../pages/Menu";
import Trending from "../pages/Trending";
import Settings from "../pages/Settings";
import Categories from "../components/home/categories/Categories";
import {Navigate, Routes, useLocation, useNavigate} from "react-router";
import Authorization from "../components/authorization/Authorization";
import PrivateRoute from "./PrivateRoute'";
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/Loader";

const RouterApp = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const {setCurrentUser} = useContext(AuthContext);
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect( () => {
        if (user) {
            setCurrentUser(user)
            if (pathname === "/") {
                navigate("/home")
            } else {
                navigate(pathname)
            }
        }
    }, [])


    return (
        <>
            {pathname !== "/" && pathname !== "/load" && <NavPanel/>}
            <Routes>
                <Route path="/" element={<Authorization/>}/>
                <Route path="/load" element={<Loader/>}/>
                <Route path="/home"
                       element={
                           <PrivateRoute>
                               <Home/>
                           </PrivateRoute>
                       }>
                    <Route path=":categoryId" element={<Categories/>}/>
                </Route>
                <Route path="/menu"
                       element={
                           <PrivateRoute>
                               <Menu/>
                           </PrivateRoute>
                       }/>
                <Route path="/trending"
                       element={
                           <PrivateRoute>
                               <Trending/>
                           </PrivateRoute>
                       }/>
                <Route path="/settings"
                       element={
                           <PrivateRoute>
                               <Settings/>
                           </PrivateRoute>
                       }/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}

export default RouterApp