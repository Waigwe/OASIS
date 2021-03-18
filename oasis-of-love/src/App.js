import React from 'react'
import 'reset-css'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import components
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage/Home'
// import routes
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Router>
    
  );
}

export default App;
