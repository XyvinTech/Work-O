"use client";
import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/services/img/header.png";
import StyledBox from "@/components/StyledBox";
import PromiseCardView from "@/components/PromiseCardView";
import GetApp from "@/components/GetApp";
import viewMoreData from "../../assets/json/WorkData";
import FreqenlyAskedQuestion from "@/components/FreqenlyAskedQuestion";
import ConnectUs from "@/components/ConnectUs";
import Service from "@/components/Service";
import Service2 from "@/components/Service2";
import Repair from "../../assets/icons/Repair.svg";
import Installation from "../../assets/icons/Installation.svg";
import Maintance from "../../assets/icons/Maintance.svg";
import Refridgerator from "../../assets/icons/Refrigerator.svg";
import WashingMachine from "../../assets/icons/washingmachine.svg";
import AC from "../../assets/icons/Ac.svg";
import Hair from "../../assets/icons/Hair.svg";
import Makeup from "../../assets/icons/Makeup.svg";
import Spa from "../../assets/icons/Spa.svg";
import Networking from "../../assets/icons/Networking.svg";
import CCTV from "../../assets/icons/cctv.svg";
import Laptop from "../../assets/icons/Laptop.svg";

const service1 = [
  {
    title: "AC Repair",
    sub: "Swift and reliable AC repair services to restore comfort to your space.",
    icon: <AC />,
  },
  {
    title: "AC Installation",
    sub: "Professional AC installation services customized to your requirements.",
    icon: <Installation />,
  },
  {
    title: "AC Maintenance",
    sub: "Keep your AC running smoothly with our maintenance services.",
    icon: <Maintance />,
  },
];

const service2 = [
  {
    title: "Appliances Repair ",
    sub: "Fast fixes for all your appliance issues and troubles.",
    icon: <Repair />,
  },
  {
    title: "Refrigerators Repair",
    sub: "Trust our experts to diagnose and repair refrigerator problems.",
    icon: <Refridgerator />,
  },
  {
    title: "Washing Machines",
    sub: "Keep your laundry running smoothly with our help.",
    icon: <WashingMachine />,
  },
  {
    title: "Maintenance",
    sub: "Our maintenance services ensure your appliances run smoothly",
    icon: <Maintance />,
  },
];

const service3 = [
  {
    title: "Hair Services",
    sub: "Elevate your style with our expert hair care. ",
    icon: <Hair />,
  },
  {
    title: "Makeup Services",
    sub: "Enhance your beauty with our professional makeup artistry.",
    icon: <Makeup />,
  },
  {
    title: "Spa Services",
    sub: "Relax and rejuvenate with our luxurious spa treatments. ",
    icon: <Spa />,
  },
];

const service4 = [
  {
    title: "Networking",
    sub: "Our networking solutions optimize performance and reliability.",
    icon: <Networking />,
  },
  {
    title: "Installation",
    sub: "Our technicians ensure a smooth installation of your equipment",
    icon: <Installation />,
  },
  {
    title: "CCTV Installation",
    sub: "Enhance your security with our professional CCTV setup.",
    icon: <CCTV />,
  },
  {
    title: "CCTV Maintenance",
    sub: "Keep your surveillance system running smoothly with our help.",
    icon: <Laptop />,
  },
];

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

      <StyledBox title={"Our Services"}>
        <Service
          title={"AC Services"}
          decription={
            "We offer complete AC solutions, including maintenance, installation, and repair for both residential and commercial systems, ensuring optimal performance with skilled and certified technicians."
          }
          gridComponent={service1}
          img={"/images/Service1.png"}
        /></StyledBox>
<StyledBox>        <Service2
          title={"Home Appliance Services"}
          description={
            "Comprehensive Appliance Repair: We offer repair services for refrigerators, washing machines, ovens, cooktops, and all other major home appliances to restore their optimal functioning."
          }
          gridComponent={service2}
          img={"/images/carpenter.png"}
        /></StyledBox><StyledBox>
        <Service
          title={"Beauty and Salon Services"}
          decription={
            "We offer a range of beauty and salon services, including haircuts, coloring, styling, hair treatments, makeup (bridal, party, and lessons), massages, facials, waxing, and body treatments"
          }
          gridComponent={service3}
          img={"/images/Beautyservice.png"}
        /></StyledBox><StyledBox>
        <Service2
          title={"Technical Services"}
          description={
            "We provide technical services including networking installation, maintenance, and troubleshooting, as well as CCTV installation, maintenance, and monitoring."
          }
          gridComponent={service4}
          img={"/images/delivery.png"}
        />
      </StyledBox>

      <StyledBox title={"How we works"}>
        <PromiseCardView viewMoreData={viewMoreData} />
      </StyledBox>
      <StyledBox>
        <GetApp />
      </StyledBox>
      <ConnectUs />
      <FreqenlyAskedQuestion />
    </>
  );
}

export default page;
