
"use client";

import TeamCard from "@/ui/TeamCard";
import carouselData from "../assets/json/TeamData";
import { Box } from "@mui/material";
import styled from "styled-components";

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

const TeamCarousel = () => {
  return (
    <ViewMoreContainer>
      {carouselData.map((item, index) => (
         <TeamCard
         key={index}
         image={item.image}
         title={item.title}
         description={item.description}
         hoverDescription={
           "Lorem ipsum dolor sit amet consectetur. Ante tortor nibh vestibulum viverra lobortis pretium. Volutpat fermentum felis ut mollis id. Vel nec feugiat enim lacus turpis. Massa duis vehicula eget ut posuere ultrices. Integer tempor sed nascetur amet aliquet vulputate tempus. Volutpat fermentum bibendum consequat ultricies malesuada eget quam sed adipiscing. Dignissim rhoncus sit lacus dolor ullamcorper eu adipiscing sit justo. Et sed sed aliquam cum nunc urna accumsan"
         }
       />
      ))}
    </ViewMoreContainer>
  );
};

export default TeamCarousel;