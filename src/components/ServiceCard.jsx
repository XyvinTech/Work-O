import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useServiceStore } from "@/Store/ServiceStore";
const Card = styled.div`
  width: 100%;
  height: 559px;
  box-shadow: none;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  flex-grow: 1;
`;

const CardMediaWrapper = styled.div`
  width: 100%;
  height: 395px;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 160px;
    height: 190px;
  }
  @media (max-width: 768px) {
    width: 160px;
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ activeTab }) => (activeTab === 0 ? "30%" : "38%")};
   @media (max-width: 768px) {
    height: ${({ activeTab }) => (activeTab === 0 ? "50%" : "60%")};
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const ServiceCard = ({ title, image, description, activeTab }) => {
  const setSelectedService = useServiceStore(
    (state) => state.setSelectedService
  );

  const handleBookNow = () => {
    setSelectedService(title);
  };
  return (
    <Card>
      <CardActionArea>
        <CardMediaWrapper>
          <CardMedia src={image} alt="Service Image" />
        </CardMediaWrapper>
        <CardContent activeTab={activeTab}>
          <ContentWrapper>
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
                textAlign: "match-parent",
                "@media (max-width: 600px)": {
                  fontSize: "12px",
                },
              }}
              color="text.secondary"
            >
              {description}
            </Typography>
          </ContentWrapper>
          <Link
            href={"/contact"}
            onClick={handleBookNow}
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
              Book Now
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
