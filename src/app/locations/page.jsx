import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/locations/img/header.png";

function page() {
  return (
    <>
      <Header
        title={"Where can you find Worko locations?"}
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
