"use client";
import Header from "@/components/Header";
import bgImage from "/public/platform/home.webp";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";
import PlatformMain from "@/components/PlatformMain";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/Statistics";
import MobilePage from "@/components/MobilePage";
import ServicePlatform from "@/components/ServicePlatform";
import PlatformCardView from "@/components/PlatformCardView";
import { Style } from "@mui/icons-material";
import Achievements from "@/components/Achievements";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  const awards = [
    "/Home/Remaining/Client1.png",
    "/Home/Remaining/Client2.png",
    "/Home/Remaining/Client3.png",
    "/Home/Remaining/Client4.png",
    "/Home/Remaining/Client5.png",
    "/Home/Remaining/Client6.png",
    "/Home/Remaining/Client7.png",
    "/Home/Remaining/Client8.png",
  ];
  return (
    <>
      <Header title={"Explore Our Platform"} bgImg={bgImage.src} isApp />{" "}
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
          <StyledBox>
            <PlatformMain />
          </StyledBox>
          <StyledBox>
            <Statistics />
          </StyledBox>
          <StyledBox></StyledBox>
          <StyledBox
            padding={"0px"}
            title={
              "Deliver Customer Delight with power of Fixed + Gig workforce"
            }
          >
            <PlatformCardView />
          </StyledBox>
          <Achievements images={awards} />
          <StyledBox bgcolor={"#FEEFE4"}>
            <MobilePage />
          </StyledBox>
          <StyledBox>
            <ServicePlatform />
          </StyledBox>
          <StyledBox></StyledBox>
        </>
      )}
    </>
  );
}

export default page;
