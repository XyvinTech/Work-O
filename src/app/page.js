import AvatarCarousal from "@/components/home/AvatarCarousal";
import BookNowCarousal from "@/components/home/BookNowCarousal";
import CarousalOne from "@/components/home/CarousalOne";
import HomeHeader from "@/components/home/HomeHeader";
import Location from "@/components/home/Location";
import OurStory from "@/components/home/Ourstory";
import Statistics from "@/components/home/Statistics";
import StyledTab from "@/components/home/StyledTab";
import StyledBox from "@/components/StyledBox";
import { Box } from "@mui/material";
import viewMoreData from "../assets/json/PromiseCardData";
import PromiseCardView from "@/components/home/PromiseCardView";
import GetApp from "@/ui/home/GetApp";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import Achievements from "@/components/home/Achievements";
import FreqenlyAskedQuestion from "@/components/FrequentlyAskedQuestions";

export default function Home() {
  const images1 = [
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
  ];
  const images2 = [
    "/Home/Carousal/14.webp",
    "/Home/Carousal/15.webp",
    "/Home/Carousal/16.webp",
    "/Home/Carousal/17.webp",
    "/Home/Carousal/18.webp",
    "/Home/Carousal/19.webp",
    "/Home/Carousal/20.webp",
    "/Home/Carousal/21.webp",
    "/Home/Carousal/22.webp",
    "/Home/Carousal/23.webp",
    "/Home/Carousal/24.webp",
    "/Home/Carousal/25.webp",
    "/Home/Carousal/26.webp",
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
    "/Home/Remaining/Client9.png",
    "/Home/Remaining/Client10.png",
  ];
  return (
    <>
      <HomeHeader
        title={
          "India's 1st Full-Stack B2B and B2C Service Marketplace for Gig Workers"
        }
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        isHome
        mobile={"1020px"}
      />{" "}
      <CarousalOne images1={images1} images2={images2} />
      <StyledBox>
        <Statistics />
      </StyledBox>
      <StyledBox title={"Our Service"} padding={"10px"}>
        <StyledTab />
      </StyledBox>
      <StyledBox title={"Our Major Locations"}>
        <Location />
      </StyledBox>
      <Box bgcolor={"#F2F2F2"} padding={"5px"}>
        <BookNowCarousal />
      </Box>
      <StyledBox>
        <OurStory />
      </StyledBox>
      <StyledBox
        title={"Upgrading 20,000+ Lives Through Skill-Development Program"}
      >
        <AvatarCarousal images={images1} />
      </StyledBox>
      <StyledBox title={"Who is this for?"}>
        <PromiseCardView viewMoreData={viewMoreData} />
      </StyledBox>
      <GetApp />
      <StyledBox title={"Testimonials"}>
        <ReviewCarousel />
      </StyledBox>
      <Achievements images={awards} />
      <FreqenlyAskedQuestion showStillHaveQuestions={false} />
    </>
  );
}
