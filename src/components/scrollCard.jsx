/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ActionAreaCard({ cardinfo, header }) {
    //style info
    console.log(cardinfo)
    const Pricedisplay = {
        display: 'flex', // Use flexbox to arrange items horizontally
        justifyContent: 'space-between', // Add space between the items
        alignItems: 'center', // Align items vertically
    };

    const cardStyle = {
        margin: '.5%',
    };

    const mediaStyle = {
        height: '250px', // Set a fixed height for the image
    };
    return (   
        <Card sx={cardStyle} >{/* MUI functionalities with some design tweaks*/}
            <CardActionArea>
                <Link to={`/product/${cardinfo.Asset_ID}`}>
                <CardMedia
                    {...mediaStyle}
                    component="img"
                    image={cardinfo.Img_Url}
                    alt="no IMG"
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardinfo.Name}
                    </Typography>
                    <div style={Pricedisplay}>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>{header.headerOne}</h4>
                            {cardinfo.Mint_Price}ETH
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <h4>{header.headerTwo}</h4>
                            {cardinfo.Price}ETH
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
        
        
    );
}
