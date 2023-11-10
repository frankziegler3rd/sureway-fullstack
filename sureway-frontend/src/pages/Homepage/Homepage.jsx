// Frank Ziegler, SE Team 4
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Navbar from '../../components/Navbar.jsx';
import image from '../../assets/images/digital-abstract-3d-render-pattern-minimal-art-black-3840x2160-7124.jpg'

function HomePage() {

  const containerStyle = {
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const textStyle1 = {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'italic',
  };

  return (

    <div>
    <Navbar />
    <h1>Welcome to Sureway!</h1>
    <div style={containerStyle}>
    <img src={image} alt="Description of the image" style={imageStyle} />
    <h1>Welcome to Sureway!</h1>
      <div style={textStyle1}>
        The world's leading web-based survey system!
      </div>
    </div>
    <p>
      We pride ourselves on being the sure way to survey. Do you have a staff you want to take anonymous feedback from?
      Do you feel the burning desire to administer a survey that tells people which Chicago PD character they are? Are you
      unsure about what college major you should pick? This is the sure way!
    </p>
  </div>
);







}

export default HomePage;
