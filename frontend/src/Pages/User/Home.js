import React, { Component } from 'react';
import CDinero from '../../Components/CDinero'
import Grid from '@material-ui/core/Grid';
import CardBtn from '../../Components/CardBtn'
import ButtonSalir from '../../Components/btn_salir'
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      user:[],
    };
  }
  componentDidMount = async () => {
    const jwt = localStorage.getItem('JWT-COOL');
    if (jwt) {
      const user = await axios.get('http://localhost:4000/login/validar', {
        headers: {
          "x-jwt": jwt
        }
      });
      this.setState({
        user:user.data,
      });
    }
    else {
      window.location.href = "/login";
    }
  }

  render() {
    return (
      <Grid container style={{ marginTop: 150 }}>
        <Grid item xs={12} md={6}>
          <CDinero dineros={`$${this.state.user.balance}`} />
        </Grid>
        <Grid container xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={6}>
            <CardBtn message="Transacciones" ruta="Utran" body="Consultar el historial de tansacciones" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Depositar" ruta="Udepo" body="Depositar dinero a tu cuenta" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Pagar Servicios" ruta="PServicio" body="Paga tus servicios favoritos" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Retirar" ruta="Ureti" body="Retirar el dinero de tu cuenta" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
        <Grid container xs={11} justify="flex-end">
          <ButtonSalir />
        </Grid>
      </Grid>
    )
  }
}
