import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/about/img/header.png";

function page() {
  return (
    <>
      <Header
        title={"India's 1st Full-Stack B2B and B2C Service Marketplace for Gig Workers"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        isHome
      />
    </>
  );
}

export default page;
