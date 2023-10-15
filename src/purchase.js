/*student ID:
    name: henry nguyen
    group: g-99
*/
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Footer from './components/footer';
import { Text } from './components/textbox.js';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useLocation } from 'react-router-dom';
import Buttons from './components/buttons.js';
import { purchaseItem } from './web3.js';
import web3 from './web3.js';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function AutoGrid() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const dataString = params.get('data');
    const data = JSON.parse(decodeURIComponent(dataString));

    const [itemName, setItemName] = useState('Sample Item');
    const [assetId, setAssetId] = useState(1);
    const [itemPriceInEther, setItemPriceInEther] = useState('0');

    useEffect(() => {
        if (data && data.length > 0) {
            const firstItem = data[0];
            setItemName(firstItem.Name);
            setAssetId(firstItem.Asset_ID);
            setItemPriceInEther(firstItem.Price);
        }
    }, [data]);
    /* Example usage: */
    const userName = 'John';
    const userEmail = 'johndoeee@example.com';

    const [purchaseResult, setPurchaseResult] = useState(null);

    const handlePurchase = async () => {
        try {
            const itemPriceInWei = web3.utils.toWei(itemPriceInEther, 'ether');
            const result = await purchaseItem(itemPriceInWei, itemName, assetId, userName, userEmail);

            // Assuming that the result from purchaseItem contains purchase data
            setPurchaseResult(result);
            console.log(result)
            // You can add any user feedback here, like showing a success message
        } catch (error) {
            console.error("Purchase failed:", error);
            // Handle the error. For example, show a user-friendly error message.
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid item xs={12} sm={12} md={12}>
                <Item><NaviBar /></Item>
            </Grid>
            <Grid direction="row" justifyContent="center" alignItems="center" container spacing={2}>
                {/* Display "Buy" button or purchase result */}
                {purchaseResult ? (
                    <Grid item xs={6}>
                        <Item>
                            <h1>Purchase Result: successful</h1>
                            <h1>{purchaseResult.transactionHash}</h1>
                        </Item>
                    </Grid>
                ) : (
                    <Grid item xs={6}>
                        <Item>
                            <h1>Checkout</h1>
                            <Text texttitle={<h2>Subtotal: {itemPriceInEther} ETH</h2>} content='' />
                            <Buttons icon={<MonetizationOnIcon />} onClick={handlePurchase} label="Buy" />
                        </Item>
                    </Grid>
                )}

            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Item><Footer /></Item>
            </Grid>
        </Box>
    );
}
