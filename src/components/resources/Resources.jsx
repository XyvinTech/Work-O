"use client";
import React, { useState } from "react";
import generalData from "../../assets/json/FrequentlyAsked";
import serviceData from "../../assets/json/ServiceSpecificData";
import skillData from "../../assets/json/SkillDevelopment";
import allData from "../../assets/json/AllFaq";
import { Box, useMediaQuery } from "@mui/material";
import StyledSelectField from "@/ui/StyledSelect";
import { mont } from "@/Theme/Theme";
import StyledAccordion from "@/ui/StyledAccordion";

const tabData = [
  { tabName: "All FAQ's", accordions: allData },
  { tabName: "For Customers", accordions: generalData },
  { tabName: "For Service Providers (Partners)", accordions: serviceData },
  { tabName: "For Businesses", accordions: skillData },
];

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
    <Box
      sx={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        position: "relative",
        padding: { xs: "20px", md: "80px" },
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
      }}
    >
      {!isMobile && (
        <>
          <Box
            sx={{
              width: "317px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              height: "100vh",
            }}
          >
            {tabData.map((tab, index) => (
              <Box
                key={index}
                component="button"
                onClick={() => setActiveTab(index)}
                sx={{
                  padding: "10px",
                  width: "231px",
                  height: "56px",
                  fontFamily: mont.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "18px",
                  textAlign: "left",
                  backgroundColor:
                    activeTab === index ? "#FC8229" : "transparent",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#FC8229",
                  },
                }}
              >
                {tab.tabName}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "1px",
              backgroundColor: "white",
              height: "140vh",
              opacity: 0.5,
              display: { xs: "none", md: "block" },
            }}
          />
        </>
      )}
      {isMobile && (
        <Box sx={{ width: "100%", padding: "0 20px" }}>
          <StyledSelectField
            placeholder="Select a tab"
            options={options}
            color={"#FC8229"}
            onChange={handleSelectChange}
            value={options[activeTab]}
          />
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          padding: { xs: "4px", md: "40px" },
          paddingTop: { xs: "20px", md: "40px" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tabData[activeTab].accordions.map((accordion, index) => (
          <StyledAccordion
            key={index}
            question={accordion.question}
            answer={accordion.answer}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Resources;
