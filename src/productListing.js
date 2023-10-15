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
import SearchResultList from './components/searchResultList.jsx';
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

//dummy data
//const cardinfo = [
//    { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#101", priceFloor: "12 ", volume: "9 " },
//    { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "#102", priceFloor: "13 ", volume: "10 " },
//    { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#102", priceFloor: "14 ", volume: "12 " },
//    { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "#104", priceFloor: "15 ", volume: "13 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#105", priceFloor: "16 ", volume: "6 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#106", priceFloor: "17 ", volume: "2 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#107", priceFloor: "18 ", volume: "17 " },
//    { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#101", priceFloor: "12 ", volume: "9 " },
//    { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "#102", priceFloor: "13 ", volume: "10 " },
//    { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#102", priceFloor: "14 ", volume: "12 " },
//    { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "#104", priceFloor: "15 ", volume: "13 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#105", priceFloor: "16 ", volume: "6 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#106", priceFloor: "17 ", volume: "2 " },
//    { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#101", priceFloor: "12 ", volume: "9 " },
//    { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "#102", priceFloor: "13 ", volume: "10 " },
//    { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "#102", priceFloor: "14 ", volume: "12 " },
//    { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "#104", priceFloor: "15 ", volume: "13 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#105", priceFloor: "16 ", volume: "6 " },
//    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "#106", priceFloor: "17 ", volume: "2 " },

//];




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
                    <SearchResultList result={result} />
                    <hr></hr>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>{/*header for listing */}
                    <div style={{
                        fontSize: "25px",
                        textAlign: "left",
                        marginLeft: "20px",
                        fontWeight: "700"
                    }}
                    >All Listing</div>
                    <hr></hr>
                </Grid>
                <Grid container spacing={3} style={{ display: "flex" }}>{/*print out the available lsiting*/}
                    {cardinfo.map((card, id) => (
                        <Grid item xs={2.14} sm={2.14} md={2.14} style={{ marginLeft: "50px" }}>
                            <ScrollCard cardinfo={card} header={header} key={id} />
                        </Grid>

                    ))}

                </Grid>


                <Grid item xs={12} sm={12} md={12}>
                    <Item><Footer /></Item>
                </Grid>

            </Grid>
        </Box>

    );
}

