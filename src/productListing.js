/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import Footer from './components/footer.jsx';
import ScrollCard from './components/scrollCard.jsx';
import SearchBar from './components/searchBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

const header = { headerOne: "Mint Price", headerTwo: "Current Price" };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

    const [result, setResults] = React.useState([]);
    const [cardinfo, setCardinfo] = useState([]);
    useEffect(() => {
        const API_URL = 'http://127.0.0.1:8000/assets/';
        axios.get(API_URL)
            .then(response => {
                setCardinfo(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);
      

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12} md={12}>
                    <NaviBar cartNum={0} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} > {/*search functionalities*/}
                    <hr></hr>

                    <SearchBar setResults={setResults} />
                    <hr></hr>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* Header for listing */}
                    <div style={{
                        fontSize: "25px",
                        textAlign: "left",
                        marginLeft: "20px",
                        fontWeight: "700"
                    }}>
                        {result.length === 0 ? "All Listing" : "Searched Result"}
                    </div>
                    <hr></hr>
                </Grid>
                <Grid container spacing={3} style={{display: "flex"}}>
                    {result.length === 0 ? (
                        // Render cardinfo.map when result is empty
                        cardinfo.map((card, id) => (
                            <Grid item xs={2.14} sm={2.14} md={2.14} style={{ marginLeft: "50px" }} key={id}>
                                <ScrollCard cardinfo={card} header={header} />
                            </Grid>
                        ))
                    ) : (
                        // Render result.map when result is not empty
                        result.map((card, id) => (
                            <Grid item xs={2.14} sm={2.14} md={2.14} style={{ marginLeft: "50px" }} key={id}>
                                <ScrollCard cardinfo={card} header={header} />
                            </Grid>
                        ))
                    )}
                </Grid>


                <Grid item xs={12} sm={12} md={12}>
                    <Item><Footer /></Item>
                </Grid>

            </Grid>
        </Box>

    );
}

