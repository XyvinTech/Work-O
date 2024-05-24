import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/resources/img/header.png";
import Resources from "@/components/Resources";

function page() {
  return (
    <>
      <Header
        title={"Want to know more about us ?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
    
        <Resources />
     
    </>
  );
}

export default page;
