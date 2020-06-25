import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Page Login
import Login from './Pages/Login';
//Pages Usuario
import Home from './Pages/User/Home'
import Pservicio from './Pages/User/Pagar_servicio'
import Htran from './Pages/User/Htran'
import Retiro from './Pages/User/Retiro'
import Depositar from './Pages/User/Depositos'
import ServicioEdit from './Pages/User/servicio'
//Pages Admin
import HomeAdmin from './Pages/Admin/HomeAdmin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/PServicio" exact component={Pservicio} />
        <Route path="/Utran" exact component={Htran} />
        <Route path="/Ureti" exact component={Retiro} />
        <Route path="/Udepo" exact component={Depositar} />
        <Route path="/servicio" exact component={ServicioEdit} />
        <Route path="/admin" exact component={HomeAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
