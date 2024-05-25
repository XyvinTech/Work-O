import React from "react";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";

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

const StyledButton = styled(Button)`
  padding: 0px;
  border: none;
  font-weight: 500;
  &:hover {
    border: none;
  }
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
        <StyledButton variant="outlined" color="primary"  >
          View more
        </StyledButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ViewMoreCard;
