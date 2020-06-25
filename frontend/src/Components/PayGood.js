import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import LootiGood from './LootiGood'
import goodlootie from '../assets/paygood.json'
import goodlootie2 from '../assets/paybad.json'
import { Typography } from '@material-ui/core';

export default class AdminGlosarioEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.close}
      >
        <DialogContent id="alert-dialog-description1">
          <LootiGood anilootie={this.props.tipo ? goodlootie : goodlootie2} />
          <center><Typography> { this.props.mensaje } </Typography></center>
        </DialogContent>
      </Dialog>
    )
  }
}
