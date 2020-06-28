import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function MaterialTableDemo() {
  const [columns] = useState([
    { title: 'Nombre', field: 'description' },
    { title: 'Costo', field: 'cost' },
  ]);

  const [data, setData] = useState([
  ]);

  const [txt, setTxt] = useState();
  const [open, setOpen] = useState(false);

  const actualizarData = async () => {
    const result = await axios('http://localhost:4000/api/adminServices');
    setData(result.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const jwt = localStorage.getItem('JWT-COOL');
      if (jwt) {
        const user = await axios.get('http://localhost:4000/login/validar', {
          headers: {
            "x-jwt": jwt
          }
        })
        const prospectos = await axios.get('http://localhost:4000/api/adminServices');
        setData(prospectos.data)
      }
    };
    fetchData();
  }, []);

  const saveProspecto = async (dataNew) => {
    await axios.post('http://localhost:4000/api/adminServices', dataNew);
    actualizarData();
  }
  const deleteProspecto = async (dataOld) => {
    const ada = await axios.delete('http://localhost:4000/api/adminServices/' + dataOld.description);
    setOpen(true);
    setTxt(ada.data.message);
    actualizarData();
  }
  const updateProspecto = async (dataUpdate) => {
    await axios.put('http://localhost:4000/api/adminServices/' + dataUpdate._id, dataUpdate)
    actualizarData();
  }

  return (
    <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
      <div>
        <MaterialTable
          title="Servicios"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  saveProspecto(newData);
                  resolve()
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  updateProspecto(newData);
                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  deleteProspecto(oldData);
                  resolve()
                }, 1000)
              }),
          }}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            body: {
              editRow: {
                deleteText: "¿Estás seguro de querer borrarlo?",
              }
            }
          }}

        />
        <div style={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
          display: "flex",
          justifyContent: "flex-end"
        }} >
          <Button onClick={() => window.location.href = "/admin"} >Regresar</Button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        onClose={(e) => setOpen(false) }
        autoHideDuration={6000}
      >
        <Alert onClose={(e) => setOpen(false) } severity="info">
          {txt}
        </Alert>
      </Snackbar>
    </Grid>
  )
}