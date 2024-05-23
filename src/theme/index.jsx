"use client";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const cormo = Cormorant_Garamond({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const mont = Montserrat({
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
      background: "#2F2F2F", // Grey color for secondary text
    },
    background: {
      default: "#F5F5F5", // Light grey background
      paper: "#FFFFFF", // White background for paper elements
    },
  },
  typography: {
    fontFamily: cormo.style.fontFamily,
    h1: {
      fontSize: "61px",
      "@media (max-width:600px)": {
        textAlign: "center",
        fontSize: "35px",
      },
      fontWeight: "bold",
    },
    h2: {
      fontSize: "49px",
      "@media (max-width:600px)": {
        fontSize: "28px",
      },
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

    card: {
      fontSize: "25px",
      fontWeight: "600",
      fontFamily: mont.style.fontFamily,
    },
  subtitle1: {
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h5: {
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h6: {
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h7: {
      fontSize: "14px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h8: {
      fontSize: "10px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    h9: {
      fontSize: "12px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
    },
    subtitle: {
      fontSize: "31px",
      fontWeight: "500",
      fontFamily: mont.style.fontFamily,
    },
    footer_title: {
      fontSize: "18px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
      fontWeight: "700",
      fontFamily: mont.style.fontFamily,
    },
    footer_subtitle: {
      color: "#BDBDBD",
      fontSize: "16px",
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
      fontWeight: "400",
      fontFamily: mont.style.fontFamily,
    },
    copyrights: {
      fontSize: "12px",
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
      fontWeight: "600",
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
          gap: "8px",
          borderRadius: 4,
          padding: "8px 40px",
          "@media (max-width:600px)": {
            padding: "8px 20px",
          },
          backgroundColor: "#FC8229", // Primary button background color
          color: "#FFFFFF", // Primary button text color
          "&:hover": {
            backgroundColor: "#FC8229", // Darker shade for hover state
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
        },
        containedSecondary: {
          gap: "8px",
          borderRadius: 4,
          padding: "8px 20px",
          "@media (max-width:600px)": {
            padding: "8px 20px",
          },
          "&:hover": {
            backgroundColor:"#FFFFFF"
           },
          backgroundColor: "#FFFFFF",
          color: "#3A3A3A", // Primary button text color
          fontFamily: mont.style.fontFamily,
          fontWeight: "700",
          boxShadow: "none",
        },
        outlinedPrimary: {
          gap: "8px",
          borderRadius: 4,
          padding: "8px 40px",
          "@media (max-width:600px)": {
            padding: "8px 20px",
          },
          borderColor: "#FF7043", // Primary button border color
          color: "#FF7043", // Primary button text color
          "&:hover": {
            borderColor: "#FF7043", // Darker shade for hover state
            color: "#FF5722",
            backgroundColor:"#FFFFFF"
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
        },
        outlinedSecondary: {
          gap: "8px",
          borderRadius: 4,
          padding: "8px 40px",
          "@media (max-width:600px)": {
            padding: "8px 20px",
          },
          borderColor: "#FFF", // Primary button border color
          color: "#FFF", // Primary button text color
          "&:hover": {
            borderColor: "#FEE", // Darker shade for hover state
            color: "#FEE",
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
        },
        filledPrimary: {
          gap: "8px",
          borderRadius: 4,
          padding: "8px 20px",
          "@media (max-width:600px)": {
            padding: "8px 20px",
          },
          "&:hover": {
           backgroundColor:"#3B3B3B"
          },
          backgroundColor: "#3B3B3B",
          color: "#FFFFFF", // Primary button text color
          fontFamily: mont.style.fontFamily,
          fontWeight: "700",
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for cards
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          fontFamily: mont.style.fontFamily,
          borderRadius: 8, // Rounded corners for cards
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: mont.style.fontFamily, // Apply Montserrat font to input forms
          fontWeight: 500,
          fontSize: "1rem", // Example font size for input forms
          color: "#000000", // Example text color for input forms
        },
        input: {
          // Placeholder styles
          color: "#555555", // Placeholder text color
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: mont.style.fontFamily, // Apply Montserrat font to Select components
          fontSize: "1rem", // Example font size for Select components
          color: "#000000", // Example text color for Select components
          borderColor: "#CCCCCC", // Border color for Select components
          "&:focus": {
            borderColor: "#FC8229", // Border color on focus
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: mont.style.fontFamily, // Apply Montserrat font to Tabs component
        },
        indicator: {
          // Adjust indicator styles if necessary
        },
      },
    },
  },
});

export default theme;
