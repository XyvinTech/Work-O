import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/services/img/header.png";

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
    </>
  );
}

export default page;
