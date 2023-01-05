import React, {useContext} from "react";
import Input from "./Input";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import {AuthContext} from "../../context/AuthContext";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../base";

const auth = getAuth();

const LoginForm = ({isLogin, onClick}) => {
    const {setCurrentUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .email("login must be a valid: user@exemple.com")
                .required(),
            password: Yup.string()
                .min(6, "password mast be > 5 symbols")
                .max(15, "password mast be < 15 symbols")
                .matches(/^[\w.-]+$/, 'password can only contain latin letters, numbers, and symbols: "_", "-"')
                .required(),
        }),
        onSubmit: async ({login, password}) => {
            await signInWithEmailAndPassword(auth, login, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {

                        setCurrentUser(user);

                        navigate("/load");
                        setTimeout(() =>{
                            navigate("/home");
                        }, 2000)
                        sessionStorage.setItem("user", JSON.stringify(user.uid));
                    }
                }).catch(err => {
                    if (err.message.includes("user")) {
                        errors.login = "User not found"
                    }
                    if (err.message.includes("password")) {
                        errors.password = "Password invalid"
                    }
                })
        }
    })

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input name="login"
                   type="email"
                   placeholder="Login"
                   value={values.login}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   touched={touched.login}
                   errors={errors.login}
            />
            <Input name="password"
                   type="password"
                   placeholder="Password"
                   value={values.password}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   touched={touched.password}
                   errors={errors.password}
            />
            <button className="submit-btn" type="submit">Submit</button>
            {isLogin && <span className="register-btn" onClick={onClick}>dont have an account</span>}
        </form>
    )
}
export default LoginForm