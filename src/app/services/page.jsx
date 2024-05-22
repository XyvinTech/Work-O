import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/services/img/header.png";
import AcService from "@/components/AcService";
import HomeApplianceService from "@/components/HomeApplianceService";
import BeautyService from "@/components/BeautyService";
import TechnicalService from "@/components/TechnicalService";
import StyledBox from "@/components/StyledBox";
import PromiseCardView from "@/components/PromiseCardView";
import GetApp from "@/components/GetApp";
import viewMoreData from "../../assets/json/WorkData";
import FreqenlyAskedQuestion from "@/components/FreqenlyAskedQuestion";
import ConnectUs from "@/components/ConnectUs";

function page() {
  return (
    <>
      <Header
        title={"How our services help the community?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
      <AcService />
      <HomeApplianceService />
      <BeautyService />
      <TechnicalService />
      <StyledBox title={"How we works"}>
        <PromiseCardView viewMoreData={viewMoreData}/>
      </StyledBox>
      <StyledBox>
        <GetApp />
      </StyledBox>
      <ConnectUs/>
      <FreqenlyAskedQuestion/>
    </>
  );
}

export default page;
