"use client";
import Header from "@/components/Header";
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
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
          <Header
            title={"Where can you find Worko locations?"}
            subtitle={
              "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
            }
            isButtons
          />
        </>
      )}
    </>
  );
}

export default page;
