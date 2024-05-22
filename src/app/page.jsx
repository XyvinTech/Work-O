import Header from "@/components/Header";
import React from "react";
import StyledTabs from "@/ui/StyledTabs";
import CarouselOne from "@/components/CarouselOne";
import StyledBox from "@/components/StyledBox";
import BookNowCarousel from "@/components/BookNowCarousel";
import OurStory from "@/components/OurStory";
import AvatarCarousel from "@/components/AvatarCarousel";
import PromiseCardView from "@/components/PromiseCardView";
import viewMoreData from "@/assets/json/BlogData";
import { GetApp } from "@mui/icons-material";
import ReviewCarousel from "@/components/ReviewCarousel";
import ViewMore from "@/components/ViewMore";
import Achievements from "@/components/Achievements";
function page() {
    const images = [
    '/assets/home/carousel-1/image1.png',
    '/assets/home/carousel-1/image2.png',
    '/assets/home/carousel-1/image3.png',
    '/assets/home/carousel-1/image4.png',
    '/assets/home/carousel-1/image5.jpeg',
    '/assets/home/carousel-1/image6.png',
    '/assets/home/carousel-1/image7.png',
    '/assets/home/carousel-1/image8.jpeg',
    '/assets/home/carousel-1/image9.png',
    '/assets/home/carousel-1/image10.png',
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
      <StyledBox title={"Our Service"}>
        <StyledTabs />
      </StyledBox>
      <StyledBox title={"Our Major Locations"}></StyledBox>
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
       
      </StyledBox>
      <StyledBox> <Achievements/></StyledBox>
    </>
  );
}

export default page;
