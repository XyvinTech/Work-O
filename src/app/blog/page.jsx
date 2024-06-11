"use client"
import Header from "@/components/Header";
import bgImage from "/public/Blog/Main.webp";
import BlogData from "@/components/BlogData";
import StyledBox from "@/components/StyledBox";
import { useEffect, useState } from "react";
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
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
      <Header
        title={"Get Inspired: Check Out Our Blog!"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
      <StyledBox> <BlogData/></StyledBox>
     
    </>
     )}
     </>
  );
}

export default page;
