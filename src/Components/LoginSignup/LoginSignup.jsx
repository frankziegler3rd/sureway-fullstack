
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
