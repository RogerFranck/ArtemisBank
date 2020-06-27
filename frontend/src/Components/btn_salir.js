import React from 'react';
import Button from '@material-ui/core/Button';
import { useFirebaseBtnStyles } from '@mui-treasury/styles/button/firebase';

const FirebaseButton = () => {
  const styles = useFirebaseBtnStyles();
  return (
    <Button
      onClick={() => {
        localStorage.removeItem('JWT-COOL');
        window.location.href = "/Login";
      }} 
      classes={styles} 
      variant={'contained'} 
      color={'primary'}
    >
      Salir
    </Button>
  );
};


export default FirebaseButton;