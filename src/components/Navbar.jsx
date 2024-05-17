"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Collapse, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = ['Home', 'About Us', 'Skill Development', 'Services', 'Locations', 'Blog', 'Resources', 'Contact Us'];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Worko
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" aria-label="menu" onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
              {menuItems.map((item) => (
                <Button key={item} color="inherit" fullWidth>
                  {item}
                </Button>
              ))}
              <Button startIcon={<PhoneIcon />} color="inherit" fullWidth>
                Customer Care
              </Button>
              <Button variant="contained" color="primary" fullWidth>
                Get the App
              </Button>
            </Collapse>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
            <Button startIcon={<PhoneIcon />} color="inherit">
              Customer Care
            </Button>
            <Button variant="contained" color="primary">
              Get the App
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
