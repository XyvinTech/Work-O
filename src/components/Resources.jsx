"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { mont } from "@/theme";
import generalData from "../assets/json/FrequentlyAsked";
import serviceData from "../assets/json/ServiceSpecificData";
import skillData from "../assets/json/SkillDevelopment";
import allData from "../assets/json/AllFaq";
import StyledAccordion from "./StyledAccordion";
import bgImageFooter from "/public/assets/home/img/footer.png";
import { Box, useMediaQuery } from "@mui/material";
import StyledSelectField from "@/ui/StyledSelect";

const tabData = [
  { tabName: "General FAQ's", accordions: generalData },
  { tabName: "Service-specific", accordions: serviceData },
  { tabName: "Skill Development", accordions: skillData },
  { tabName: "All FAQ's", accordions: allData },
];

const Container = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImageFooter.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  paddingTop: "20px",
  color: "white",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TabSidebar = styled.div`
  width: 317px;
  background-color: #282828;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TabButton = styled.button`
  padding: 10px;
  width: 231px;
  height: 56px;
  font-family: ${mont.style.fontFamily};
  font-weight: 500;
  font-size: 20px;
  text-align: left;
  background-color: #3e3e3e;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;

  &:hover {
    color: #7a7a7a;
  }
`;

const TabContent = styled.div`
  flex: 1;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; // Add space between each accordion
`;

const MobileContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 200px;
`;

const Resources = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSelectChange = (selectedOption) => {
    setActiveTab(selectedOption.value);
  };

  const options = tabData.map((tab, index) => ({
    value: index,
    label: tab.tabName,
  }));

  return (
    <Container>
      {!isMobile && (
        <TabSidebar>
          {tabData.map((tab, index) => (
            <TabButton
              key={index}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.tabName}
            </TabButton>
          ))}
        </TabSidebar>
      )}
      {isMobile && (
        <MobileContainer>
          <StyledSelectField
            placeholder="Select a tab"
            options={options}
            onChange={handleSelectChange}
            value={options[activeTab]}
          />
        </MobileContainer>
      )}
      <TabContent>
        {tabData[activeTab].accordions.map((accordion, index) => (
          <StyledAccordion
            key={index}
            question={accordion.question}
            answer={accordion.answer}
          />
        ))}
      </TabContent>
    </Container>
  );
};

export default Resources;