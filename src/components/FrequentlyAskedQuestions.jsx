"use client";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import generalData from "../assets/json/FrequentlyAsked";
import serviceData from "../assets/json/ServiceSpecificData";
import skillData from "../assets/json/SkillDevelopment";
import allData from "../assets/json/AllFaq";
import { useState } from "react";
import styles from "../Styles/FrquentlyAskedQuestions.module.css";
import StyledAccordion from "@/ui/StyledAccordion";

const tabData = [
  { tabName: "All FAQ's", accordions: allData },
  { tabName: "For Customers", accordions: generalData },
  { tabName: "For Service Providers (Partners)", accordions: serviceData },
  { tabName: "For Businesses", accordions: skillData },
];

const FreqenlyAskedQuestion = ({ showStillHaveQuestions = true }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Box className={styles.container}>
      <Box
        paddingTop="60px"
        paddingLeft={isMobile ? "0" : "40px"}
        paddingRight={isMobile ? "0" : "40px"}
        marginBottom="10px"
      >
        <Typography variant="h2" textAlign="center" marginBottom="20px">
          Frequently Asked Questions
        </Typography>
        <Box className={styles.innerContainer}>
          <div className={styles.tabSidebar}>
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.activeTabButton : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {tabData[activeTab].accordions.map((accordion, index) => (
              <StyledAccordion
                key={index}
                question={accordion.question}
                answer={accordion.answer}
              />
            ))}
          </div>
        </Box>

        {showStillHaveQuestions && (
          <Box display="flex" flexDirection="column" paddingTop={5} alignItems="center" gap="10px">
            <Stack spacing={2} justifyContent="center" alignItems="center" paddingBottom={2}>
              <Typography variant="h7" fontWeight="500">
                Still have Questions?
              </Typography>
              <Typography variant="h9">Contact us for further assistance</Typography>
            </Stack>
            <Button
              variant="navbar"
              color="primary"
              fullWidth={isMobile}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FreqenlyAskedQuestion;
