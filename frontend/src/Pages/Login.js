import React, { Component } from 'react'

//Material ui
import Grid from '@material-ui/core/Grid';
//Card
import Card from '../Components/Card'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      text: ''
    };
  }

  statuslogin = () => {
    this.setState({
      open: true,
      text: "Invalid Nip"
    });
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Card clickHandler={() => this.statuslogin("no")} />
          <br/>
          <Collapse in={this.state.open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    this.setState({
                      open: false
                    });
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {this.state.text}
            </Alert>
          </Collapse>
        </Grid>
      </Grid>
    )
  }
}
