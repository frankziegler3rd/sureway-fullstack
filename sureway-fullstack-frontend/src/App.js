import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/Homepage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}
      </Switch>
    </Router>
  );
}

export default App;
