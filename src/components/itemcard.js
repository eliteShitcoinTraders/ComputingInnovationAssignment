import React, { useState } from 'react';
import './css/itemcard.css';
import Grid from '@mui/material/Grid';

const ItemCard = ({ NftData }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
    };

    const gridItemStyle = (index) => ({
        width: "100%", // Set width to fill the grid cell
        borderRadius: "4px",
        display: "flex",
        alignItems: "center", // Align items vertically
        padding: "10px",
        transition: "background-color 0.3s",
        cursor: "pointer",
        backgroundColor: hoveredIndex === index ? "lightgray" : "transparent",
    });

    const imageStyle = {
        width: "100px", // Set the desired width
        height: "100px", // Set the desired height
        borderRadius: "4px",
        marginRight: "40px", // Add spacing between image and content
    };

    const contentStyle = {
        flex: "1",
        display: "flex",
        justifyContent: "space-between", // Place headers next to each other
        alignItems: "flex-start", // Align headers at the top
        flexDirection: "column",
    };

    const headerStyle = {
        color: "",
        letterSpacing: ".05rem",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyle}>
            {NftData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={5.9}>
                    <div
                        className="grid-item"
                        style={gridItemStyle(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={item.url} alt={item.name} style={imageStyle} />
                        <div style={contentStyle}>
                            <h3 style={headerStyle}>{item.name}</h3>
                        </div>
                        <div style={contentStyle}>
                            <h4>{item.priceFloor}ETH</h4>
                        </div>
                        <div style={contentStyle}>
                            <h4>{item.volume}ETH</h4>
                        </div>
                    </div>
                </Grid>
            ))}
        </div>
    );
}

export default ItemCard;
