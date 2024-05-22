"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { mont } from "@/theme";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 445px;
  height: 202px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    flex-direction: row; /* Keep row direction */
    width: 100%; /* Ensure the card takes full width */
    height: auto; /* Allow height to adjust */
  }
`;


const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 156px;
  height: 100%;
  @media (max-width: 600px) {
    width: 50%; /* Use 50% width on mobile for equal split */
    height: auto; /* Allow height to adjust */
  }
`;

const DescriptionTypography = styled(Typography)`
  margin-top: 16px;
  font-family: ${mont.style.fontFamily};
  font-weight: 500;
  font-size: 17px;
  color: #a0a0a0;
`;

const BookNowCard = ({
  imageSrc,
  title,
  description,
  buttonColor,
  backgroundColor,
  textColor,
}) => {
  return (
    <CardContainer>
      <Content backgroundColor={backgroundColor}>
        <div>
          <Typography variant="card" sx={{ color: textColor }}>
            {title}
          </Typography>
          <DescriptionTypography variant="body1">
            {description}
          </DescriptionTypography>
        </div>
        <Button
          sx={{
            width: "130px",
            height: "43px",
            fontSize: "16px",
            backgroundColor: buttonColor,
          }}
        >
          <Typography fontFamily={mont.style.fontFamily}>Book Now</Typography>
        </Button>
      </Content>
      <ImageContainer>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </ImageContainer>
    </CardContainer>
  );
};

export default BookNowCard;
