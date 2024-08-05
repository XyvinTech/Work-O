"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import MinusIcon from "../assets/icons/Minus.svg";
const StyledAccordion = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Typography variant={isMobile ? "h7" : "h5"} fontWeight={"600"}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{paddingLeft:'30px'}}>
        <Typography
          variant={isMobile ? "h9" : "h5"}
          sx={{ lineHeight: 2 }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default StyledAccordion;
