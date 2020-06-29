import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '../../Components/CardHeader';
import { Typography, CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


export default class Htran extends Component {
  constructor() {
    super();
    this.state = {
      transacciones: [],
      servicename: [],
      mortales: [],
      filtro: 'Todo',
      filtroUsu: 'Todo',
    };
  }
  componentDidMount = async () => {
    this.getservicename();
    this.getservice();
    this.getuserid();
  }
  getservice = async () => {
    const req = await axios.get('http://localhost:4000/api/transactions');
    this.setState({
      transacciones: req.data
    });
  }
  getservicename = async () => {
    const req = await axios.get('http://localhost:4000/api/adminServices');
    this.setState({
      servicename: req.data
    });
  }
  getuserid = async () => {
    const req = await axios.get('http://localhost:4000/api/accounts');
    this.setState({
      mortales: req.data
    });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    //console.log(this.state.filtro);
    //console.log(this.state.filtroUsu);
    if (this.state.filtroUsu == "Todo") {
      if (this.state.filtro == "Deposito" || this.state.filtro == "Retiro" || this.state.filtro == "Pago Servicio") {
        console.log(`${this.state.filtro} de todos`);
        const req = await axios.get(`http://localhost:4000/api/transactions/typeFilter/${this.state.filtro}`);
        this.setState({
          transacciones: req.data
        }); 
        console.log(req.data);
      } else if (this.state.filtro == "Todo") {
        this.getservice();
      }
      else {
        console.log(`servicio ${this.state.filtro} de todos`)
      }
    } else {
      console.log(`${this.state.filtro} dato de ${this.state.filtroUsu}`)
    }
  }
  render() {
    const { transacciones, servicename, mortales } = this.state;
    const deploytransacciones = transacciones.map((servicio) => (
      <ListItem key={servicio._id}>
        <ListItemText primary={servicio.typeId} secondary={servicio.utilitiesId ?
          `Tipo: ${servicio.utilitiesId} - usuario: ${servicio.accountId} ` :
          `usuario: ${servicio.accountId}`
        } />
        <Typography>$100</Typography>
      </ListItem>
    ));
    const deployname = servicename.map((ser) => (
      <option key={ser._id} value={ser.description}>{ser.description}</option>
    ));
    const deploynameuser = mortales.map((ser) => (
      <option key={ser._id} value={ser._id}>{`${ser.firstName} ${ser.lastName}`}</option>
    ));
    return (
      <Grid container style={{ minHeight: "100vh", }} justify="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader mensaje="Historial de Transacciones" />
            <CardContent>
              <form id="form1" onSubmit={this.onSubmit}>
                <Grid item container>
                  <Grid item xs={12} md={6} >
                    <FormControl variant="outlined" fullWidth >
                      <Select
                        native
                        value={this.state.filtro}
                        onChange={(e) => this.setState({
                          filtro: e.target.value
                        })}
                        inputProps={{
                          name: 'age',
                          id: 'age-native-simple',
                        }}
                      >
                        <option value={"Todo"}>Mostrar Todos</option>
                        <optgroup label="General">
                          <option value={"Deposito"}>Deposito</option>
                          <option value={"Retiro"}>Retiro</option>
                        </optgroup>
                        <optgroup label="Servicios">
                          <option value={"Pago Servicio"}>Todos</option>
                          {deployname}
                        </optgroup>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth >
                      <Select
                        native
                        value={this.state.filtroUsu}
                        onChange={(e) => this.setState({
                          filtroUsu: e.target.value
                        })}
                        inputProps={{
                          name: 'age',
                          id: 'age-native-simple',
                        }}
                      >
                        <option value={"Todo"}>Mostrar Todos</option>
                        <optgroup label="Usuario">
                          {deploynameuser}
                        </optgroup>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
            <List>
              {deploytransacciones}
            </List>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => window.location.href = "/admin"} color="primary">Regresar</Button>
              <Button type="submit" form="form1" color="primary">Buscar</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
