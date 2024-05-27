"use client";
import viewMoreData from "../assets/json/LocationData";
import { Box } from "@mui/material";
import styled from "styled-components";
import LocationCard from "./LocationCard";
import { useEffect, useState } from "react";
import StyledSkeleton from "./StyledSkeleton";

const ViewMoreContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Location = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ViewMoreContainer>
     {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <StyledSkeleton key={index} height="200px" />
          ))
        : viewMoreData.map((item, index) => (
        <LocationCard key={index} image={item.image} title={item.title} />
      ))}
    </ViewMoreContainer>
  );
};

export default Location;
