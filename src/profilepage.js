/*student ID:104266437
    name: Rino Quijote
    group: g-99
*/
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import profilePicture from './img/eugene.webp';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NaviBar from './components/header.js';
import Grid from '@mui/material/Grid';
import TransacCard from './components/transactioncard';
import { Item } from './home.js'
import Footer from './components/footer.jsx';


/*
Unsure about in-line references. But, just in case I forget to ask on Tuesday:
E.g. App from **url**
1. backgroundImage from https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/
2. Circle Pfp from https://www.youtube.com/watch?v=xBDa6OzbF3o&ab_channel=LirsTechTips
3. Profile Box from https://mui.com/material-ui/react-box/
4. ImageList from https://mui.com/material-ui/react-image-list/#system-StandardImageList.js
5. Toggle from https://www.youtube.com/watch?v=5CTFTDpHHto&t=402s&ab_channel=TheCodeAngle
*/

function ProfilePage() {
  //Change the styles of the page.
  const pfpBackground = {
    //Change background image || Reference 1.
    backgroundColor: "#F5F5F5",
    height: '20%',
  };
  //Change the inventory's styles.
  const inventoryBackground = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  //Toggle button || Reference 5.
  const [toggle, setToggle] = useState(true)
  const ButtonText = toggle ? "Inventory" : "Transaction History";


    /*dummy data*/

    const transactionData = [
        { url: "https://images.unsplash.com/photo-1609258612794-3502fb4306a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda1", date: "12/12/2022", price: "2 " },
        { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "Yoda2", date: "12/10/2022", price: "7 " },
        { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda3", date: "19/12/2020", price: "8 " },
        { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "Yoda4", date: "02/3/2019", price: "4 " },
        { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", date: "09/3/2017", price: "2 " },
        { url: "https://images.unsplash.com/photo-1610714872435-96712ebf1594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2654&q=80", name: "Yoda2", date: "09/3/2017 ", price: "4 " },
        { url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80", name: "Yoda3", date: "09/3/2017 ", price: "11 " },
        { url: "https://images.unsplash.com/photo-1664202925603-1d2bf7f190fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80", name: "Yoda4", date: "09/3/2017 ", price: "3 " },
        { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", date: "09/3/2017 ", price: "5 " },
        { url: "https://images.unsplash.com/photo-1657333813883-8da3bc1e2c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80", name: "Yoda5", date: "09/3/2017 ", price: "9 " }

    ];

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  return (
    <div style={pfpBackground}>
      < NaviBar />
      <div className="fpInfoAndPic">
        <div style={{
          //Flexboxes the page and controls horizontal movement
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px"
        }}>
          {/*Profile Picture Div || Reference 2. */}
          <div className='ProfileImage'>
                      <img src={profilePicture} alt="" style={{
                          marginTop: "20px",
                          width: 200,
                          height: 200,
                          borderRadius: 200 / 2,
                          textAlign: "center",
                      }}></img>
          </div>

          {/*Profile Box Div || Reference 3. */}
          <div className='ProfileInfo'>
            <Box sx={{
              width: 200,
              backgroundColor: 'primary.dark',
              borderRadius: "10px",
              opacity: [0.9],
              textAlign: "center",
              margin: "auto",
            }}>
              {/*Profile Text Typography */}
              <Typography sx={{
                color: 'white',
                padding: "10px",
                overflow: "hidden",
                textAlign: "center",
              }}>
                User: Henry Nguyen
                Owns: **num** items
              </Typography>
            </Box>
          </div>
          {/* Button to toggle Divs*/}
          <button onClick={() => setToggle(!toggle)} className="btn-toggle">{ButtonText}</button>
        </div>
        {/* End of Div for Pfp and Box. */}
        {/* Code for the line*/}
        <hr style={{
          border: '1px solid',
          color: "#F5F5F5",
          borderRadius: '10',
          width: '90%',
          opacity: '0.7'
        }}></hr>
        </div>

        <div style={inventoryBackground}>
          {/*Uses the useState hook*/}
          {/* Image List w/ Toggle Feature || Reference 4. */}
          {toggle && (
            <ImageList sx={{ width: 800, height: 400, borderRadius: "10px" }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {/* Transaction History*/}
          <div style={inventoryBackground}>
                  {!toggle && (

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding="0"
                containerSpacing={1}
                style={{
                  overflow: "auto",
                  maxHeight: "50vh",
                          }}>
                          <Grid container spacing={2}>
                              <Grid item xs={5.8} sm={5.8} md={5.8} style={{ display: "flex" }}>{/*description info for top 10*/}
                                  <h5 style={{ marginRight: "35%", marginLeft: "1.5%" }}>Collection</h5>
                                  <h5 style={{ marginRight: "25%" }}>Floor Price</h5>
                                  <h5 style={{ marginRight: "3%" }}>Volume</h5>

                              </Grid>
                              <Grid item xs={5.8} sm={5.8} md={5.8} style={{ display: "flex" }}>
                                  <h5 style={{ marginRight: "35%", marginLeft: "4%" }}>Collection</h5>
                                  <h5 style={{ marginRight: "25%" }}>Floor Price</h5>
                                  <h5 style={{ marginRight: "3%" }}>Volume</h5>
                              </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                              <hr></hr>
                    <TransacCard NftData={transactionData} />
                </Grid>
              </Grid>

            )}
        </div>
        </div>
        {/*End of Divs for the Inventory and Image*/}
      <Item><Footer/></Item>
    </div>
  );
}

export default ProfilePage;

