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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

export default class Depositos extends Component {

  constructor() {
    super();
    this.state = {
      openGood: false,
      openAlert1: false,
      openAlert2: false,
      user: [],
      servicios:[],
      costo: 0,
      cantidad: 0,
      dinero: 0,
      cambio: []
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
    this.getServicio();
  }

  getServicio = async() =>{
    const req = await axios.get('http://localhost:4000/api/adminServices/' + this.props.match.params.id);
    this.setState({servicios: req.data})
    this.setState({costo: req.data.cost})
  };
  
  realizarPago = async() =>{
    this.setState({openAlert1: true})
    const req = await axios.post('http://localhost:4000/api/pago/efectivo', {
      dinero: this.state.dinero, 
      cantidad: this.state.cantidad
    });
    //Copiar y pegar esto @Roger
    const postTrans = await axios.post('http://localhost:4000/api/transactions',{
      typeId: "Pago Servicio", //Retiro, deposito o pago servicio
      accountId: this.state.user._id, //Quien lo hizo
      utilitiesId: this.state.servicios.description,//Qué servicio es
      ammount: this.state.dinero * this.state.cantidad, //cantidad
    })
    //A aquí
    this.setState({costo: this.state.costo - (this.state.cantidad*this.state.dinero)})
    this.cambio();
  }
  cambio= async()=>{
    if(this.state.costo < 0){
      const cambio = await axios.post('http://localhost:4000/api/retiro',{dinero: (this.state.costo) *-1})
      this.setState({openAlert2: true}) 
      const temporal = []
      for (var i=0; i< cambio.data.length; i++){
        temporal.push(` $${cambio.data[i]} `)
      }
      this.setState({cambio: temporal})
      this.setState({costo:0})
    }else{
      this.setState({openAlert1: true})
    }
  }
  

  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center" >
         
        <Card className="card-depo">
          <CardHeader mensaje={`Pagar ${this.state.servicios.description}`}/>
          <CardContent>
           <CardActions disableSpacing>
              <MonetizationOnIcon color="disabled"/>              
              <Typography variant="button" display ="block">
                {`Falta por pagar: ${this.state.costo}`}
              </Typography>
              
            </CardActions>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <FormControl variant="outlined" style={{ width:150}} >             
                <Select
                  native
                  value={this.state.dinero}
                  onChange={(e)=>{
                    this.setState({dinero: e.target.value})                    
                  }}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
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


              <TextField label="Cantidad" variant="outlined" type="number" onChange={(e)=>{this.setState({cantidad: e.target.value})}}/>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => window.location.href = "/PServicio"} color="primary">Regresar</Button>
            <Button onClick= {this.realizarPago}color="primary">Depositar</Button>
          </CardActions>
        </Card>
     
     
       <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={this.state.openAlert1}
        onClose={(e) => this.setState({openAlert1: false})}
        autoHideDuration={6000}
        //message={`Se han pagado: $${this.state.cantidad*this.state.dinero} pesos correctamente`}
        >
        <Alert onClose={(e) => this.setState({openAlert1:false})} severity="success">
        {`Se han pagado: $${this.state.cantidad*this.state.dinero} pesos correctamente`}
        </Alert>
        </Snackbar>
        <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={this.state.openAlert2}
        onClose={(e) => this.setState({openAlert2: false})}
        autoHideDuration={6000}
       // message={`Se han pagado: $${this.state.cantidad*this.state.dinero} pesos correctamente`}
        >
        <Alert onClose={(e) => this.setState({openAlert2:false})} severity="info">
        {`Se regresarán las siguientes denominaciones como cambio: ${this.state.cambio} `}
        </Alert>
        </Snackbar>
      </Grid>
    
    )
  }
}
