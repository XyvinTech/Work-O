"use client"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, { useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon.svg";


const StyledAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
     
      onChange={handleChange}
      sx={{ backgroundColor: "text.secondary",color:"white"}}
    >
      <AccordionSummary
        sx={{ backgroundColor: expanded ? "text.secondary" :"text.secondary" }}
        aria-controls="panel1-content"
        id="panel1-header"
        expandIcon={<PlusIcon/>}
      >
        <Typography variant="h5" >How Can I apply?</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography variant="h5"sx={{ lineHeight:2 }}>
        Lorem ipsum dolor sit amet consectetur. Nibh sagittis morbi suscipit gravida elementum et rhoncus posuere. In laoreet ornare arcu elementum in massa eu. Sapien dictum aliquet augue amet felis varius facilisi aliquam elementum. Consequat mauris lacus diam  acilisi aliquam elementum. Consequat mauris lacus diam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default StyledAccordion;
