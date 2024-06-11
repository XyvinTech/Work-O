"use client"
import Header from "@/components/Header";
import bgImage from "/public/SkillDevelopment/Main.webp";
import StyledBox from "@/components/StyledBox";
import AvatarCarousel from "@/components/AvatarCarousel";
import TrainingProgram from "@/components/TrainingProgram";
import PromiseCardView from "@/components/PromiseCardView";
import viewMoreData from "../../assets/json/EmpowermentData";
import FreqenlyAskedQuestion from "@/components/FreqenlyAskedQuestion";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";

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
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <StyledLoader />
      ) : (
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
            title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
          >
            <AvatarCarousel images={images} />
          </StyledBox>
          <StyledBox title={"Training Program"}>
            <TrainingProgram />
          </StyledBox>
          <StyledBox title={"Gig Worker Empowerment"}>
            {" "}
            <PromiseCardView viewMoreData={viewMoreData} />
          </StyledBox>
          <FreqenlyAskedQuestion showStillHaveQuestions={false} />
        </>
      )}
    </>
  );
}

export default page;
