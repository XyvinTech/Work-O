"use client";

import TeamCard from "@/ui/TeamCard";
import carouselData from "../assets/json/TeamData";
import { Box } from "@mui/material";
import styled from "styled-components";

const ViewMoreContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const TeamCarousel = () => {
  return (
    <ViewMoreContainer>
      {carouselData.map((item, index) => (
        <TeamCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          hoverDescription={item.hover}
        />
      ))}
    </ViewMoreContainer>
  );
};

export default TeamCarousel;
