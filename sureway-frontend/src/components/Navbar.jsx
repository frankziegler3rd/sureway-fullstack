import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import logo from '../assets/images/Sureway copy 3.png';
import jsCookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const navbarStyle = {
    backgroundColor: '#F6F5F0',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align items to the right
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1000',
    // Add other styles as needed
  };

const linkContainerStyle = {
    marginLeft: 'auto', // This will push the links to the right
    marginRight: '20px',
  };

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    marginRight: '20px'
};

const signUpButtonStyle = {
    ...linkStyle,
    padding: '10px 20px', // Add padding for the oval shape
    borderRadius: '5px', // Create an oval shape
    border: 'none', // Border styling
    backgroundColor: '#8E72D2',
    display: 'inline-block', // Ensure it's displayed as a block
    textDecoration: 'none', // Remove default link underline
    color: 'white', // Set text color
    textAlign: 'center', // Center text horizontally
    lineHeight: 'normal', // Adjust line height if needed
};

const logoStyle = {
    width: '55px',
    height: 'auto',
    margin: '1px',
};  

const Navbar = () => {
    const authToken = jsCookie.get('authToken');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        jsCookie.remove('authToken');
        navigate('/');
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const dropdownStyle = {
        position: 'relative',
        display: 'inline-block', // Display as inline-block
      };
    
      const dropdownContentStyle = {
        display: dropdownOpen ? 'block' : 'none',
        position: 'absolute',
        background: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: '1',
        top: '100%', // Adjust the top value to position the menu closer to the 'User' link
        left: '-100px',
        maxWidth: '100px',
        whitespace: 'wrap',
        right: 0,
    };

    return (
        <nav style={navbarStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <div style={linkContainerStyle}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'inline' }}>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li style={{ display: 'inline' }}>
                    <Link to="/" style={linkStyle}>About</Link>
                </li>
                {authToken ? (
                <li style={{ display: 'inline' }}>
                    <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                </li>
                ) : null}
                {authToken ? (
                <li style={{ display: 'inline' }}>
                    <Link to="/survey" style={linkStyle}>Survey</Link>
                </li>
                ) : null}
                {authToken ? (
                <li
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    style={dropdownStyle}
                >
                User
                    <ul style={dropdownContentStyle}>
                        <li>
                            <Link to="/profile" style={{ display: 'block', padding: '10px' }}>
                            Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" style={{ display: 'block', padding: '10px' }}>
                            Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="/" style={{ display: 'block', padding: '10px' }} onClick={handleLogout}>
                            Logout
                            </Link>
                        </li>
                    </ul>
                </li>
                ) : null}
                {authToken ? null : (
                <li style={{ display: 'inline' }}>
                    <Link to="/login" style={linkStyle}>Login</Link>
                </li>
                )}
                {authToken ? null : (
                <li style={{ display: 'inline' }}>
                    <Link to="/registration" style={signUpButtonStyle}>Sign Up</Link>
                </li>
                )}
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;