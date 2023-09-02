import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ActionAreaCard({ cardinfo, header }) {
    const Pricedisplay = {
        display: 'flex', // Use flexbox to arrange items horizontally
        justifyContent: 'space-between', // Add space between the items
        alignItems: 'center', // Align items vertically
    };

    const cardStyle = {
        width: '55%', // Set the desired fixed width
        margin: '.5%',
    };

    const mediaStyle = {
        height: '250px', // Set a fixed height for the image
    };
    return (   
        <Card sx={cardStyle} >
            <CardActionArea>
                <Link to="/product">
                <CardMedia
                    {...mediaStyle}
                    component="img"
                    image={cardinfo.url}
                    alt="green iguana"
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardinfo.name}
                    </Typography>
                    <div style={Pricedisplay}>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>{header.headerOne}</h4>
                            {cardinfo.priceFloor}ETH
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>{header.headerTwo}</h4>
                            {cardinfo.volume}ETH
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
        
        
    );
}
