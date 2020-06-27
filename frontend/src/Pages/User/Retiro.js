import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import '../../assets/Depositos.css'
import axios from 'axios';

import CardHeader from '../../Components/CardHeader'

export default class Retiro extends Component {
  constructor() {
    super();
    this.state = {
      user:'',
      dinero: 0,
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
        user:user.data._id
      });
    }
    else {
      window.location.href = "/login";
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const usersi = await axios.post('http://localhost:4000/api/retiro/' + this.state.user, {
      dinero: this.state.dinero,
    });

    alert(usersi.data);

  }

  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center" >
        <Card className="card-depo">
          <CardHeader mensaje="Retirar Dinero" />
          <CardContent>
            <form id="form1" onSubmit={this.onSubmit}>
              <TextField 
                label="Cantidad" 
                variant="outlined" 
                fullWidth type="number" 
                value={this.state.dinero}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    this.setState({
                      [name]: value,
                    });
                  }}
                  name="dinero"
              />
            </form>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            <Button color="primary" type="submit" form="form1" >Retirar</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}
