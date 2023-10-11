/*
Shyaam Darji
SE Team 4
In the below code, the LoginSignup component will be rendered when the path is / (root URL),
and the Registration component will be rendered when the path is /registration.
(Basicaly the app router's job is to route user to right pg)
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginSignup from './LoginSignup';
import Registration from './Registration';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
