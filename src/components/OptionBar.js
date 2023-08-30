import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const leftSideButton = {
    margin: "0 auto",
    fontSize: "12px",
    fontWeight: "700",
    padding: "5px 25px", // Add padding around the button text
    width: "100%",
    fontFamily: 'monospace',

};

export default function BasicButtonGroup() {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group" >
            <Button style={leftSideButton}>today</Button>
            <Button style={leftSideButton}>this week</Button>
            <Button style={leftSideButton}>this month</Button>
        </ButtonGroup>
    );
}
