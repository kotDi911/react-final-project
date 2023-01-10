import React, {useState} from "react";
import LoginForm from "../form/LoginForm";
import RegisterForm from "../form/RegisterForm";
import Logo from "../home/Logo";
import apple from "../../assets/decoration/apple.png";
import grapes from "../../assets/decoration/grapes.png";
import leaf from "../../assets/decoration/leaf.png";
import orange from "../../assets/decoration/orange.png";

const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true)

    const toggleAuth = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="flex column" style={{width: "100%"}}>
            <img className="tl-img" src={grapes} alt="img"/>
            <img className="tr-img" src={leaf} alt="img"/>
            <img className="bl-img" src={apple} alt="img"/>
            <img className="br-img" src={orange} alt="img"/>
            <Logo className={true} text="Welcome To Yelp App"/>
            {isLogin ? <LoginForm isLogin={isLogin} onClick={toggleAuth}/> : <RegisterForm onClick={toggleAuth}/>}
        </div>
    )
}

export default Authorization