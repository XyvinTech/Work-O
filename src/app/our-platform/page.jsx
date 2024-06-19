"use client";
import Header from "@/components/Header";
import bgImage from "/public/platform/home.png";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";
import PlatformMain from "@/components/PlatformMain";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/Statistics";
import MobilePage from "@/components/MobilePage";
import ServicePlatform from "@/components/ServicePlatform";
import PlatformCardView from "@/components/PlatformCardView";
import { Style } from "@mui/icons-material";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Header title={"Explore Our Platform"} bgImg={bgImage.src} />{" "}
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
          <StyledBox>
            <PlatformMain />
          </StyledBox>
          <StyledBox>
            <Statistics />
          </StyledBox><StyledBox></StyledBox>
          <StyledBox padding={"0px"}title={"Deliver Customer Delight with power of Fixed + Gig workforce"}><PlatformCardView/></StyledBox>
        <StyledBox bgcolor={"#FEEFE4"}><MobilePage/>
        </StyledBox>
        <StyledBox>
          <ServicePlatform/>
          </StyledBox>
          <StyledBox></StyledBox>
        </>
      )}
    </>
  );
}

export default page;
