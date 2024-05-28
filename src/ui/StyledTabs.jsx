"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mont } from "@/theme";
import ServiceCard from "@/components/ServiceCard";
import { Box, Skeleton } from "@mui/material";
import serviceDetails from "../assets/json/serviceDetails";

const TabsContainer = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
    padding-bottom: 50px;
  }
`;

const TabHeader = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TabButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 36px 26px;
  width: 324px;
  font-family: ${mont.style.fontFamily};
  font-weight: 600;
  font-size: 16px;
  height: 59px;
  align-items: center;
  text-align: center;
  background-color: white;
  border: 1px solid #e3dccd;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &.active {
    border: 0px;
    border-bottom: 3px solid orange;
    background-color: #ffe7d5;
  }

  @media (max-width: 600px) {
    height: 34px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 2px 2px;
    font-weight: 400;
    font-size: 12px;
    flex-basis: calc(50% - 10px);
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: white;
  border-top: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  opacity: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: dense;
    padding: 0px;
    gap: 10px;

    & > :nth-child(3) {
      margin-top: 50px;
      grid-column: 1 / -1;
    }
  }
`;

const StyledTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [renderKey, setRenderKey] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const tabs = serviceDetails.map((detail) => detail.tabName);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
    setRenderKey((prevKey) => prevKey + 1);
    setIsPreviousClicked(false);
  };

  const handlePrevious = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    setRenderKey((prevKey) => prevKey + 1);
    setIsPreviousClicked(true);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setRenderKey((prevKey) => prevKey + 1); // Increment key to re-trigger animation
  };

  return (
    <TabsContainer>
      <TabHeader>
        {loading
          ? tabs.map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={324}
                height={59}
                style={{ borderRadius: 4 }}
              />
            ))
          : tabs.map((tab, index) => (
              <TabButton
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </TabButton>
            ))}
      </TabHeader>
      <TabContent key={renderKey}>
        {loading
          ? tabs.map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={210}
                height={118}
              />
            ))
          : serviceDetails[activeTab].services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
      </TabContent>
      <Box
        sx={{
          position: "absolute",
          right: "40px",
          display: "flex",
          gap: "10px",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <img
          src={
            isPreviousClicked ? "/images/Button2.png" : "/images/Button1.png"
          }
          style={{ width: "48px", height: "48px" }}
          onClick={handlePrevious}
          alt="Previous"
        />
        <img
          src={isPreviousClicked ? "/images/Button3.png" : "/images/Button.png"}
          style={{ width: "48px", height: "48px" }}
          onClick={handleNext}
          alt="Next"
        />
      </Box>
    </TabsContainer>
  );
};

export default StyledTabs;
