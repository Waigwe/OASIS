import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import components
import HomePage from './views/Navbar'
// import routes
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Router>
    
  );
}

export default App;
