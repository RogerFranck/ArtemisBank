import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import '../../assets/Depositos.css'

import CardHeader from '../../Components/CardHeader'

export default class Depositos extends Component {
  render() {
    return (
      <Grid container style={{ minHeight:"100vh"}} justify="center" alignItems="center" >
          <Card className="card-depo">
            <CardHeader mensaje="Depositar a mi cuenta"/>
            <CardContent>
              <TextField label="Cantidad" variant="outlined" fullWidth type="number" />
            </CardContent>
            <CardActions style={{ display:"flex", justifyContent:"flex-end"}}>
              <Button onClick={() => window.location.href= "/" } color="primary">Regresar</Button>
              <Button color="primary">Depositar</Button>
            </CardActions>
          </Card>
      </Grid>
    )
  }
}
