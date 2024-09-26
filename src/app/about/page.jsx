"use client";
import Header from "@/components/Header";
import bgImage from "/public/AboutUs/Header.webp";
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
import FreqenlyAskedQuestion from "@/components/FreqenlyAskedQuestion";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";
import Gallery from "@/components/Gallery";

function page() {
  const [isLoading, setIsLoading] = useState(true);
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
      <Header
        title={"Worko: What Makes Us Different?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
     
        <>
          <StyledBox>
            <AboutMain />
          </StyledBox>
          <StyledBox title={"Our Vision"}>
            <VisionCardView viewMoreData={VisionData} />
          </StyledBox>
          <StyledBox title={"Leadership"}>
            <TeamCarousel />
          </StyledBox>
          <StyledBox title={"Gallery"}>
            <Gallery />
          </StyledBox>
          <StyledBox title={"How We Differ?"}>
            <PromiseCardView viewMoreData={viewMoreData} />
          </StyledBox>
          <StyledBox
            title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
          >
            <AvatarCarousel images={images} />
          </StyledBox>
          <StyledBox title={"Certifications"}>
            <VisionCardView viewMoreData={Certification} />
          </StyledBox>

          <Achievements images={awards} />

          <FreqenlyAskedQuestion />
        </>
    </>
  );
}

export default page;
