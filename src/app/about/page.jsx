import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/about/img/header.png";
import VisionCardView from "@/components/VisionCardView";
import TeamCarousel from "@/components/TeamCarousel";
import PromiseCardView from "@/components/PromiseCardView";
import AvatarCarousel from "@/components/AvatarCarousel";
import Achievements from "@/components/Achievements";
import StyledBox from "@/components/StyledBox";
import AboutMain from "@/components/AboutMain";
import VisionData from "../../assets/json/VisionData";
import Certification from "../../assets/json/CertificationData";
import viewMoreData from "../../assets/json/HowWeDifferData";

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
        title={"Worko: What Makes Us Different?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
      <StyledBox>
        <AboutMain />
      </StyledBox>
      <StyledBox title={"Our Vision"}>
        <VisionCardView viewMoreData={VisionData} />
      </StyledBox>
      <StyledBox title={"Meet our team"}>
        <TeamCarousel />
      </StyledBox>
      <StyledBox title={"How We Differ?"}>
        <PromiseCardView viewMoreData={viewMoreData} />
      </StyledBox>
      <StyledBox
        title={"Upgrading 2,000+ Lives Through Skill-Development Program"}
      >
        <AvatarCarousel images={images} />
      </StyledBox>
      <StyledBox title={"Certifications"}>
        <VisionCardView viewMoreData={Certification} />
      </StyledBox>
      <StyledBox>
        <Achievements />
      </StyledBox>
    </>
  );
}

export default page;
