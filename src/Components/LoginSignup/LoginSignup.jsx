import React, { useEffect, useState} from "react";
import './LoginSignup.css'
/*
Kyle Wallace
SE Team 4
*/
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