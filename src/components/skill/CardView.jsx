import { Grid } from "@mui/material";
import React from "react";
import Data from "../../assets/json/CdcData";
import CdcCard from "./CdcCard";
const CardView = () => {
  return (
    <Grid container spacing={2}>
      {Data.map((item, index) => (
        <Grid key={index} item xs={6} md={3}>
          <CdcCard title={item.title} icon={item.icon} description={item.des} number={item.number} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardView;
