import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{}}>
      <Grid container xs={12} sx={{ m: 'center', p: 3.5, ml: 4 }}>
        <Grid item xs={9.5}>
          <Typography sx={{ fontSize: '19px' }}> Efusión </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <Typography> Inicio </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography onClick={handleMenuOpen}> Sistema Efusión </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{width:"180px", fontSize:"10px"}}
          >
            <Link to='/servicios'>
              <MenuItem onClick={handleMenuClose} sx={{justifyContent:"flex-end"}}>Servicios</MenuItem>
            </Link>
            <MenuItem onClick={handleMenuClose} sx={{justifyContent:"flex-end"}}>Suscripción</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{justifyContent:"flex-end"}}>¿Quiénes somos?</MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={1}>
          <Typography> Login </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
