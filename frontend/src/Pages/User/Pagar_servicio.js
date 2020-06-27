import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '../../Components/CardHeader';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import IconButton from '@material-ui/core/IconButton';
import PayGood from '../../Components/PayGood'
import axios from 'axios';




export default class Pagar_servicio extends Component {
  constructor() {
    super();
    this.state = {
      openGood: false,
      openAlert1: false,
      user: [],
      servicios: [],
      bool: false,
      message: ""
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
    this.getServicios();
  }

  getServicios = async() =>{
    const req = await axios.get('http://localhost:4000/api/adminServices');
    this.setState({servicios: req.data})
    console.log(this.state.servicios)
  };

  handleClickOpenGood = () => {
    this.setState({
      openGood: true
    });
  };

  handleClose = () => {
    this.setState({
      openGood: false,
    });
  };

  pagoServicioTarjeta = async (precio, servicio) =>{
    const req = await axios.post('http://localhost:4000/api/pago/tarjeta/'+ this.state.user._id, {costo: precio});

    //@Roger - Copiar y pegar de aquí 
    const postTrans = await axios.post('http://localhost:4000/api/transactions',{
      typeId: "Pago Servicio", //Retiro, deposito o pago servicio
      accountId: this.state.user._id, //Quien lo hizo
      utilitiesId: servicio,//Qué servicio es
      ammount: precio, //cantidad
    })
    //A aquí
    
    this.setState({bool: req.data.pago})
    if (!req.data.pago){
      this.setState({message: "No hay suficiente saldo en la cuenta"})
    }
    else{
      this.setState({message: "Pago Realizado con éxito"})
    }
    this.handleClickOpenGood()
  }

  render() {
    const { servicios } = this.state;
    const deployServicios = servicios.map((servicio) => (
            <ListItem>
          <ListItemText primary={servicio.description} secondary={servicio.cost} />
          <ListItemAvatar>
            <Avatar>
              <IconButton onClick={() => window.location.href = `/servicio/${servicio._id}`}>
                <LocalAtmIcon />
              </IconButton>
            </Avatar>
          </ListItemAvatar>
          <ListItemAvatar>
            <Avatar>
              <IconButton onClick={() => this.pagoServicioTarjeta(servicio.cost, servicio.description)}>
                <PaymentIcon />
              </IconButton>
            </Avatar>
          </ListItemAvatar>
        </ListItem>
    ));
    

    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader mensaje="Pagar servicios" />
            <List>
              {deployServicios}
            </List>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            </CardActions>
          </Card>
        </Grid>
        <PayGood open={this.state.openGood} close={this.handleClose} tipo={this.state.bool} mensaje={this.state.message} />
        
      </Grid>      
    )
  }
}
