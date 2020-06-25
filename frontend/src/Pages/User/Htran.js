import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '../../Components/CardHeader';
import Divider from '@material-ui/core/Divider';
import { Typography, CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class Htran extends Component {
  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader mensaje="Historial de Transacciones" />
            <CardContent>

              <FormControl variant="outlined" fullWidth >
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
                </Select>
              </FormControl>
            </CardContent>
            <List>
              <ListItem>
                <ListItemText primary="Luz" secondary="Tipo: Servicio" />
                <ListItemAvatar>
                  <Avatar>
                    <Typography>$100</Typography>
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Luz" secondary="Tipo: Servicio" />
                <ListItemAvatar>
                  <Avatar>
                    <Typography>$100</Typography>
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Luz" secondary="Tipo: Servicio" />
                <ListItemAvatar>
                  <Avatar>
                    <Typography>$100</Typography>
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
              <Divider />
            </List>
            <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => window.location.href = "/"} color="primary">Regresar</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
