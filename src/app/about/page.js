import Header from "@/components/Header";
import bgImage from "/public/AboutUs/Header.webp";
import StyledBox from "@/components/StyledBox";
import AboutMain from "@/components/about/AboutMain";
import VisionCardView from "@/components/about/VisionCardView";
import VisionData from "@/assets/json/VisionData";
import PromiseCardView from "@/components/home/PromiseCardView";
import HowWeDifferData from "@/assets/json/HowWeDifferData";
import AvatarCarousal from "@/components/home/AvatarCarousal";
import CertificationData from "@/assets/json/CertificationData";
import Achievements from "@/components/home/Achievements";
import FreqenlyAskedQuestion from "@/components/FrequentlyAskedQuestions";
import TeamCarousal from "@/components/about/TeamCarousal";
import Gallery from "@/components/about/Gallery";

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
  return (
    <>
      {" "}
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
      <StyledBox title={"Leadership"}>
        <TeamCarousal />
      </StyledBox>
      <StyledBox title={"Gallery"}><Gallery /></StyledBox>
      <StyledBox title={"How We Differ?"}>
        <PromiseCardView viewMoreData={HowWeDifferData} />
      </StyledBox>
      <StyledBox
        title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
      >
        <AvatarCarousal images={images} />
      </StyledBox>
      <StyledBox title={"Certifications"}>
        <VisionCardView viewMoreData={CertificationData} />
      </StyledBox>
      <Achievements images={awards} />
      <FreqenlyAskedQuestion />
    </>
  );
}
