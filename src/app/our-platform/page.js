import Header from "@/components/Header";
import bgImage from "/public/platform/home.webp";
import StyledBox from "@/components/StyledBox";
import PlatformMain from "@/components/platform/PlatformMain";
import Statistics from "@/components/home/Statistics";
import PlatformCardView from "@/components/platform/PlatformCardView";
import Achievements from "@/components/home/Achievements";
import MobilePage from "@/components/platform/MobilePage";
import ServicePlatform from "@/components/platform/ServicePlatform";
export default function OurPlatform() {
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
      <Header title={"Explore Our Platform"} bgImg={bgImage.src} isApp />
      <StyledBox>
        <PlatformMain />
      </StyledBox>{" "}
      <StyledBox>
          <Statistics />
        </StyledBox>
        <StyledBox></StyledBox>
        <StyledBox
          padding={"0px"}
          title={"Deliver Customer Delight with power of Fixed + Gig workforce"}
        >
          <PlatformCardView />
        </StyledBox>
        <Achievements images={awards} />
          <StyledBox bgcolor={"#FEEFE4"}>
            <MobilePage />
          </StyledBox>
          <StyledBox>
            <ServicePlatform />
          </StyledBox>
          <StyledBox></StyledBox>
    </>
  );
}
