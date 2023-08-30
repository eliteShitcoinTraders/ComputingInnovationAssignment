import * as React from 'react';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


export default function CartButton() {
  return (
    <Button variant="contained" startIcon={<LocalGroceryStoreIcon />}>
      Add to Cart
    </Button>   
  );
}

export function OfferButton() {
    return (     
      <Button variant="contained" startIcon={<LocalOfferIcon/>}>
        Offer
      </Button>      
    );
  }

  export  function BuyButton() {
    return (
      <Button variant="contained" startIcon={<MonetizationOnIcon/>}>
        Buy
      </Button>     
    );
  }