/*student ID:104249085
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Buttons({label, onClick, icon}) {
  return (
    <Button variant="contained" startIcon={icon} onClick={onClick}>
      {label}  {/* can passes 3 variables, starticon=icon displayed e.g <button1/>, onclick=function called, label = name of button(string)*/}
    </Button>   
  );
}