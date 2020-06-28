import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import '../../assets/Depositos.css'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CardHeader from '../../Components/CardHeader'
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default class Depositos extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      cantidad: 0,
      dinero: 0,
      openAlert1:false,
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
        user: user.data._id
      });
    }
    else {
      window.location.href = "/login";
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/api/deposito/user/' + this.state.user, {
      dinero: this.state.dinero,
      cantidad: this.state.cantidad,
    });
    await axios.post('http://localhost:4000/api/transactions',{
      typeId: "Deposito", //Retiro, deposito o pago servicio
      accountId: this.state.user, //Quien lo hizo
      ammount: this.state.dinero*this.state.cantidad, //cantidad
    })

    this.setState({
      openAlert1:true
    });

  }
  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center" >
        <Card className="card-depo">
          <CardHeader mensaje="Depositar a mi cuenta" />
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <form id="fomr1" onSubmit={this.onSubmit}>
                <FormControl variant="outlined" style={{ width: 150 }} >
                  <Select
                    native
                    value={this.state.dinero}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      this.setState({
                        [name]: value,
                      });
                    }}
                    name="dinero"
                    inputProps={{
                      name: 'dinero',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={500}>$500</option>
                    <option value={200}>$200</option>
                    <option value={100}>$100</option>
                    <option value={50}>$50</option>
                    <option value={20}>$20</option>
                    <option value={10}>$10</option>
                    <option value={5}>$5</option>
                    <option value={2}>$2</option>
                    <option value={1}>$1</option>
                  </Select>
                </FormControl>
                <TextField
                  label="Cantidad"
                  variant="outlined"
                  type="number"
                  value={this.state.cantidad}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    this.setState({
                      [name]: value,
                    });
                  }}
                  name="cantidad"
                />
              </form>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            <Button color="primary" type="submit" form="fomr1" >Depositar</Button>
          </CardActions>
        </Card>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.openAlert1}
          onClose={(e) => this.setState({ openAlert1: false })}
          autoHideDuration={6000}
        >
          <Alert onClose={(e) => this.setState({ openAlert1: false })} severity="success">
            {`Depositado`}
          </Alert>
        </Snackbar>
      </Grid>
    )
  }
}
