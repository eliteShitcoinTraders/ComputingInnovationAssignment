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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AlertDialog from './components/popup.js';
import DataGridDemo from './components/datagrid.js';
import { useCart } from './CartContext.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const content = (
  <div style={{textAlign:'left'}}>
    {`Cart Summary
    `}
  </div>
);


export default function AutoGrid() {

  const [assets, setAssets] = useState([]);
  useEffect(() => {
      const API_URL = 'http://127.0.0.1:8000/assets/';
      axios.get(API_URL)
          .then(response => {
            setAssets(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching data:", error);
          });
  }, []);

  const {cartCount} = useCart();

  const rows = [
    { id: 1, nftid: '10', qty: cartCount, price: '$10', img:'https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'},
  ]

  const col = [
    {
      field: 'nftid',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      width: 100,    
    },
    {
      field: 'img',
      headerName: 'NFT',
      width: 400,
      renderCell: (params) => (
        <img
          src={params.value} // Make sure "img" field contains the image URL
          alt="NFT"
          style={{ width: '100%', height: 'auto' }}
        />
      ),
    },
  
  ];

  return (
    
    <div>

      <div>
      <NaviBar/>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={4} md={8}>
      </Grid>
      <Grid  direction="row" justifyContent="center" alignItems="center" container spacing={2}>{/*center the grid */}
      
        <Grid item xs={10}>
          <Item>
          <h1>Cart</h1>
            <Text texttitle={<h2>Total: GET PRICE</h2>} content={content}/> {/*subtotal prompts for user */}
            <DataGridDemo columns={col} rows={rows} pageSize={2} height={350}></DataGridDemo>
            <AlertDialog infomsg={"Puchase Processed"} confirmmsg={"Close"} icon={<MonetizationOnIcon/>} label={"Buy"}/>{/*popup imported from popup */}            
          </Item>
        </Grid>
       
      </Grid>
      
      <Grid item xs={12} sm={12} md={12}>
        <Item><Footer/></Item>
      </Grid>
    </Box>
    </div>
  );

  
}