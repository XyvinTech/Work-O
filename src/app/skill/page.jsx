"use client";
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
import CardView from "@/components/CardView";
import TrainingCard from "@/components/TrainingCard";
import ProvidedTraining from "@/components/ProvidedTraining";
import { Style } from "@mui/icons-material";
import Location from "@/components/Location";
import OurTrainingPartner from "@/components/OurTrainingPartner";

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
    }, 5000);
  }, []);
  return (
    <>
      <Header
        title={"Our Skill Development Program"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />{" "}
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
          <StyledBox
            title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
          >
            <AvatarCarousel images={images} />
          </StyledBox>
          <StyledBox>
            <CardView />
          </StyledBox>
          <StyledBox title={"Training Program"}>
            <TrainingProgram />
          </StyledBox>
          <StyledBox bgcolor={"#FEEFE4"} title={"Our Training Partner"}>
            <OurTrainingPartner />
          </StyledBox>
          <StyledBox title={"Gig Worker Empowerment"}>
            {" "}
            <PromiseCardView viewMoreData={viewMoreData} />
          </StyledBox>
          <StyledBox title={"Training we are providing"}>
            {" "}
            <ProvidedTraining />
          </StyledBox>{" "}
          <StyledBox title={"Our Major Locations"}>
            <Location />
          </StyledBox>
          <FreqenlyAskedQuestion showStillHaveQuestions={false} />
        </>
      )}
    </>
  );
}

export default page;
