// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import logo from '../Resources/Designer.png'; // Import your logo image
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Navbar = () => {
  return (
    <AppBar position="static" elevation={1} sx={{ bgcolor: 'white', color: 'black' }} className='appbar'>
      <Toolbar >
        {/* Logo */}
        {/* <Typography variant="h6" component="div" > */}
          <CheckCircleOutlineIcon sx={{marginRight: '8px'}}/>
        {/* </Typography> */}

        <Typography variant='h6'>
            Choice Picker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
