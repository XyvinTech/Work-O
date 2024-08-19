"use client"
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import bgImage from "/public/assets/contact/img/2.png";
import ContactUs from "@/components/ContactUs";
import StyledLoader from "@/components/StyledLoader";

function page() {

  return (
    <>
     
      <Header title={"Contact Us"}top={15} bgImg={bgImage.src}  mobile={"280px"}height={"400px"}/>
      
        <>
      <ContactUs />
    </>
    
    </>
  );
}

export default page;
