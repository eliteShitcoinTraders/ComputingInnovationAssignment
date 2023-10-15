/*student ID:104266437
    name: Rino Quijote
    group: g-99
*/
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import profilePicture from './components/img/eugene.webp';
import { Typography } from '@mui/material';
import NaviBar from './components/header.js';
import Grid from '@mui/material/Grid';
import TransacCard from './components/transactioncard';
import Footer from './components/footer.jsx';
import axios from 'axios';
import SearchBar from './components/searchBar.jsx';
import SearchResultList from './components/searchResultList.jsx';


/*
Unsure about in-line references. But, just in case I forget to ask on Tuesday:
E.g. App from **url**
1. backgroundImage from https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/
2. Circle Pfp from https://www.youtube.com/watch?v=xBDa6OzbF3o&ab_channel=LirsTechTips
3. Profile Box from https://mui.com/material-ui/react-box/
4. ImageList from https://mui.com/material-ui/react-image-list/#system-StandardImageList.js
*/

export default function ProfilePage() {
  const [result, setResults] = React.useState([]);
  const [assetinfo, setAssetInfo] = useState();
  useEffect(() => {
      const API_URL = 'http://127.0.0.1:8000/users/';
      axios.get(API_URL)
          .then(response => {
            setAssetInfo(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching data:", error);
          });
  }, []);

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

  return (
    <div style={pfpBackground}>
      < NaviBar />
      <div className="fpInfoAndPic">
      <hr></hr>
                   <SearchBar setResults={setResults} />
                   <SearchResultList result={result} />
                   <hr></hr>
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
                User: {}
              </Typography>
            </Box>
          </div>
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
          
          {/* Transaction History*/}
          <div style={inventoryBackground}>
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
        </div>
        <Footer/>
        </div>
  );
}
