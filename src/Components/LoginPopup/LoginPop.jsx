import { assets } from "../../assets/assets"
import "./LoginPop.css"

import React, { useState } from 'react'

const LoginPop = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className="Login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input type="text " placeholder="Your Name" required />}

                    <input type="email" placeholder="Your Email ID" required />
                    <input type="text" placeholder="Password" required />

                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I accept the terms of use ,Privacy and policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have a account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPop
