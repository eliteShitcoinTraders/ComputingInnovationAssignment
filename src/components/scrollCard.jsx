import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard({ cardinfo }) {
    const Pricedisplay = {
        display: 'flex', // Use flexbox to arrange items horizontally
        justifyContent: 'space-between', // Add space between the items
        alignItems: 'center', // Align items vertically
    };

    const cardStyle = {
        width: '380px', // Set the desired fixed width
        margin: '.5%',
    };

    const mediaStyle = {
        height: '250px', // Set a fixed height for the image
    };
    return (
        <Card sx={cardStyle} >
            <CardActionArea>
                <CardMedia
                    {...mediaStyle}
                    component="img"
                    image={cardinfo.url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardinfo.name}
                    </Typography>
                    <div style={Pricedisplay}>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>Floor Price</h4>
                            {cardinfo.priceFloor}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>Volume</h4>
                            {cardinfo.volume}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
