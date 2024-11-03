"use client";
import "./globals.css";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/Theme/Theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-cormorant-garamond",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorantGaramond.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>{" "}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
