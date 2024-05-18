import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/get-the-app/img/header.png";
import GetApp from "@/components/GetApp";

function page() {
  return (
    <>
      <Header title={"Download our Worko App"} bgImg={bgImage.src} />
      <GetApp />
    </>
  );
}

export default page;
