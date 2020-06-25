import React, { Component } from 'react';
import CDinero from '../../Components/CDinero'
import Grid from '@material-ui/core/Grid';
import CardBtn from '../../Components/CardBtn'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
  render() {
    return (
      <Grid container style={{ marginTop:150 }}>
        <Grid item xs={12} md={6}>
          <CDinero />
        </Grid>
        <Grid container xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={6}>
            <CardBtn message="Transacciones" ruta="Utran" body="Consultar el historial de tansacciones" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Depositar" ruta="Udepo"  body="Depositar dinero a tu cuenta" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Pagar Servicios" ruta="PServicio"  body="Paga tus servicios favoritos" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Retirar" ruta="Ureti" body="Retirar el dinero de tu cuenta" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <br/>
        </Grid>
        <Grid container xs={11} justify="flex-end">
          <Button variant="contained">Salir</Button>
        </Grid>
      </Grid>
    )
  }
}
