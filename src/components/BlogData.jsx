"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useRef } from "react";
import carouselData from "../assets/json/Blogs";
import ViewMoreCard from "./ViewMoreCard";

const ButtonBox = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: flex-end; 
  margin-top: 20px;
  padding-right: 40px;

  @media (max-width: 600px) {
    margin-top: 30px;
    padding-right: 10px;
  }
`;

const Container = styled(Box)`
  overflow: hidden;
  
`;

const Slide = styled(Box)`
  padding: 10px 10px; // Adjust this value for more or less padding
`;
const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const IconContainer = styled(Box)`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;
const BlogData = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container className="slider-container">
      <HeaderContainer>
        <Typography variant="h4">All Blog Posts</Typography>
        <IconContainer>
        <img src="/Blog/Facebook.webp" style={{ width: "9px", height: "18px" }} alt="Icon 1" />3.7 M
        <img src="/Blog/Instagram.webp" style={{ width: "18px", height: "18px" }} alt="Icon 1" />2.4 M
          <img src="/Blog/Twitter.webp" style={{ width: "19px", height: "15px" }} alt="Icon 1" />3.7 M
          <img src="/Blog/Youtube.webp" style={{ width: "22px", height: "15px" }} alt="Icon 1" />2.4 M
        
        </IconContainer>
      </HeaderContainer>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {carouselData.map((item, index) => (
          <Slide key={index}>
            <ViewMoreCard
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBox>
        <img
          src="/images/Button1.png"
          style={{ width: "48px", height: "48px" }}
          onClick={previous}
          alt="Previous"
        />
        <img
          src="/images/Button.png"
          style={{ width: "48px", height: "48px" }}
          onClick={next}
          alt="Next"
        />
      </ButtonBox>
    </Container>
  );
};

export default BlogData;
