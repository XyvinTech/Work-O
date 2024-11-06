"use client";
import "./globals.css";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/Theme/Theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import Script from "next/script";
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
      <title>Worko</title>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" type="image/png" />
        <meta
          name="google-site-verification"
          content="M0JA93C5fbtkgRdM7T79B30hKzLPx_8vv85bK947VP0"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJ9MTX3Z');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${cormorantGaramond.variable}`}>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJ9MTX3Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
