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

export default class Depositos extends Component {
  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center" >
        <Card className="card-depo">
          <CardHeader mensaje="Depositar a mi cuenta" />
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>


              <FormControl variant="outlined" style={{ width:150}} >
                <Select
                  native
                  //value={state.age}
                  //onChange={handleChange}
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


              <TextField label="Cantidad" variant="outlined" type="number" />
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            <Button color="primary">Depositar</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}
