
"use client";

import "./globals.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Create an emotion cache
const cache = createCache({ key: 'css', prepend: true });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Worko</title>
        <meta name="description" content="Worko service" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" type="image/png" />
      </head>
      <body>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </CacheProvider>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJ9MTX3Z');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJ9MTX3Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}