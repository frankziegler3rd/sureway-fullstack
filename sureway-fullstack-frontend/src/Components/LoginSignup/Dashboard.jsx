import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h1>Welcome to Your Dashboard!</h1>
      <div className='dashboard-options'>
        <Link to='/survey' className='dashboard-button'>Take the College Major Survey</Link>
        <Link to='/create-survey' className='dashboard-button'>Create Your Own Survey</Link>
      </div>
    </div>
  );
};

export default Dashboard;
