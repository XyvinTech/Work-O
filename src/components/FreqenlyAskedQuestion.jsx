import React from "react";
import StyledAccordion from "./StyledAccordion";
import accordionData from "../assets/json/FrequentlyAsked";
import { Box, Button, Typography } from "@mui/material";

const FreqenlyAskedQuestion = () => {
  return (
    <Box padding={"10px"} paddingTop={"60px"} marginBottom={"10px"}>
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
    </Box>
  );
};

export default FreqenlyAskedQuestion;
