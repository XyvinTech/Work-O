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
        // textAlign: "center",
        fontSize: "33px",
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
    h12: {
      fontSize: "32px",
      fontWeight: "700",
    },
    cardHead: {
      fontSize: "32px",
      fontWeight: "700",
      fontFamily: cormo.style.fontFamily,
      "@media (max-width:600px)": {
        fontSize: "28px",
      }
    },
    h4: {
      fontSize: "24px",
      fontWeight: "500",
      fontFamily: mont.style.fontFamily,
      "@media (max-width:768px)": {
        fontSize: "18px",
      },
    },

    card: {
      fontSize: "25px",
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
      "@media (max-width:768px)": {
        fontSize: "20px",
      },
      fontWeight: "600",
      fontFamily: mont.style.fontFamily,
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: mont.style.fontFamily,
      "@media (max-width:768px)": {
        fontSize: "12px",
      },
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
    h10: {
      fontSize: "20px",
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
        fontSize: "12px",
      },
      fontWeight: "500",
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
        navbarPrimary: {
          gap: "8px",
          borderRadius: 4,
          padding: "15px 55px",
          // width: "200px",
          "@media (max-width:600px)": {
            padding: "15px 20px",
          },
          backgroundColor: "#FC8229",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FC8229",
          },
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
        },
        containedPrimary: {
          gap: "8px",
          borderRadius: 4,
          padding: "15px 20px 15px 57px ",
          // width: "230px",
          "@media (max-width:600px)": {
            padding: "10px 15px 10px 40px",
            // width: "500px"
          },
        
          backgroundColor: "#FC8229",
          color: "#FFFFFF",
          position: "relative",
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
          "&::after": {
            content: '""',
            display: "inline-block",
            width: "23px",
            height: "17px",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.97428 14.5284L21.0261 3.47145M21.0261 3.47145L8.57695 1.22022M21.0261 3.47145L16.8049 15.3975' stroke='%23FBF8F2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            marginLeft: "8px",
            opacity: 0,
            transition: "opacity 1s ease, margin-left 1s ease",
          },
          "&:hover": {
            backgroundColor: "#FC8229",
            "&::after": {
              opacity: 1,
              marginLeft: "16px",
            },
          },
        },
        containedSecondary: {
          gap: "8px",
          borderRadius: 4,
          padding: "15px 20px 15px 57px",
          "@media (max-width:600px)": {
            padding: "10px 15px 10px 50px",
          },
          backgroundColor: "#FFFFFF",
          color: "#3A3A3A", // Primary button text color
          position: "relative",
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
          "&::after": {
            content: '""',
            display: "inline-block",
            width: "23px",
            height: "17px",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.97428 14.5284L21.0261 3.47145M21.0261 3.47145L8.57695 1.22022M21.0261 3.47145L16.8049 15.3975' stroke='%233B3B3B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 1s ease, margin-left 1s ease",
             
          },
          "&:hover": {
            backgroundColor: "#FFFFFF",
            "&::after": {
              opacity: 1,
              marginLeft: "16px",
            },
          },
         
        },
        outlinedPrimary: {
          gap: "8px",
          borderRadius: 4,
          // width: "230px",
          padding: "15px 20px 15px 57px",
          "@media (max-width:600px)": {
            padding: "10px 15px 10px 40px",
            // width:"210px"
          },
          borderColor: "#FF7043", // Primary button border color
          color: "#FF7043", // Primary button text color
          position: "relative",
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
          "&::after": {
            content: '""', // Empty content to use background image
            display: "inline-block",
            width: "23px",
            height: "17px",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.97428 14.5285L21.0261 3.47157M21.0261 3.47157L8.57695 1.22034M21.0261 3.47157L16.8049 15.3976' stroke='%23FC8229' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 1s ease, margin-left 1s ease",
             
          },
          "&:hover": {
            borderColor: "#FF7043", // Darker shade for hover state
            color: "#FF5722",
            backgroundColor: "#FFFFFF",
            "&::after": {
              opacity: 1,
              opacity: 1,
              marginLeft: "16px",
            },
          },
         
        },
        outlinedSecondary: {
          gap: "8px",
          borderRadius: 4,
          // width: "230px",
          padding: "15px 20px 15px 57px",
          "@media (max-width:600px)": {
            padding: "10px 15px 10px 50px",
            // width:"210px"
          },
          borderColor: "#FFF", // Primary button border color
          color: "#FFF", // Primary button text color
          position: "relative",
          fontFamily: mont.style.fontFamily,
          fontWeight: "600",
          boxShadow: "none",
          "&::after": {
           
            content: '""',
            display: "inline-block",
            width: "23px",
            height: "17px",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.97428 14.5284L21.0261 3.47145M21.0261 3.47145L8.57695 1.22022M21.0261 3.47145L16.8049 15.3975' stroke='%23FBF8F2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 1s ease, margin-left 1s ease",
             
          },
          "&:hover": {
            "&::after": {
              opacity: 1,
              marginLeft: "16px",
            },
          },
         
        },
        filledPrimary: {
          gap: "8px",
          borderRadius: 4,
          padding: "15px 20px 15px 57px",
          "@media (max-width:600px)": {
            padding: "10px 15px 10px 50px",
          },
          backgroundColor: "#3B3B3B",
          color: "#FFFFFF", // Primary button text color
          fontFamily: mont.style.fontFamily,
          fontWeight: "700",
          boxShadow: "none",
          position: "relative",
        
          "&::after": {
            content: '""',
            display: "inline-block",
            width: "23px",
            height: "17px",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.97428 14.5284L21.0261 3.47145M21.0261 3.47145L8.57695 1.22022M21.0261 3.47145L16.8049 15.3975' stroke='%23FBF8F2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              marginLeft: "8px",
              opacity: 0,
              transition: "opacity 1s ease, margin-left 1s ease",
              
          },
          "&:hover": {
            backgroundColor: "#3B3B3B",
            "&::after": {
              opacity: 1,
              marginLeft: "16px",
            },
           
          },
         
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
