import React from "react";
import {  Typography } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from "../assets/icons/ArrowIcon.svg"
const StyledCard = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  gap: 21px;
  margin: auto;
  box-shadow: none;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0;
`;

const StyledCardMedia = styled.div`
  height: 240px;
  padding-bottom: 56.25%;
  background-color: rgba(0, 0, 0, 0.08);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
  transition: transform 0.3s ease; /* Added transition for smooth hover effect */
  
  &:hover {
    transform: scale(1.05); /* Zoom effect on hover */
  }
`;



const StyledCardContent = styled.div`
  color: black;
`;

const DateTypography = styled(Typography)`
  color: #fc8229;
  text-align: justify;
  font-weight: 600;
  margin-top: 15px;
`;

const TitleTypography = styled(Typography)`
  text-align: justify;
  margin-top: 15px;
`;

const DescriptionTypography = styled(Typography)`
  margin-top: 15px;
  margin-bottom: 15px;
`;
const ViewMoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover .view-more-icon {
    visibility: visible;
    margin-left: 8px;
  }
`;

const ViewMoreTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  visibility: hidden;
  transition: margin-left 0.3s ease;
`;

const ViewMoreCard = ({ image, title, description, date }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={image} />
      <StyledCardContent>
        <DateTypography variant="h7">{date}</DateTypography>
        <TitleTypography variant="card" component="div">
          {title}
        </TitleTypography>
        <DescriptionTypography variant="h6">
          {description}
        </DescriptionTypography>
        <ViewMoreContainer>
          <Typography variant="h7" sx={{ color: "primary.main" }}>
            View more
          </Typography>
          <StyledArrowForwardIcon className="view-more-icon" />
        </ViewMoreContainer>
       
      </StyledCardContent>
    </StyledCard>
  );
};

export default ViewMoreCard;
