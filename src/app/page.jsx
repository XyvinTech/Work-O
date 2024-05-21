import Header from "@/components/Header";
import React from "react";
import StyledTabs from "@/ui/StyledTabs";
import CarouselOne from "@/components/CarouselOne";
import BookNowCarousel from "@/components/BookNowCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import ViewMore from "@/components/ViewMore";
import { Box, Typography } from "@mui/material";
import AvatarCarousel from "@/components/AvatarCarousel";
import AcService from "@/components/AcService";
import HomeApplianceService from "@/components/HomeApplianceService";
import BeautyService from "@/components/BeautyService";
import TechnicalService from "@/components/TechnicalService";
import StyledForm from "@/components/StyledForm";
function page() {
  const images = [
    "/assets/home/carousel-1/image1.png",
    "/assets/home/carousel-1/image2.png",
    "/assets/home/carousel-1/image3.png",
    "/assets/home/carousel-1/image4.png",
    "/assets/home/carousel-1/image5.jpeg",
    "/assets/home/carousel-1/image6.png",
    "/assets/home/carousel-1/image7.png",
    "/assets/home/carousel-1/image8.jpeg",
    "/assets/home/carousel-1/image9.png",
    "/assets/home/carousel-1/image10.png",
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
      <Box>
        <Typography variant="h3" textAlign="center">
          Our Services
        </Typography>{" "}
        <StyledTabs />
      </Box>
      <Box bgcolor="#F2F2F2" height="300px" marginTop="60px">
        <BookNowCarousel />
      </Box>
      <Box marginTop="50px">
        <Typography variant="h3" textAlign="center">
          Upgrading 2,000+ Lives Through Skill-Development Program
        </Typography>
        <AvatarCarousel images={images} />
      </Box>
      <Box marginTop="20px">
        <Typography variant="h3" textAlign="center">
          Testimonials
        </Typography>
        <ReviewCarousel />
      </Box>
      <Box marginTop="70px">
        <Typography variant="h3" textAlign="center">
          Blogs
        </Typography>

        <ViewMore />
      </Box>
      <Box>
        <AcService />
      </Box>
      <Box>
        <HomeApplianceService />
      </Box>
      <Box>
        <BeautyService />
      </Box>
      <Box>
        <TechnicalService />
      </Box>
    </>
  );
}

export default page;
