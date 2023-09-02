import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <Box sx={{ minWidth: '120', maxWidth:'99.5%'}}>
          <FormControl fullWidth style={{ backgroundcolor: "blue" }} >
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>ETH</MenuItem>
          <MenuItem value={2}>BTC</MenuItem>
          <MenuItem value={3}>SOL</MenuItem>
          <MenuItem value={4}>DOGE</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
