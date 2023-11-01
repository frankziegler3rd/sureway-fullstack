import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px'
};

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'inline' }}>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                <li style={{ display: 'inline' }}>
                    <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                </li>
                <li style={{ display: 'inline' }}>
                    <Link to="/survey" style={linkStyle}>Survey</Link>
                </li>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
