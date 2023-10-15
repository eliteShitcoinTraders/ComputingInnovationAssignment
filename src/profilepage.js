import React, { useState, useEffect } from 'react';
import NaviBar from './components/header.js';
import Grid from '@mui/material/Grid';
import Footer from './components/footer.jsx';
import { getUserPurchaseData } from './web3.js'; // Import the function

export default function ProfilePage() {
    const [assetData, setAssetData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch user purchase data when the component mounts
        getUserPurchaseData(0, 10) // You can specify the startIndex and count here
            .then(data => {
                setAssetData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching user purchase data:", error);
            });
    }, []);

    // Function to convert Unix timestamp to formatted date and time
    const formatTimestamp = timestamp => {
        const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
        return date.toLocaleString(); // Get the formatted date and time
    };

    // Change the styles of the page.
    const pfpBackground = {
        backgroundColor: "#F5F5F5",
        height: '20%',
    };

    const gridItemStyle = {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={pfpBackground}>
            <NaviBar />
            <div className="fpInfoAndPic">
                {/* Profile picture and box code */}
                <hr style={{ border: '1px solid', color: "#F5F5F5", borderRadius: '10', width: '90%', opacity: '0.7' }}></hr>
            </div>

            <div style={pfpBackground}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        <Grid container spacing={2}>
                            {assetData.assetIds.map((assetId, id) => (
                                assetId !== "0" && (
                                    <Grid item xs={12} sm={12} md={4} key={id} style={gridItemStyle}>
                                        <div>
                                            <p>Asset ID: {assetId}</p>
                                            <p>Time: {formatTimestamp(assetData.purchaseTimes[id])}</p>
                                            {/* Handle prices when it's undefined */}
                                            <p>Price: {assetData.itemPrices ? assetData.itemPrices[id] : 'N/A'} ETH</p>
                                        </div>
                                    </Grid>
                                )
                            ))}
                        </Grid>
                )}
            </div>
            <Footer />
        </div>
    );
}
