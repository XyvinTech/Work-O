import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/contact/img/header.png";
import ContactUs from "@/components/ContactUs";

function page() {
  return (
    <>
      <Header title={"Contact Us"} bgImg={bgImage.src} height={"419px"}/>
      <ContactUs />
    </>
  );
}

export default page;
