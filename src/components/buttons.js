import * as React from 'react';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function Buttons({label, onClick, icon}) {
  return (
    <Button variant="contained" startIcon={icon} onClick={onClick}>
      {label}
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

