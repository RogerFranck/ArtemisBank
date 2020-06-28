import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Btnadmin from '../../Components/btnadmin'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ButtonSalir from '../../Components/btn_salir'

export default class HomeAdmin extends Component {
  render() {
    return (
      <Grid container style={{ marginTop: 150 }}>
        <Grid item xs={12} md={4}>
          <Btnadmin
            head={"Deposito"}
            bod={'Realizar depositos al ATM'}
            img={
              'https://fotografias.lasexta.com/clipping/cmsimages02/2019/07/26/D0809B2F-0008-4CB4-8615-45689386ADBC/58.jpg'
            }
            ruta="DepoAdmin"
          >
            <AttachMoneyIcon />
          </Btnadmin>
        </Grid>
        <Grid item xs={12} md={4}>
          <Btnadmin
            head={"Consultas"}
            bod={'Consultar Transacciones'}
            img={
              'https://besthqwallpapers.com/Uploads/8-12-2019/115038/thumb2-modern-buildings-skyscrapers-modern-architecture-modern-city-stylish-buildings.jpg'
            }
            ruta="ConsuAdmin"
          >
            <BookmarkIcon />
          </Btnadmin>
        </Grid>
        <Grid item xs={12} md={4}>
          <Btnadmin
            head={"Servicios"}
            bod={'Administrar Servicios'}
            img={
              'https://i.pinimg.com/originals/86/0a/4b/860a4b24c7f4c31b00637e21a7cf6ade.jpg'
            }
            ruta="ServicioAdmin"
          >
            <AccountBalanceIcon />
          </Btnadmin>
        </Grid>
        <Grid item xs={12}><br /></Grid>
        <Grid container xs={11} justify="flex-end">
          <ButtonSalir />
        </Grid>
      </Grid >
    )
  }
}
