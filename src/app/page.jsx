"use client";
import Header from "@/components/Header";

import React, { useEffect, useState } from "react";
import StyledTabs from "@/ui/StyledTabs";
import CarouselOne from "@/components/CarouselOne";
import BookNowCarousel from "@/components/BookNowCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import ViewMore from "@/components/ViewMore";
import AvatarCarousel from "@/components/AvatarCarousel";
import PromiseCardView from "@/components/PromiseCardView";
import GetApp from "@/components/GetApp";
import Achievements from "@/components/Achievements";
import StyledBox from "@/components/StyledBox";
import OurStory from "@/components/OurStory";
import viewMoreData from "../assets/json/PromiseCardData";
import FreqenlyAskedQuestion from "@/components/FreqenlyAskedQuestion";
import Location from "@/components/Location";
import Statistics from "@/components/Statistics";
import ContactUs from "@/components/ContactUs";
import StyledLoader from "@/components/StyledLoader";
import { Box } from "@mui/material";
import HomeHeader from "@/components/HomeHeader";
function page() {
  const [isLoading, setIsLoading] = useState(true);

  const images1 = [
    "/Home/Carousal/1.webp",
    "/Home/Carousal/2.webp",
    "/Home/Carousal/3.webp",
    "/Home/Carousal/4.webp",
    "/Home/Carousal/5.webp",
    "/Home/Carousal/6.webp",
    "/Home/Carousal/7.webp",
    "/Home/Carousal/9.webp",
    "/Home/Carousal/10.webp",
    "/Home/Carousal/11.webp",
    "/Home/Carousal/12.webp",
    "/Home/Carousal/13.webp",
  ];
  const images2 = [
    "/Home/Carousal/14.webp",
    "/Home/Carousal/15.webp",
    "/Home/Carousal/16.webp",
    "/Home/Carousal/17.webp",
    "/Home/Carousal/18.webp",
    "/Home/Carousal/19.webp",
    "/Home/Carousal/20.webp",
    "/Home/Carousal/21.webp",
    "/Home/Carousal/22.webp",
    "/Home/Carousal/23.webp",
    "/Home/Carousal/24.webp",
    "/Home/Carousal/25.webp",
    "/Home/Carousal/26.webp",
  ];
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
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
     
        <>
          <HomeHeader
            title={
              "India's 1st Full-Stack B2B and B2C Service Marketplace for Gig Workers"
            }
            subtitle={
              "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
            }
            isButtons
            isHome
            mobile={"1020px"}
          />{" "}
          <CarouselOne images1={images1} images2={images2} />
          <StyledBox>
            <Statistics />
          </StyledBox>
          <StyledBox title={"Our Service"} padding={"10px"}>
            <StyledTabs />
          </StyledBox>
          <StyledBox title={"Our Major Locations"}>
            <Location />
          </StyledBox>
          <Box bgcolor={"#F2F2F2"} padding={"5px"}>
            <BookNowCarousel />
          </Box>
          <StyledBox>
            <OurStory />
          </StyledBox>
          <StyledBox
            title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
          >
            <AvatarCarousel images={images1} />
          </StyledBox>
          <StyledBox title={"Who is this for?"}>
            <PromiseCardView viewMoreData={viewMoreData} />
          </StyledBox>
          <GetApp />
          <StyledBox title={"Testimonials"}>
            <ReviewCarousel />
          </StyledBox>
          {/* <StyledBox title={"Blogs"}>
            <ViewMore />
          </StyledBox>{" "} */}
          <Achievements images={awards} />
          <FreqenlyAskedQuestion showStillHaveQuestions={false} />
          <ContactUs />
        </>
    </>
  );
}
export default page;
