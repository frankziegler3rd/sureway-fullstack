/*
Shyaam Darji
SE Team 4
In the below code, the LoginSignup component will be rendered when the path is / (root URL),
and the Registration component will be rendered when the path is /registration.
(Basicaly the app router's job is to route user to right pg)
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './LoginSignup/LoginSignup';
import Registration from './LoginSignup/Registration';
import Dashboard from './LoginSignup/Dashboard';
import Survey from './LoginSignup/Survey';
import HomePage from './Homepage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
