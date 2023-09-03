/*student ID:104266437
    name: Rino Quijote
    group: g-99
*/
import React, { useState } from 'react';
import './css/itemcard.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const ItemCard = ({ NftData }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    //styles setting
    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
    };

    const gridItemStyle = (index) => ({
        width: "100%",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        transition: "background-color 0.3s",
        cursor: "pointer",
        backgroundColor: hoveredIndex === index ? "lightgray" : "transparent",
    });

    const imageStyle = {
        width: "90px",
        height: "90px",
        borderRadius: "15px",
        marginRight: "20px",
    };

    const contentStyle = {
        flex: "1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "column",
    };

    const headerStyle = {
        letterSpacing: ".05rem",
        fontWeight: "600",
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
                    >   <Link to="/product">
                        <img src={item.url} alt={item.name} style={imageStyle} />
                        </Link>
                        <div style={contentStyle}>
                            <h3 style={headerStyle}>{item.name}</h3>
                        </div>
                        <div style={contentStyle}>
                            <h4>{item.date}</h4>
                        </div>
                        <div style={contentStyle}>
                            <h4>{item.price}ETH</h4>
                        </div>
                    </div>

                </Grid>

            ))}

        </div>

    );
}

export default ItemCard;
