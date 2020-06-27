import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Sim from '../assets/sim.png'
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 400,
    minHeight: 250,
    maxHeight: 250,
    borderRadius: 15,
    background: "linear-gradient(to top, #243B55, #141E30)"
  },
  typo: {
    color: "white"
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  const [nip, setNip] = useState("");

  const subdata = async (e) => {
    e.preventDefault();
    const user = await axios.post('http://localhost:4000/login', {
      nip: nip,
    });
    if (user.data.status) {
      props.clickHandler("e");
    } else {
      localStorage.setItem('JWT-COOL', user.data.token);
      if (user.data.user.tipo === 1) {
        window.location.href = "/";
      } else {
        window.location.href = "/Admin";
      }

    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Typography className={classes.typo}>Credit Card</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.typo}>ArtemisBank</Typography>
          </Grid>
          <br /><br />
          <Grid item xs={12}>
            <img src={Sim} width={70} alt="chip" />
          </Grid>
          <Grid item xs={12}>
            <ThemeProvider theme={darkTheme}>
              <form id="form1" onSubmit={subdata} >
                <TextField 
                  label="number of card" 
                  fullWidth 
                  type="number" 
                  value={nip}
                  onChange={(e)=>{setNip(e.target.value)}} 
                />
              </form>
            </ThemeProvider>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={darkTheme}>
          <Grid justify="flex-end" fullWidth container>
            <Button type="submit" form="form1" >Start</Button>
          </Grid>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}