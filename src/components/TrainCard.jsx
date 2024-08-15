import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const CardContainer = styled.div`
  width: 395px;
  height: auto;
  border-radius: 0px;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 352px;
  }
`;

const CardActionArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardMedia = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 600px) {
    height: 390px;
   
  }
  @media (max-width: 768px) {
    height: 210px;
  }
`;

const CardContent = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
              textAlign: "left",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
            color="text.secondary"
          >
            {description}
          </Typography>{" "}
          <Link
            href={"/enroll"}
            passHref
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                marginTop: "auto",
                textAlign: "match-parent",
                "@media (max-width: 600px)": {
                  fontSize: "12px",
                },
              }}
              color="#3B3B3B"
            >
              Enroll Now
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  );
};

export default TrainCard;
