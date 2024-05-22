import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/services/img/header.png";
import AcService from "@/components/AcService";
import HomeApplianceService from "@/components/HomeApplianceService";
import BeautyService from "@/components/BeautyService";
import TechnicalService from "@/components/TechnicalService";
import PromiseCardView from "@/components/PromiseCardView";
import GetApp from "@/components/GetApp";

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
      <AcService/><HomeApplianceService/><BeautyService/><TechnicalService/> 
      
      <GetApp/>
    </>
  );
}

export default page;
