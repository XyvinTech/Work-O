"use client";
import { useState } from "react";
import styled from "styled-components";
import { mont } from "@/theme";
import ServiceCard from "@/components/ServiceCard";
import { Box, Typography } from "@mui/material";
import serviceDetails from "../assets/json/serviceDetails";
const TabsContainer = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
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
  padding: 36px 26px 36px 26px;
  width: 324px;
  font-family: ${mont.style.fontFamily};
  font-weight: 500;
  font-size: 20px;
  height: 59px;
  text-align: center;
  background-color: white;
  border: 1px solid #e3dccd;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &.active {
    border: 0px;
    border-bottom: 2px solid orange;

    background-color: #ffe7d5;
  }

  @media (max-width: 600px) {
    height: 34px;
    padding: 2px 1px 1px 1px;
    font-weight: 400;
    text-align: top;
    font-size: 12px;
    flex-basis: calc(50% - 10px);
    align-items: flex-start;
  }
`;

const TabContent = styled.div`
  padding: 40px;
  background-color: white;
  border-top: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-flow: dense;
    padding:0px;
    gap:10px;
    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

const StyledTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = serviceDetails.map((detail) => detail.tabName);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const handlePrevious = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };
  return (
    <TabsContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>
        {serviceDetails[activeTab].services.map((service, index) => (
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
          src="/images/Button1.png"
          style={{ width: "48px", height: "48px" }}
          onClick={handlePrevious}
          alt="Previous"
        />
        <img
          src="/images/Button.png"
          style={{ width: "48px", height: "48px" }}
          onClick={handleNext}
          alt="Next"
        />
      </Box>
    </TabsContainer>
  );
};

export default StyledTabs;
