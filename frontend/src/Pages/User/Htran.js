import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '../../Components/CardHeader';
import Divider from '@material-ui/core/Divider';
import { Typography, CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

export default class Htran extends Component {
  constructor() {
    super();
    this.state = {
      select2: true, 
      servicios: [],
      select1Value: 0,
      transactions: [], 
      user:[],
      typeServicio: 0
    };
  }
  componentDidMount = async () => {
    const jwt = localStorage.getItem('JWT-COOL');
    if (jwt) {
      const req = await axios.get('http://localhost:4000/login/validar', {
        headers: {
          "x-jwt": jwt
        }
      });
      this.setState({user: req.data});
    }
    else{
      window.location.href = "/login";
    }
    this.getTransaccionesId();
    this.getServicios();
  }

  getServicios = async() =>{
    const req = await axios.get('http://localhost:4000/api/adminServices');
    this.setState({servicios: req.data})
  };
  
  setevento(event) {
    this.setState({select1Value: event.target.value})
    if(event.target.value == "Pago Servicio"){
      this.setState({select2: false})
    }
  }

  getTransaccionesTypeFiltro  = async (event) =>{ 
    if(this.state.typeServicio != 0){
      const req = await axios.post('http://localhost:4000/api/transactions/' + this.state.user._id, {utilitiesId:this.state.typeServicio});
      this.setState({transactions: req.data})
    }
    else if (this.state.select1Value != 0){
    const req = await axios.post('http://localhost:4000/api/transactions/' + this.state.user._id, {tipo:this.state.select1Value});
    console.log(req.data)
    this.setState({transactions: req.data})
    }
    else{
      this.getTransaccionesId();
    }  
  }

  getTransaccionesId = async () =>{
    const req = await axios.get('http://localhost:4000/api/transactions/' + this.state.user._id);
    this.setState({transactions: req.data})
  }

  render() {
    const { transactions } = this.state;
    const deployTransactions = transactions.map((transaction) => (
      <ListItem key={transaction._id}>
      <ListItemText primary={transaction.typeId} secondary={transaction.utilitiesId} />
      <ListItemAvatar>
        <Avatar>
          <Typography>${transaction.ammount}</Typography>
        </Avatar>
      </ListItemAvatar>
    </ListItem>
    ));
    const { servicios } = this.state;
    const deployServicios = servicios.map((servicio) => (
    <option key={servicio._id} value={servicio.description}>{servicio.description}</option>
    ));
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center" >
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader mensaje="Historial de Transacciones" />
            <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth >
                  <Select
                    native
                    //value={state.age}
                    //onChange={(event) => event.target.value == 3 ? this.setState({select2: false}) : this.setState({select2: true})}
                    onChange={(event) => this.setevento(event)}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Retiro"}>Retiro</option>
                    <option value={"Deposito"}>Depósito</option>
                    <option value={"Pago Servicio"}>Pago de Servicios</option>
                  </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth >
                  <Select
                    native
                    //value={state.age}
                    onChange={(event) => this.setState({typeServicio: event.target.value})}
                    disabled = {this.state.select2}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    {deployServicios}
                  </Select>
                </FormControl>
                </Grid>
                <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => this.getTransaccionesTypeFiltro()} color="primary">filtrar</Button>
            </CardActions>
              </Grid>
            </CardContent>
            <List>
              {deployTransactions}
            </List>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
