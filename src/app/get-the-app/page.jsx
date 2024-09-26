"use client";
import Header from "@/components/Header";
import bgImage from "/public/assets/get-the-app/img/header.png";
import GetApp from "@/components/GetApp";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/Statistics";
import { Style } from "@mui/icons-material";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
     
          <Header title={"Download our Worko App"} bgImg={bgImage.src} />
      
        <>
          <GetApp />
          <StyledBox>
            <Statistics />
          </StyledBox>
          <StyledBox></StyledBox>
        </>
    
    </>
  );
}

export default page;
