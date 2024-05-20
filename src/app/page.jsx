import Header from "@/components/Header";
import React from "react";
import StyledTabs from "@/ui/StyledTabs";
import CarouselOne from "@/components/CarouselOne";
import BookNowCarousel from "@/components/BookNowCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import ViewMore from "@/components/ViewMore";
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

      <StyledTabs />
      <div style={{ marginBottom: "20px" }}>
        <BookNowCarousel />
        <ReviewCarousel/>
        <ViewMore/>
      </div>
    </>
  );
}

export default page;
