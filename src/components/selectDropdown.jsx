/*student ID:103798447
    name: sothearak heng
    group: g-99
*/
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {

  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

    return (
      //used for the category when search
      <Box sx={{ minWidth: '120', maxWidth:'99.5%'}}>
          <FormControl fullWidth style={{ backgroundcolor: "blue" }} >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={1}>Category 1</MenuItem>
          <MenuItem value={2}>Category 2</MenuItem>
          <MenuItem value={3}>Category 3</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}

