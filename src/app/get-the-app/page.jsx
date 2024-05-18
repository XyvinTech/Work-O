import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/get-the-app/img/header.png";

function page() {
  return (
    <>
      <Header title={"Download our Worko App"} bgImg={bgImage.src} />
    </>
  );
}

export default page;
