import Header from "@/components/Header";
import React from "react";
import bgImage from "/public/assets/blog/img/header.png";
import BlogData from "@/components/BlogData";
import StyledBox from "@/components/StyledBox";

function page() {
  return (
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
  );
}

export default page;
