import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Buttons, {OfferButton } from './components/buttons.js';
import Stack from '@mui/material/Stack';
import DataGridDemo from './components/datagrid.js';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Text } from './components/textbox.js';
import NestedList from './components/dropdownlist.js';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Footer from './components/footer.jsx';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const content = (
  <div style={{textAlign:'left'}}>
    {`This collectable nft created nftcreator is a part of 
    the 'cool' collection. The artist is well known in the community 
    providing enthusiasts with well thought out and creative pieces.
    `}
  </div>
);

const info = (
  <div style={{ textAlign: 'left' }}>
  Collection: 'cool' <br/> Product by: nftcreater <br/> Owned by: nfttrader123 
</div>
);

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '6px', 
});

const columns = [  
  {
    field: 'price',
    headerName: 'Price AUD',
    width: 150,
  },
  {
    field: 'qty',
    headerName: 'Quantity',
    width: 110,   
  },
  {
    field: 'exp',
    headerName: 'Expiration',
    type: 'number',
    width: 150,  
  },
  {
    field: 'from',
    headerName: 'From',
    type: 'number',
    width: 150,  
  },
];

const col2 = [
  {
    field: 'price',
    headerName: 'Price AUD',
    width: 150,
  },
  {
    field: 'qty',
    headerName: 'Quantity',
    width: 110,    
  },
  {
    field: 'exp',
    headerName: 'Expiration',
    type: 'number',
    width: 150, 
  },
  {
    field: 'from',
    headerName: 'From',
    type: 'number',
    width: 150,   
  },
];

const rows2 = [
  { id: 1, qty: '12', price: '$10', exp: '10 hours', from:'nfttrader123' },
]

const rows = [
  { id: 1, qty: '12', price: '$10', exp: '10 hours', from:'Joe' },
  { id: 2, qty: '2', price: '$21', exp: '4 days', from:'Smoe1' },
  { id: 3, qty: '2', price: '$45', exp: '3 days', from:'Boe3' },
  { id: 5, qty: '1', price: '$48', exp: '16 days', from:'Xtoe' },
  { id: 6, qty: '0', price: '$200', exp: '21 hours', from:'BrO' },
  { id: 7, qty: '8', price: '$29', exp: '15 days', from:'SOE' },
  { id: 8, qty: '5', price: '$98', exp: '13 hours', from:'Moey' },
  { id: 9, qty: '1', price: '$71', exp: '1 hour', from:'Madut' },
];


export default function BasicGrid() {
  const [cartCount, setCartCount] = React.useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12}>
          <Item><NaviBar /></Item>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Item>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
                alt="YodaNFTImage"
                />
            </div>
          </Item>
          <Item>
              <Text texttitle={<h3>Description</h3>} icon={<InfoIcon/>} content={content}/>
          </Item>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Item>
          <Text texttitle={<h1>NFT #12092</h1>} icon={<LocalFireDepartmentIcon/>} content={info}/>
          </Item>
          <Item>
            
            <div>
                <Stack direction="row" spacing={2} >
                  <Buttons onClick={handleAddToCart} icon={<LocalGroceryStoreIcon />} label={`Add to cart (${cartCount})`} />
                  <OfferButton />
                  <Link to="/purchase">
                  <Buttons icon={<MonetizationOnIcon/>} label={"Buy"}/>
                  </Link>
                  
                </Stack>
            </div>
          </Item>
          <Item>  
            <NestedList datagrid={<DataGridDemo columns={col2} rows={rows2} pageSize={2} height={162}/>} icon={<GavelIcon/>} heading={"Listings"}/>      
          </Item>
          <Item>
            <NestedList datagrid={<DataGridDemo columns={columns} rows={rows} pageSize={7} height={350}/>} icon={<FormatListBulletedIcon />} heading={"Offers"}/>
          </Item>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
          <Item><Footer/></Item>
        </Grid>

      </Grid>
    </Box>
  );
}

