import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import NaviBar from './components/header.js';
import OptionBars from './components/OptionBar.js';
import {Link} from 'react-router-dom';
import ImageSlider from './components/imgslider.js';


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
const containerStyles = {
    width: "100%",
    height: "700px",
    margin: "0 auto "
};


export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Item>
                        < NaviBar/>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Item>
                        <div style={containerStyles}>
                            < ImageSlider slides={slides} />

                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <Item>
                        < OptionBars/>
                    </Item>
                </Grid>
                <Grid item xs={10} sm={10} md={10}>
                </Grid>

            </Grid>
            <Grid container spacing={2} id="oneTh">
                <Grid item xs={12} sm={6} md={4}>
                    <Item>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item><Link to="/product">Grid 2</Link></Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>Grid 3</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>Grid 4</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>Grid 5</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>Grid 6</Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Item>footer</Item>
                </Grid> 
            </Grid>
        </Box>

    );
}