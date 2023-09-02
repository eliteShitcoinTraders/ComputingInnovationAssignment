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

const currencies = [
    {
      value: 'USD',
      label: '$ - USD',
    },
    {
      value: 'BTC',
      label: '฿ - BTC',
    },
    {
      value: 'AUD',
      label: '$ - AUD',
    },
  ];

export default function Inputs() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <FormControl sx={{ m: 1, width: '30ch'}} variant="standard">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="pw">Password</InputLabel>
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
          label="Wallet ID"
          id="walletID"
          sx={{ m: 1, width: '50ch' }}
          variant="standard"
        />
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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