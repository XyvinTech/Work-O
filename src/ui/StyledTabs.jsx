"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    width: "auto", // Set width to 'auto' to adjust based on content
    // minHeight: 40,
    borderRadius: 4,
    border: "1px solid #E3DCCD",
    padding: "3 ",
    margin: "0 8px",

    fontWeight: 500,
    fontSize: 18,
    color: "black",
    "&.Mui-selected": {
      color: "black",
      backgroundColor: "#FFE7D5",
      border: "none",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
      border: "1px solid red",
    },
  })
);

export default function CustomizedTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <AntTab label="AC Services" />
        <AntTab label="Home Appliance Services" />
        <AntTab label="Beauty and Salon Services" />
        <AntTab label=" Technical Services" />
      </Tabs>
      <Box />
    </Box>
  );
}
