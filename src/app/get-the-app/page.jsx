"use client";
import Header from "@/components/Header";
import bgImage from "/public/assets/get-the-app/img/header.png";
import GetApp from "@/ui/home/GetApp";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/home/Statistics";

function page() {
  return (
    <>
      <Header title={"Download our Worko App"} bgImg={bgImage.src} />

      <>
        <GetApp />
        <StyledBox>
          <Statistics />
        </StyledBox>
        <StyledBox></StyledBox>
      </>
    </>
  );
}

export default page;
