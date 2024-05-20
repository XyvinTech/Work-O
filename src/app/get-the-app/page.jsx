import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/get-the-app/img/header.png";
import GetApp from "@/components/GetApp";
import Achievements from "@/components/Achievements";

function page() {
  return (
    <>
      <Header title={"Download our Worko App"} bgImg={bgImage.src} />
      <GetApp />
      <Achievements />
    </>
  );
}

export default page;
