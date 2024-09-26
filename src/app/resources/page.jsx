"use client";
import Header from "@/components/Header";
import bgImage from "/public/others/Resource.webp";
import Resources from "@/components/Resources";
import { useEffect, useState } from "react";
import StyledLoader from "@/components/StyledLoader";

function page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
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
    
        <>
          <Resources />
        </>
      
    </>
  );
}

export default page;
