"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LinearProgress } from "@mui/material";

const LayoutTheme = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutTheme;
