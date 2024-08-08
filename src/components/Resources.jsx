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
  { tabName: "All FAQ's", accordions: allData },
  { tabName: "For Customers", accordions: generalData },
  { tabName: "For Service Providers (Partners)", accordions: serviceData },
  { tabName: "For Businesses", accordions: skillData },
];

const Container = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImageFooter.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  // padding: "80px",
  "@media (max-width:600px)": {
    padding: "20px",
  },
  "@media (max-width:768px)": {
    padding: "20px",
  },
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
    backgroundColor: "rgba(0, 0, 0, 0.95)",
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

  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  gap: 30px;
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
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  background-color: ${({ active }) => (active ? "#FC8229" : "transparent")};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;

  &:hover {
    background-color: #fc8229;
  }
`;
const Divider = styled.div`
  width: 1px;
  background-color: white;
  height: 140vh;
  opacity: 0.5;

  @media (max-width: 768px) {
    display: none;
  }
`;
const TabContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 4px;
    padding-top: 20px;
  }
`;

const MobileContainer = styled.div`
  width: 100%;
  padding: 0 20px;
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
        <>
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
          <Divider />
        </>
      )}
      {isMobile && (
        <MobileContainer>
          <StyledSelectField
            placeholder="Select a tab"
            options={options}
            color={"#FC8229"}
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
