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
import DepositosAdmin from './Pages/Admin/DepositosAdmin'
import ConsultasAdmin from './Pages/Admin/ConsultasAdmin'
import ServicioAdmin from './Pages/Admin/ServicioAdmin'

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
        <Route path="/servicio/:id" component={ServicioEdit} />
        <Route path="/admin" exact component={HomeAdmin} />
        <Route path="/DepoAdmin" exact component={DepositosAdmin} />
        <Route path="/ConsuAdmin" exact component={ConsultasAdmin} />
        <Route path="/ServicioAdmin" exact component={ServicioAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
