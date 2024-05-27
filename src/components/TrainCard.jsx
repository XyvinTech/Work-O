import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 559px;
  border-radius: 0px;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    height: 302px;
  }
`;

const CardActionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardMedia = styled.img`
  width: 100%;
  height: 395px;

  @media (max-width: 600px) {
    height: 190px;
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  text-align: justify;
  color: #333;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TrainCard = ({ title, image, description }) => {
  return (
    <CardContainer>
      <CardActionArea>
        <CardMedia src={image} alt={title} />
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
                textAlign: "justify",
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
    </CardContainer>
  );
};

export default TrainCard;
