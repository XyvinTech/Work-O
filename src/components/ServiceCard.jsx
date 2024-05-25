import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 559px;
  box-shadow: none;
  border-radius: 0;
  &:hover {
    box-shadow: none;
    background-color: inherit;
  }
  @media (max-width: 600px) {
    width: 170px;
    height: 302px;

  }
`;

const CardActionArea = styled.div`
  cursor: pointer;
`;

const CardMediaWrapper = styled.div`
  width: 100%;
  height: 395px;
  overflow: hidden; /* Ensure the image doesn't overflow its container */
  @media (max-width: 600px) {
    width: 140px;
    height: 190px;
  }
`;

const CardMedia = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 16px;
 
`;



const ServiceCard = ({ title, image, description }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMediaWrapper>
        <CardMedia src={image} alt="Service Image"  /></CardMediaWrapper>
        <CardContent>
          <Typography
            gutterBottom
            variant="card"
            component="div"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "14px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              // textAlign: "justify",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
