"use client";
import viewMoreData from "../assets/json/LocationData";
import { Box } from "@mui/material";
import styled from "styled-components";
import LocationCard from "./LocationCard";

const ViewMoreContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap:25px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Location = () => {
  return (
    <ViewMoreContainer>
      {viewMoreData.map((item, index) => (
        <LocationCard key={index} image={item.image} title={item.title} />
      ))}
    </ViewMoreContainer>
  );
};

export default Location;
