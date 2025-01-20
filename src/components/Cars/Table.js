import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'No.', width: 70 },
  { field: 'Car', headerName: 'Car', width: 130 },
  { field: 'Driver', headerName: 'Driver', width: 130 },
  { field: 'Destination', headerName: 'Destination', width: 130 },
  {
    field: 'Kms',
    headerName: 'Kms',
    type: 'number',
    width: 90,
  },
 
];

const rows = [
  { id: 1, Car: 'Duster', Driver: 'Jon', Kms: 350,Destination:'Mumbai' },
  { id: 2, Car: 'Safari', Driver: 'Cersei', Kms: 420,Destination:'Panaji' },
  { id: 3, Car: 'Audi', Driver: 'Jaime', Kms: 450,Destination:"Murud" },
  { id: 4, Car: 'Corvette', Driver: 'Arya', Kms: 160,Destination:"Pune" },
  { id: 5, Car: 'Fortuner', Driver: 'Daenerys', Kms: 120,Destination:"Ahilyanagar" },
  { id: 6, Car: 'Melisandre', Driver: 'David', Kms: 150,Destination:"Delhi" },
  { id: 7, Car: 'Clifford', Driver: 'Ferrara', Kms: 440,Destination:"Bhopal" },
  { id: 8, Car: 'Frances', Driver: 'Rossini', Kms: 360,Destination:"Noida" },
  { id: 9, Car: 'Roxie', Driver: 'Harvey', Kms: 650,Destination:"Thane" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}