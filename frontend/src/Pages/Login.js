import React, { Component } from 'react'

//Material ui
import Grid from '@material-ui/core/Grid';
//Card
import Card from '../Components/Card'

export default class Login extends Component {
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
          <Card/>
        </Grid>
      </Grid>
    )
  }
}
