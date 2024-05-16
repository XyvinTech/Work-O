"use client";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const cormo = Cormorant_Garamond({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const mont = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#FC8229", // Orange color used in buttons and accents
    },
    secondary: {
      main: "#FFFFFF", // White color for text and background
    },
    text: {
      primary: "#000000", // Black color for primary text
      secondary: "#555555", // Grey color for secondary text
    },
    background: {
      default: "#F5F5F5", // Light grey background
      paper: "#FFFFFF", // White background for paper elements
    },
  },
  typography: {
    fontFamily: cormo.style.fontFamily,
    h1: {
      fontSize: "54px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "40px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "500",
      fontFamily: mont.style.fontFamily,
    },
    h5: {
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h5: {
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // No uppercase transformation
        },
        containedPrimary: {
          gap:"8px",
          borderRadius: 4,
          padding: "8px 20px 8px 20px",
          backgroundColor: "#FC8229", // Primary button background color
          color: "#FFFFFF", // Primary button text color
          "&:hover": {
            backgroundColor: "#FF5722", // Darker shade for hover state
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none"
        },
        outlinedPrimary: {
          gap:"8px",
          borderRadius: 4,
          padding: "8px 20px 8px 20px",
          borderColor: "#FF7043", // Primary button border color
          color: "#FF7043", // Primary button text color
          "&:hover": {
            borderColor: "#FF5722", // Darker shade for hover state
            color: "#FF5722",
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none"
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // White background for app bar
          color: "#000000", // Black color for app bar text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for cards
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // Responsive font size adjustments
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "1rem", // Base font size
        "@media (min-width:600px)": {
          fontSize: "1.2rem", // Adjusted font size for small screens and up
        },
        "@media (min-width:960px)": {
          fontSize: "1.5rem", // Adjusted font size for medium screens and up
        },
      },
      h1: {
        fontSize: "3rem", // Base font size
        "@media (min-width:600px)": {
          fontSize: "4rem", // Adjusted font size for small screens and up
        },
        "@media (min-width:960px)": {
          fontSize: "5rem", // Adjusted font size for medium screens and up
        },
      },
      h2: {
        fontSize: "2.5rem", // Base font size
        "@media (min-width:600px)": {
          fontSize: "3rem", // Adjusted font size for small screens and up
        },
        "@media (min-width:960px)": {
          fontSize: "3.5rem", // Adjusted font size for medium screens and up
        },
      },
    },
  },
});

export default theme;
