"use client";
import viewMoreData from "../../assets/json/TrainingProgramData";
import { Box, Grid } from "@mui/material";
import TrainCard from "./TrainCard";

const TrainingProgram = () => {
  return (
    <Grid container spacing={2}>
      {viewMoreData.map((item, index) => (
        <Grid key={index} item md={4} xs={12}display={'flex'}justifyContent={'center'}>
        <TrainCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          
        /></Grid>
      ))}
  </Grid>
  );
};

export default TrainingProgram;
