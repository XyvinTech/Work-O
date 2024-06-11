"use client"
import Header from "@/components/Header";
import bgImage from "/public/assets/contact/img/2.png";
import ContactUs from "@/components/ContactUs";
import StyledLoader from "@/components/StyledLoader";
import { useEffect, useState } from "react";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
  
      <Header title={"Enroll Now"} top={15}bgImg={bgImage.src}  mobile={"280px"}height={"400px"}/>
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
      <ContactUs enroll />
    </>
     )}
     </>
  );
}

export default page;
