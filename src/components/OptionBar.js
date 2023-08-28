import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const leftSideButton = {
    margin:"0 auto",
    fontSize: "18px",
    padding: "10px 25px", // Add padding around the button text

};
export default function BasicButtonGroup() {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group" >
            <Button style={leftSideButton}>One</Button>
            <Button style={leftSideButton}>Two</Button>
            <Button style={leftSideButton}>Three</Button>
        </ButtonGroup>
    );
}
