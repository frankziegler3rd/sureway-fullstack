/*
Shyaam Darji
Frank Ziegler
SE Team 4
In the below code, the LoginSignup component will be rendered when the path is / (root URL),
and the Registration component will be rendered when the path is /registration.
(Basicaly the app router's job is to route user to right pg)
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from '../pages/Login/LoginSignup.jsx';
import Registration from '../pages/Registration.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Survey from '../pages/Survey/Survey.jsx';
import Homepage from '../pages/Homepage/Homepage.jsx';
import SurveyResults from '../pages/SurveyResults/SurveyResults.jsx';
import CreateSurvey from '../pages/CreateSurvey/CreateSurvey.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/results" element={<SurveyResults />} />
        <Route path="/create-survey" element={<CreateSurvey />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

