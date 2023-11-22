
// Kyle Wallace
// Shyaam Darji
// Frank Ziegler
// SE Team 4

import React, { useState } from "react";
import './LoginSignup.css';
import Registration from '../Registration'; // Import Registration component to navigate to the registration page
import { Link, useNavigate } from 'react-router-dom';
import user_icon from '../../assets/images/user.jpg';
import password_icon from '../../assets/images/password.png';
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard.jsx";
import jsCookie from "js-cookie";
import bgimg from '../../assets/images/visax-N7PFDwM0AYI-unsplash.jpg'

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [jwtToken, setJwtToken] = useState(null);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();

const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:8080/login', credentials);
        const receivedToken = response.data.authToken;
        if (receivedToken) {
            jsCookie.set('authToken', receivedToken, { expires: 1 });
            setJwtToken(receivedToken);
            setLoginSuccess(true);
            navigate('/dashboard');
            console.log("You are so beautiful bby <3");
        } 
    } catch (error) {
        if (error.response && error.response.status === 401) {
            setLoginError('Invalid username or password');
        } else {
            console.error(error);
        }
    }
}

    return (
        <div className='container'>
            <div className="image-section">
                <img src={bgimg} alt="Background" />
            </div>
            <div className="form-section">
            <div className="header">
                <div className="text">{action}</div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                    type="text"
                    placeholder="Name"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                </div>
            </div>

            <div className="forgot-password"><span>Forgot Password?</span></div>

            <div className='submit-container'>
                <Link to="/registration" className={action === "Sign Up" ? "submit gray" : "submit"}>
                    Sign Up
                </Link>
                <button onClick={handleLogin} className={action === "Login" ? "submit gray" : "submit"}>
                    Login
                </button>
            </div>

            {action === "Sign Up" && <Registration />}
            {loginError && <div className="error-message">{loginError}</div>}
        </div>
        </div>
    );
};

export default LoginSignup;
