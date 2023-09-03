import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({columns, rows, pageSize, height}) 
{
  return (
    <Box sx={{ height:{height}, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel:{pageSize : pageSize}}}}/>
    </Box> //grid or table allows variables for number of rows on grid pagesize=(int), columns information and row data and height of grid(int)
  );
}