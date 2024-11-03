import HomeHeader from "@/components/home/HomeHeader";

import bgImage from "/public/Services/Main.webp";
import StyledBox from "@/components/StyledBox";
import Service from "@/components/services/Service";
import Service2 from "@/components/services/Service2";
import viewMoreData from "../../assets/json/WorkData";
import GetApp from "@/ui/home/GetApp";
import FreqenlyAskedQuestion from "@/components/FrequentlyAskedQuestions";
import PromiseCardView from "@/components/home/PromiseCardView";
import ConnectUs from "@/components/services/ConnectUs";
export default function Services() {
  const service1 = [
    {
      title: "AC Repair",
      sub: "Swift and reliable AC repair services to restore comfort to your space.",
      //   icon: <AC />,
    },
    {
      title: "AC Installation",
      sub: "Professional AC installation services customized to your requirements.",
      //   icon: <Installation />,
    },
    {
      title: "AC Maintenance",
      sub: "Keep your AC running smoothly with our maintenance services.",
      //   icon: <Maintance />,
    },
  ];
  const service2 = [
    {
      title: "Appliances Repair ",
      sub: "Fast fixes for all your appliance issues and troubles.",
      //   icon: <Repair />,
    },
    {
      title: "Refrigerators Repair",
      sub: "Trust our experts to diagnose and repair refrigerator problems.",
      //   icon: <Refridgerator />,
    },
    {
      title: "Washing Machines",
      sub: "Keep your laundry running smoothly with our help.",
      //   icon: <WashingMachine />,
    },
    {
      title: "Maintenance",
      sub: "Our maintenance services ensure your appliances run smoothly",
      //   icon: <Maintance />,
    },
  ];

  const service3 = [
    {
      title: "Hair Services",
      sub: "Elevate your style with our expert hair care. ",
      //   icon: <Hair />,
    },
    {
      title: "Makeup Services",
      sub: "Enhance your beauty with our professional makeup artistry.",
      //   icon: <Makeup />,
    },
    {
      title: "Spa Services",
      sub: "Relax and rejuvenate with our luxurious spa treatments. ",
      //   icon: <Spa />,
    },
  ];

  const service4 = [
    {
      title: "Networking",
      sub: "Our networking solutions optimize performance and reliability.",
      //   icon: <Networking />,
    },
    {
      title: "Installation",
      sub: "Our technicians ensure a smooth installation of your equipment",
      //   icon: <Installation />,
    },
    {
      title: "CCTV Installation",
      sub: "Enhance your security with our professional CCTV setup.",
      //   icon: <CCTV />,
    },
    {
      title: "CCTV Maintenance",
      sub: "Keep your surveillance system running smoothly with our help.",
      //   icon: <Laptop />,
    },
  ];
  return (
    <>
      <HomeHeader
        title={"How our services help the community?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isService
        mobile={"1020px"}
        bgImg={bgImage.src}
      />
      <StyledBox>
        <Service
          title={"AC Services"}
          decription={
            "We offer complete AC solutions, including maintenance, installation, and repair for both residential and commercial systems, ensuring optimal performance with skilled and certified technicians."
          }
          gridComponent={service1}
          img={"/images/Service1.png"}
        />
      </StyledBox>
      <StyledBox>
        {" "}
        <Service2
          title={"Home Appliance Services"}
          description={
            "Comprehensive Appliance Repair: We offer repair services for refrigerators, washing machines, ovens, cooktops, and all other major home appliances to restore their optimal functioning."
          }
          gridComponent={service2}
          img={"/Services/Service2.png"}
        />
      </StyledBox>
      <StyledBox>
        <Service
          title={"Beauty and Salon Services"}
          decription={
            "We offer a range of beauty and salon services, including haircuts, coloring, styling, hair treatments, makeup (bridal, party, and lessons), massages, facials, waxing, and body treatments"
          }
          gridComponent={service3}
          img={"/images/Beautyservice.png"}
        />
      </StyledBox>
      <StyledBox>
        <Service2
          title={"Technical Services"}
          description={
            "We provide technical services including networking installation, maintenance, and troubleshooting, as well as CCTV installation, maintenance, and monitoring."
          }
          gridComponent={service4}
          img={"/Services/Service4.png"}
        />
      </StyledBox>
      <StyledBox title={"How we works"}>
        <PromiseCardView viewMoreData={viewMoreData} />
      </StyledBox>

      <GetApp />

      <ConnectUs />
      <FreqenlyAskedQuestion />
    </>
  );
}
