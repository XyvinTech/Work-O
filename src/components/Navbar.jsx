"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { mont } from "@/theme";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    "Home",
    "About Us",
    "Skill Development",
    "Services",
    "Locations",
    "Blog",
    "Resources",
    "Contact Us",
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" flexDirection="column" width="100%" p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Worko</Typography>
            {!isMobile && (
              <Stack direction={"row"} spacing={4}>
                <Button startIcon={<PhoneIcon />} color="inherit">
                  Customer Care
                </Button>
                <Button variant="contained" color="primary">
                  Get the App
                </Button>
              </Stack>
            )}
            {isMobile && (
              <IconButton color="inherit" aria-label="menu" onClick={handleMobileMenuToggle}>
                <MenuIcon color="primary" />
              </IconButton>
            )}
          </Box>
          {!isMobile && <Divider sx={{ m: 2 }} />}
          {isMobile ? (
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
              <Box mt={2} width="100%">
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    fullWidth
                    sx={{
                      fontFamily: mont.style.fontFamily,
                      textTransform: "uppercase",
                      fontSize: "14px",
                      fontWeight: 700,
                      "&:hover": {
                        color: "#FC8229", 
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Button startIcon={<PhoneIcon />} color="inherit" fullWidth>
                  Customer Care
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                  Get the App
                </Button>
              </Box>
            </Collapse>
          ) : (
            <Stack alignItems="center" direction={"row"} justifyContent={"center"} spacing={4}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{
                    fontFamily: mont.style.fontFamily,
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: 700,
                    "&:hover": {
                      color: "#FC8229", 
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
