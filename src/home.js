import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import OptionBars from './components/OptionBar.js';
import ImageSlider from './components/imgslider.js';
import Itemcard from './components/itemcard.js';
import SearchBar from './components/searchBar.jsx';
import SearchResultList from './components/searchResultList.jsx';
import NotableRow from './components/notableRow.jsx';
import FooterMain from './components/footer.jsx';
import SeclectDropDown from './components/selectDropdown.jsx';

import './components/css/itemcard.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const slides = [
    { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", title: "yoda1" },
    { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", title: "yoda2" },
    { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", title: "yoda3" },
    { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", title: "yoda4" },
    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", title: "yoda5" }


];
const NftData = [
    { rank: "1", url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda1", priceFloor: "12 ", volume: "750 " },
    { rank: "2", url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "Yoda2", priceFloor: "11 ", volume: "146 " },
    { rank: "3", url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda3", priceFloor: "11 ", volume: "123 " },
    { rank: "4", url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "Yoda4", priceFloor: "11 ", volume: "2342 " },
    { rank: "5", url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "123 ", volume: "234 " },
    { rank: "6", url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "Yoda2", priceFloor: "11 ", volume: "146 " },
    { rank: "7", url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda3", priceFloor: "11 ", volume: "123 " },
    { rank: "8", url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "Yoda4", priceFloor: "11 ", volume: "2342 " },
    { rank: "9", url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "123 ", volume: "234 " },
    { rank: "10", url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "145 ", volume: "564 " }

];


const cardinfo = [
    { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda1", priceFloor: "12 ", volume: "750 " },
    { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "Yoda2", priceFloor: "11 ", volume: "146 " },
    { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda3", priceFloor: "11 ", volume: "123 " },
    { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "Yoda4", priceFloor: "11 ", volume: "2342 " },
    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "123 ", volume: "234 " },
    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "123 ", volume: "234 " },
    { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", priceFloor: "145 ", volume: "564 " }

];


const containerStyles = {
    width: "100%",
    height: "700px",
    margin: "0 auto "
};


    const headerStyle = {
        fontSize: "25px",
        textAlign: "left",
        marginLeft: "20px",
        fontWeight:"700"
};



export default function BasicGrid() {

    const [result, setResults] = React.useState([]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={12}>
                        < NaviBar/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <hr></hr>
                    < SeclectDropDown />

                    <SearchBar setResults={setResults} />
                    <SearchResultList result={result} />
                    <hr></hr>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                        <div style={containerStyles}>
                            < ImageSlider slides={slides} />

                        </div>
                </Grid>

                <Grid item xs={2} sm={2} md={2} style={{ marginLeft: "20px" }}>
                    < OptionBars  />
                </Grid>


            </Grid>
            <Grid container spacing={2} id="oneTh">
                <Grid item xs={12} sm={12} md={12}>
                        {/*                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />*/}
                        <hr></hr>

                        <Itemcard NftData={NftData} />

                    <hr></hr>


                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <div

                            style={headerStyle}
                        >Notable Collection</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        <NotableRow cardinfo={cardinfo} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                        <div
                            style={headerStyle}
                        >Top Collector Buys Today</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        <NotableRow cardinfo={cardinfo} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                        <div
                            style={headerStyle}
                        >Trending in Art</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        <NotableRow cardinfo={cardinfo} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                        <FooterMain />
                </Grid>
            </Grid>
        </Box>

    );
}

export {Item, NftData};
