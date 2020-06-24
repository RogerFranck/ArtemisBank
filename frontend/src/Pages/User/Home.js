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
            <CardBtn message="historial de transacciones" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Depositar" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Pagar Servicios" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardBtn message="Retirar" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <br/>
        </Grid>
        <Grid container xs={11} justify="flex-end">
          <Button variant="contained" color="primary">Salir</Button>
        </Grid>
      </Grid>
    )
  }
}
