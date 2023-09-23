/*student ID:
    name: henry nguyen
    group: g-99
*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Footer from './components/footer';
import { Text } from './components/textbox.js';
import Buttons from './components/buttons.js';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Inputs from './components/inputfield.js';
<<<<<<< HEAD
import AlertDialog from './components/popup.js';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
>>>>>>> parent of 408b8f9 (comments and code cleanr up 2)
=======
import { MonetizationOn } from '@mui/icons-material';
>>>>>>> parent of 9b58ffd (comments)
=======
import { MonetizationOn } from '@mui/icons-material';
>>>>>>> parent of 9b58ffd (comments)
=======
import { MonetizationOn } from '@mui/icons-material';
>>>>>>> parent of 9b58ffd (comments)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const content = (
  <div style={{textAlign:'left'}}>
    {`Please provide your information to complete purchase.
    `}
  </div>
);

export default function AutoGrid() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={12} md={12}>
          <Item><NaviBar/> </Item>
      </Grid>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>{/*center the grid */}
=======
      

      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>
>>>>>>> parent of 408b8f9 (comments and code cleanr up 2)
=======
      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>
>>>>>>> parent of 9b58ffd (comments)
=======
      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>
>>>>>>> parent of 9b58ffd (comments)
=======
      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>
>>>>>>> parent of 9b58ffd (comments)
      
        <Grid item xs={6}>
          <Item>
          <h1>Checkout</h1>
            <Text texttitle={<h2>Subtotal: $5,000</h2>} content={content}/>
            <Inputs/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <AlertDialog infomsg={"Puchase Processed"} confirmmsg={"Close"} icon={<MonetizationOnIcon/>} label={"Buy"}/>{/*popup imported from popup */}            
=======
            <Buttons icon={<MonetizationOnIcon/>} onClick={handleClickOpen} label={"BUY"} />

            <div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alertmsg"
            >
              <DialogTitle id="alertmsg">
              {"Purchase Processed."}
              </DialogTitle>
              <DialogActions>            
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
            </div>
            
>>>>>>> parent of 408b8f9 (comments and code cleanr up 2)
=======
            <AlertDialog infomsg={"Puchase Processed"} confirmmsg={"Close"} icon={<MonetizationOnIcon/>} label={"Buy"}/>            
>>>>>>> parent of 9b58ffd (comments)
=======
            <AlertDialog infomsg={"Puchase Processed"} confirmmsg={"Close"} icon={<MonetizationOnIcon/>} label={"Buy"}/>            
>>>>>>> parent of 9b58ffd (comments)
=======
            <AlertDialog infomsg={"Puchase Processed"} confirmmsg={"Close"} icon={<MonetizationOnIcon/>} label={"Buy"}/>            
>>>>>>> parent of 9b58ffd (comments)
          </Item>
        </Grid>
       
      </Grid>
      
      <Grid item xs={12} sm={12} md={12}>
        <Item><Footer/></Item>
      </Grid>
    </Box>
  );

  
}