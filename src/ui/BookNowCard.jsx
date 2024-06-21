"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { mont } from "@/theme";
import Link from "next/link";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 220px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    height: 220px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  @media (max-width: 768px) {
    width: 50%;
  };
  
  @media (max-width: 600px) {
    width: 50%;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 55%;
  height: 100%;
  @media (max-width: 600px) {
    width: 50%;
    height: 220px;
  }
  ,
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const DescriptionTypography = styled(Typography)`
  margin-top: 16px;
  font-family: ${mont.style.fontFamily};
  font-weight: 500;
  font-size: 15px;
  color: #a0a0a0;
  padding-bottom: 2px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 50px; /* Adjust as necessary to ensure consistent height */
  @media (max-width: 600px) {
    height: auto;
    align-items: flex-start;
  }
`;

const BookNowCard = ({
  imageSrc,
  title,
  description,
  buttonColor,
  backgroundColor,
  textColor,
  borderColor,
  button,
  link,
}) => {
  return (
    <CardContainer>
      <Content backgroundColor={backgroundColor}>
        <div>
          <Typography variant="h4" sx={{ color: textColor }}>
            {title}
          </Typography>
          <DescriptionTypography variant="body1">
            {description}
          </DescriptionTypography>
        </div>
        <ButtonContainer>
          <Link href={link} passHref style={{ textDecoration: "none" }}>
            <Button
              variant={buttonColor}
              color={borderColor}
              sx={{
                fontWeight: "700",
                width: "180px",
                fontSize: "16px",
                padding: "10px 20px",
                "@media (max-width: 768px)": {
                  width: "150px",
                  fontSize: "6px",
                },
                "@media (max-width: 600px)": {
                  width: "150px"
                },
              }}
            >
              <Typography fontFamily={mont.style.fontFamily}>
                {button}
              </Typography>
            </Button>
          </Link>
        </ButtonContainer>
      </Content>
      <ImageContainer>
        <StyledImage src={imageSrc} alt={title} layout="fill" />
      </ImageContainer>
    </CardContainer>
  );
};

export default BookNowCard;
