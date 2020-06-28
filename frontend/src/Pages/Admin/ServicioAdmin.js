import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'


export default function MaterialTableDemo() {
  const [columns] = useState([
    { title: 'Nombre', field: 'description' },
    { title: 'Costo', field: 'cost' },
  ]);

  const [data, setData] = useState([
  ]);

  const [carrera, setCarrera] = useState();

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
        await setCarrera(user.data.carrera)
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
    await axios.delete('http://localhost:4000/api/adminServices/' + dataOld.description);
    actualizarData();
  }
  const updateProspecto = async (dataUpdate) => {
    await axios.put('http://localhost:4000/api/adminServices/' + dataUpdate.description, dataUpdate)
    actualizarData();
  }

  return (
    <MaterialTable
      title="Prospectos Inscritos"
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
  )
}