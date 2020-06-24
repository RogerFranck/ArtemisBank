import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Pages
import Login from './Pages/Login';
import Home from './Pages/User/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
