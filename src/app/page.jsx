import Header from "@/components/Header";
import React from "react";
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
function page() {
  const images = [
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
    "/Home/Carousal/14.webp",
    "/Home/Carousal/15.webp",
    "/Home/Carousal/16.webp",
    "/Home/Carousal/17.webp",
    "/Home/Carousal/18.webp",
    "/Home/Carousal/19.webp",
    "/Home/Carousal/20.webp",
  ];
  return (
    <>
      <Header
        title={
          "India's 1st Full-Stack B2B and B2C Service Marketplace for Gig Workers"
        }
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        isHome
      />
      <CarouselOne images={images} />
      <StyledBox>
        <Statistics />
      </StyledBox>
      <StyledBox title={"Our Service"}>
        <StyledTabs />
      </StyledBox>
      <StyledBox title={"Our Major Locations"}>
        <Location />
      </StyledBox>
      <StyledBox bgcolor={"#F2F2F2"}>
        <BookNowCarousel />
      </StyledBox>
      <StyledBox>
        <OurStory />
      </StyledBox>
      <StyledBox
        title={"Upgrading 2,000+ Lives Through Skill-Development Program"}
      >
        <AvatarCarousel images={images} />
      </StyledBox>
      <StyledBox title={"Who is this for?"}>
        <PromiseCardView viewMoreData={viewMoreData} />
        <GetApp />
      </StyledBox>
      <StyledBox title={"Testimonials"}>
        <ReviewCarousel />
      </StyledBox>
      <StyledBox title={"Blogs"}>
        <ViewMore />
      </StyledBox>{" "}
      <Achievements />
      <FreqenlyAskedQuestion showStillHaveQuestions={false} />
      <ContactUs />
    </>
  );
}

export default page;
