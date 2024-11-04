import Header from "@/components/Header";
import bgImage from "/public/SkillDevelopment/Main.webp";
import StyledBox from "@/components/StyledBox";
import AvatarCarousal from "@/components/home/AvatarCarousal";
import PromiseCardView from "@/components/home/PromiseCardView";
import EmpowermentData from "@/assets/json/EmpowermentData";
import Location from "@/components/home/Location";
import FreqenlyAskedQuestion from "@/components/FrequentlyAskedQuestions";
import ProvidedTraining from "@/components/skill/ProvidedTraining";
import OurTrainingPartner from "@/components/skill/OurTrainingPartner";
import TrainingProgram from "@/components/skill/TrainingProgram";
import CardView from "@/components/skill/CardView";
export default function page() {
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
      {" "}
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
        <AvatarCarousal images={images} />
      </StyledBox>
      <StyledBox><CardView /></StyledBox>
      <StyledBox title={"Training Program"}>
        <TrainingProgram />
      </StyledBox>
      <StyledBox bgcolor={"#FEEFE4"} title={"Our Training Partner"}>
        <OurTrainingPartner />
      </StyledBox>
      <StyledBox title={"Gig Worker Empowerment"}>
        {" "}
        <PromiseCardView viewMoreData={EmpowermentData} />
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
  );
}
