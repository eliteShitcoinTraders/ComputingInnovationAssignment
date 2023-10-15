/*student ID:104249085
    name: henry nguyen
    group: g-99
*/

import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Buttons from './components/buttons.js';
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
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext.js';

export default function BasicGrid() {
  var Asset_ID = 0
  var Category_ID = 0
  var Name = 0
  var Mint_state = 0
  var Img_Url = 0
  var Price = 0
  var Mint_price = 0
  var Category = ""
  const numberobject = useParams();

  //Editing rn, Axios connection w/ asset table
    const [asset, setAsset] = useState([]);
  useEffect(() => {
    const API_URL = `http://127.0.0.1:8000/productsearch/${numberobject.assetID}`;
    axios.get(API_URL)
      .then(response => {
        setAsset(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching data:", error);
      });
  }, []);
    const dataString = encodeURIComponent(JSON.stringify(asset));

  //End of Axios connection 
  asset.map((asset) => {
    Asset_ID = asset.Asset_ID
    Category_ID = asset.category_ID 
    Name = asset.Name
    Mint_state = asset.Mint_state
    Img_Url = asset.Img_Url
    Price = asset.Price
    Mint_price = asset.Mint_price
    
  })
    console.log(Asset_ID)
    console.log(Category_ID)



  // retrieves cartcount
  const { cartCount, addToCart, decrementCart } = useCart();


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const content = (
    <div style={{ textAlign: 'left' }}>
      {`This collectable nft created nftcreator is a part of 
    the many existing collections such as cars, yodas and the animal collection. The artists are well known in the community 
    providing enthusiasts with well thought out and creative pieces.
    `}
    </div>
  );// content description

  const info = (
      <div style={{ textAlign: 'left' }}>
          Collection: {Category_ID}  <br /> Owned by: nfttrader123
    </div>
  ); // nft info and number

  const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
  });
  //column and row desc
  const columns = [
    {
      field: 'price',
      headerName: 'Price ETH',
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
      headerName: 'Price ',
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
  ]; //colmun headings

    const rows2 = [
        { id: 1, qty: '1', price: Price, exp: '10 hours', from: 'nfttrader123' },
  ] //grid data for listings

  const rows = [
      { id: 1, qty: '1', price: '0.10', exp: '10 hours', from: 'Joe' },
      { id: 2, qty: '1', price: '0.21', exp: '4 days', from: 'Smoe1' },
      { id: 3, qty: '1', price: '0.45', exp: '3 days', from: 'Boe3' },
      { id: 5, qty: '1', price: '0.48', exp: '16 days', from: 'Xtoe' },
      { id: 6, qty: '1', price: '0.200', exp: '21 hours', from: 'BrO' },
      { id: 7, qty: '1', price: '0.29', exp: '15 days', from: 'SOE' },
      { id: 8, qty: '1', price: '0.98', exp: '13 hours', from: 'Moey' },
      { id: 9, qty: '1', price: '0.71', exp: '1 hour', from: 'Madut' },
  ];//grid data for offers





  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12}>
          <NaviBar num={cartCount} />
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
          <Item>
            <div>
              {/*image for our listing*/}
              <Image
                src={Img_Url}
                alt="YodaNFTImage"
              />
            </div>
          </Item>
          <Item>
            <Text texttitle={<h3>Description</h3>} icon={<InfoIcon />} content={content} />{ /*print description*/}
          </Item>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
                  <Item>
                      <Text texttitle={<h1>{Name}</h1>} icon={<LocalFireDepartmentIcon />} content={info} />
          </Item>
          <Item>

            <div>
              <Stack direction="row" spacing={2} >
                <Buttons onClick={addToCart} icon={<LocalGroceryStoreIcon />} label={`Add to cart (${cartCount})`} /> {/*button to add to cart */}
                <Buttons onClick={decrementCart} icon={<LocalOfferIcon />} label={"Remove from Cart"} />

              </Stack>
            </div>
          </Item>
          <Item>
            <NestedList datagrid={<DataGridDemo columns={col2} rows={rows2} pageSize={2} height={162} />} icon={<GavelIcon />} heading={"Listings"} />      { /*print listing table*/}
          </Item>
          <Item>
            <NestedList datagrid={<DataGridDemo columns={columns} rows={rows} pageSize={7} height={350} />} icon={<FormatListBulletedIcon />} heading={"Offers"} />{ /*print offering table*/}
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Item><Footer /></Item>
        </Grid>

      </Grid>
    </Box>
  );
}

