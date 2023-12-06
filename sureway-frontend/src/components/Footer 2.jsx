import React from 'react';
import logo from '../assets/images/Sureway copy 4.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
        padding: '20px',
        display: 'flex',
        alignItems: 'start',
    };

    const logoStyle = {
        height: '36px',
        marginRight: '40px'
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '40px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '5px 0',
        padding: '5px 0',
        lineHeight: '1.5',
    };

      const textStyle = {
        color: '#fff',
        margin: '5px',
        padding: '5px',
        lineHeight: '1.5',
    };

    const contactInfoStyle = {
        marginLeft: 'auto', // Aligns the contact info to the right by pushing it to the far right
    };
    

  return (
        <footer style={footerStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
          <div style={columnStyle}>
          <div>
                <Link to="/" style={linkStyle}>About</Link>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Services</Link>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Development</Link>
            </div>
          </div>
          <div style={columnStyle}>
            <div>
                <Link to="/" style={linkStyle}>Facebook</Link>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Instagram</Link>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Twitter</Link>
            </div>
            <div>
                <Link to="/" style={linkStyle}>LinkedIn</Link>
            </div>
          </div>
          <div style={contactInfoStyle}>
            Contact:
            <br />
            sureway@gmail.com
            <br />
            (856) 427-2313
            <br />
            201 Mullica Hill Road
            <br />
            Glassboro, NJ
            </div>
        </footer>
  );
};

export default Footer;
