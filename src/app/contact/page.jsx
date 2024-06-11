"use client"
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import bgImage from "/public/assets/contact/img/2.png";
import ContactUs from "@/components/ContactUs";
import StyledLoader from "@/components/StyledLoader";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
     
      <Header title={"Contact Us"}top={15} bgImg={bgImage.src}  mobile={"280px"}height={"400px"}/>
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
      <ContactUs />
    </>
     )}
    </>
  );
}

export default page;
