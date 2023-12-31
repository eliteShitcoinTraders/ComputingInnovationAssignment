/*student ID:104249085
    name: henry nguyen
    group: g-99
*/

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
//drop down list values
const currencies = [
    {
      value: 'ETH',
      label: 'ETH',
    },
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'AUD',
      label: 'AUD',
    },
  ];

export default function Inputs() {/*MUI inputs where we use for the user name and password*/
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show); //hide and show password functions

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <FormControl sx={{ m: 1, width: '30ch'}} variant="standard">
          <InputLabel htmlFor="username">Username</InputLabel> {/*input for username section*/}
          <Input
            id="username"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="pw">Password</InputLabel> {/*input for pw*/}
          <Input
            id="pw"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    
      </div>
      <div>
        <TextField
          label="Wallet ID" //input for wallet id
          id="walletID"
          sx={{ m: 1, width: '50ch' }}
          variant="standard"
        />
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined"> {/* drop down options for currency*/}
        <TextField
          id="outlined-select-currency"
          select
          label="Currency"
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        
      </div>
    </Box>
  );
}