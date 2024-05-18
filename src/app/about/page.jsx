import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/about/img/header.png";

function page() {
  return (
    <>
      <Header
        title={"Worko: What Makes Us Different?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
    </>
  );
}

export default page;
