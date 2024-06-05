import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/get-the-app/img/header.png";
import GetApp from "@/components/GetApp";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/Statistics";
import { Style } from "@mui/icons-material";

function page() {
  return (
    <>
      <Header title={"Download our Worko App"} bgImg={bgImage.src} />
      <GetApp />
      <StyledBox>
        <Statistics />
      </StyledBox>
      <StyledBox></StyledBox>
    </>
  );
}

export default page;
