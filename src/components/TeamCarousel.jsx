"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useRef } from "react";
import carouselData from "../assets/json/TeamData";
import TeamCard from "@/ui/TeamCard";


const ButtonBox = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: flex-end; 
  margin-top: 20px;
  padding-right: 40px;
  @media (max-width: 600px) {
    margin-top: 30px;
    padding-right:10px
  }
`;

const Container = styled(Box)`
  overflow: hidden;
  padding-top: 40px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 20px; 
  }
`;

const TeamCarousel = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <StyledSlider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {carouselData.map((item, index) => (
          <div key={index}>
            <TeamCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </StyledSlider>
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

export default TeamCarousel;
