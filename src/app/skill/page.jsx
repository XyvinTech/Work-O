import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/skill/img/header.png";
import StyledBox from "@/components/StyledBox";
import AvatarCarousel from "@/components/AvatarCarousel";
import TrainingProgram from "@/components/TrainingProgram";
import PromiseCardView from "@/components/PromiseCardView";
import viewMoreData from "../../assets/json/EmpowermentData";

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
        title={"Our Skill Development Program"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
       <StyledBox
        title={"Upgrading 2,000+ Lives Through Skill-Development Program"}
      >
        <AvatarCarousel images={images} />
      </StyledBox>
      <StyledBox title={"Training Program"}>
        <TrainingProgram/>
      </StyledBox>
      <StyledBox title={"Gig Worker Empowerment"}>  <PromiseCardView viewMoreData={viewMoreData} /></StyledBox>
    </>
  );
}

export default page;
