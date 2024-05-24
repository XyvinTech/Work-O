"use client"
import StyledAccordion from "./StyledAccordion";
import accordionData from "../assets/json/FrequentlyAsked";
import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import bgImageFooter from "/public/assets/home/img/footer.png";
import StyledBox from "./StyledBox";
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
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: 1,
    },
    "& > *": {
      zIndex: 2,
    },
  }));
const FreqenlyAskedQuestion = () => {
  return (
    <Container>
    <Box padding={"10px"} paddingTop={"60px"} marginBottom={"10px"}>
      <StyledBox>
      <Typography variant="h2" textAlign={"center"} marginBottom={"10px"}>
        {" "}
        Frequently Asked Questions
      </Typography>
      {accordionData.map((item) => (
        <Box key={item.id}  padding={"10px"}>
          <StyledAccordion question={item.question} answer={item.answer} />
        </Box>
      ))}
      <Box display="flex" flexDirection="column" alignItems="center" gap={"10px"}>
        <Typography variant="h7" fontWeight={"500"}>Still have Questions?</Typography>
        <Typography variant="h9">Contact us for further assistance</Typography>
        <Button variant="contained" color="primary"> Contact Us</Button>
      </Box>
      </StyledBox>
    </Box>
    </Container>
  );
};

export default FreqenlyAskedQuestion;
