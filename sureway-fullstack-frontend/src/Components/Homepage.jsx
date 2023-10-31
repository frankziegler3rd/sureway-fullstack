// Frank Ziegler, SE Team 4
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Sureway!</h1>
      <p>We pride ourselves on being the sure way to survey. Do you have a staff you want to take anonymous feedback from? 
          Do you feel the burning desire to administer a survey that tells people which Chicago PD character they are? Are you
          unsure about what college major you should pick? This is the sure way!
      </p>
      <div className="button-container">
        <Link to="/registration" className="button">Register</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
      
    </div>
  );
}

export default HomePage;
