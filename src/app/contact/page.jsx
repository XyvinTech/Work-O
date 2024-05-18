import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/contact/img/header.png";

function page() {
  return (
    <>
      <Header
        title={"Contact Us"}
        bgImg={bgImage.src}
      />
    </>
  );
}

export default page;
