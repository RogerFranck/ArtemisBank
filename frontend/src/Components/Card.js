import React from 'react';
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

export default function SimpleCard() {
  const classes = useStyles();

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
              <TextField label="number of card" fullWidth  type="number" />
            </ThemeProvider>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={darkTheme}>
          <Grid justify="flex-end" fullWidth container>
            <Button>Start</Button>
          </Grid>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}