import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root:{
    backgroundColor:"#3f51b5",
    color: "white",
    borderRadius:"0px 0px 15px 15px",
  }
}));

const ContainedCardHeader = (props) => {
  const styles = useStyles();
  return (
    <CardHeader
      classes={styles}
      title={props.mensaje}
    />
  );
};


export default ContainedCardHeader;