"use client";
import StyledAccordion from "./StyledAccordion";
import accordionData from "../assets/json/FrequentlyAsked";
import styled from "styled-components";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import bgImageFooter from "/public/assets/home/img/footer.png";
import { useRouter } from "next/navigation";
import { mont } from "@/theme";
import generalData from "../assets/json/FrequentlyAsked";
import serviceData from "../assets/json/ServiceSpecificData";
import skillData from "../assets/json/SkillDevelopment";
import allData from "../assets/json/AllFaq";
import { useState } from "react";
const tabData = [
  { tabName: "All FAQ's", accordions: allData },
  { tabName: "For Customers", accordions: generalData },
  { tabName: "For Service Providers (Partners)", accordions: serviceData },
  { tabName: "For Businesses", accordions: skillData },
];
const Container = styled(Box)(() => ({
  backgroundImage: `url(${bgImageFooter.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
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
}));
const TabSidebar = styled.div`
  padding: 40px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 20px;
    gap: 10px; 
    justify-content: center; 
  }
`;

const TabButton = styled.button`
  padding: 10px;
  height: 50px;
  font-family: ${mont.style.fontFamily};
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  background-color: ${({ active }) => (active ? "#FC8229" : "#383838")};
  cursor: pointer;
  border: none;
  border-radius: 16px;
  color: white;

  &:hover {
    background-color: #fc8229;
  }
  @media (max-width: 600px) {
    flex-basis: calc(50% - 5px);
    height: 50px;
    font-size: 12px;
  }
`;
const TabContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FreqenlyAskedQuestion = ({ showStillHaveQuestions = true }) => {
  const [activeTab, setActiveTab] = useState(0);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const router = useRouter();
  return (
    <Container>
      <Box
        paddingTop={"60px"}
        paddingLeft={isMobile ? "0" : "40px"}
        paddingRight={isMobile ? "0" : "40px"}
        marginBottom={"10px"}
      >
        <Typography variant="h2" textAlign={"center"} marginBottom={"20px"}>
          {" "}
          Frequently Asked Questions
        </Typography>
        <Container>
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
          </>

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
        {showStillHaveQuestions && (
          <Box
            display="flex"
            flexDirection="column"
            paddingTop={5}
            alignItems="center"
            gap={"10px"}
          >
            <Stack
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              paddingBottom={2}
            >
              <Typography variant="h7" fontWeight={"500"}>
                Still have Questions?
              </Typography>
              <Typography variant="h9">
                Contact us for further assistance
              </Typography>
            </Stack>
            <Button
              variant="navbar"
              color="primary"
              fullWidth={isMobile}
              onClick={() => router.push("/contact")}
            >
              {" "}
              Contact Us
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default FreqenlyAskedQuestion;
