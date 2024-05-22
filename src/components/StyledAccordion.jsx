"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import MinusIcon from "../assets/icons/Minus.svg";
const StyledAccordion = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        backgroundColor: expanded ? "#383838" : "rgba(171, 171, 171, 0.06)",
        color: "white",
      }}
    >
      <AccordionSummary
        aria-controls="panel-content"
        id="panel-header"
        expandIcon={expanded ? <MinusIcon /> : <PlusIcon />}
      >
        <Typography variant="h5" fontWeight={"600"}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h5" sx={{ lineHeight: 2 }}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default StyledAccordion;
