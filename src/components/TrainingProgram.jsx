"use client";
import viewMoreData from "../assets/json/TrainingProgramData";
import { Box } from "@mui/material";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";


const ViewMoreContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const TrainingProgram = () => {
  return (
    <ViewMoreContainer>
      {viewMoreData.map((item, index) => (
        <ServiceCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          
        />
      ))}
    </ViewMoreContainer>
  );
};

export default TrainingProgram;
