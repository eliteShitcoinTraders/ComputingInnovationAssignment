/*student ID:104249085
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Buttons({ label, onClick, icon }) {
    /*this function returns a button with tag and icon*/
    return (
        <Button variant="contained" startIcon={icon} onClick={onClick}>
            {label}
        </Button>
    );


