import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '../../Components/CardHeader';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import IconButton from '@material-ui/core/IconButton';
import PayGood from '../../Components/PayGood'

export default class Pagar_servicio extends Component {
  constructor() {
    super();
    this.state = {
      openGood: false,
    };
  }

  handleClickOpenGood = () => {
    this.setState({
      openGood: true
    });
  };

  handleClose = () => {
    this.setState({
      openGood: false,
    });
  };

  render() {
    return (
      <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader mensaje="Pagar servicios" />
            <List>
              <ListItem>
                <ListItemText primary="Luz" secondary="$100" />
                <ListItemAvatar>
                  <Avatar>
                    <IconButton onClick={() => window.location.href = "/servicio"}>
                      <LocalAtmIcon />
                    </IconButton>
                  </Avatar>
                </ListItemAvatar>
                <ListItemAvatar>
                  <Avatar>
                    <IconButton onClick={this.handleClickOpenGood}>
                      <PaymentIcon />
                    </IconButton>
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
        <PayGood open={this.state.openGood} close={this.handleClose} tipo={true} mensaje={""} />
      </Grid>
    )
  }
}
