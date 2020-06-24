import React, { Component } from 'react';
import CDinero from '../../Components/CDinero'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class Home extends Component {
  render() {
    return (
      <Grid container style={{ minHeight: '100vh' }} alignItems="center">
        <Grid item xs={6}>
          <CDinero />
        </Grid>
        <Grid container xs={6} spacing={3}>
          <Grid item xs={6}>
            <Card>
              <CardContent >
                <Button component={Link} fullWidth style={{height:85}} >Transacciones</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Button component={Link} fullWidth style={{height:85}} >Pagar Servicio</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Button component={Link} fullWidth style={{height:85}} >Depositos</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Button component={Link} fullWidth style={{height:85}} >Retiros</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
