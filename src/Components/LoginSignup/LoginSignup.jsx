import React, { useEffect, useState} from "react";
import './LoginSignup.css'
/*
Kyle Wallace
SE Team 4
*/
//Kyle Wallace
//Shyaam Darji
//SE Team 4
import React, { useState } from "react";
import './LoginSignup.css';
import Registration from './Registration'; // Import Registration component to navigate to the registration page
import { Link } from 'react-router-dom';
import user_icon from '../Assets/user.jpg';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            <div className="forgot-password">Forgot Password? <span>Click Here</span></div>

            <div className='submit-container'>
                <Link to="/registration" className={action === "Login" ? "submit gray" : "submit"}>Sign Up</Link>
                <Link to="/" className={action === "Sign Up" ? "submit gray" : "submit"}>Login</Link>
            </div>

            {action === "Sign Up" && <Registration />}
        </div>
    );
};

export default LoginSignup;

/*
Here we import out pictures from the Assets Folder.

Pictures can be changed anytime by importing them into Assests folder and 
adding there file name here
*/
import user_icon from '../Assets/user.jpg'
import password_icon from  '../Assets/password.png'


/*
    Login page created here\
    Creates  "Sign Up" header

    Inputs designated user icon/ password icon and assign a placeholder of
    "name" / "password" to the text entry blocks

    
*/
const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        /*Creates our containere to hold header, tezt, and underline*/
        <div className='container'>
        <div className="header">
        <div className="text">{action}</div> 
        <div className="underline"></div>
        </div>

        {/* Creates input box for user name and loads in our image for user*/}
        <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name"/>
        </div>

        {/* Creates input box for password name and loads in our image for password*/}
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
        </div>
        </div>

        {/* Creates forgot password text.*/}
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
        <div className='submit-container'>
            {/* Makes an action that highlights which button is being pressed ("signup" or "Login")*/}
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    )
}

export default LoginSignup;
