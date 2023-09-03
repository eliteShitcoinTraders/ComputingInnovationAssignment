/*student ID:104249085
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({ columns, rows, pageSize, height }) {/* MUI DataGrid functionality*/
    return (
        <Box sx={{ height: { height }, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} initialState={{ pagination: { paginationModel: { pageSize: pageSize } } }} />
        </Box>
    );
