"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookNowCard from "@/ui/BookNowCard";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useRef } from "react";
const ButtonBox = styled(Box)`
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;
const BookNowCarousel = () => {
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
  
    const previous = () => {
      sliderRef.slickPrev();
    };
  var settings = {
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
      }
    
    ],
  };
  return (
    <div className="slider-container">
      <Slider  ref={(slider) => {
          sliderRef = slider;
        }} {...settings}>
        <div>
          <BookNowCard
            imageSrc="/OurService/BeautyService3.png"
            title="Spa Services at your Door"
            description="Beauty Services"
            buttonColor="#3B3B3B"
            backgroundColor="white" 
          />
        </div>
        <div>
        <BookNowCard
            imageSrc="/OurService/TechnicalService2.png"
            title="Safe your home with CCTV"
            description="Technical Services"
            buttonColor="white"
            backgroundColor="#3B3B3B"
            textColor="white"
          />
        </div>
        <div>
        <BookNowCard
            imageSrc="/OurService/TechnicalService3.png"
            title="Discover our skill program"
            description="Skill Development Program"
            buttonColor="#FC8229"
            backgroundColor="#FBF8F2" 
          />
        </div>
        <div>
        <BookNowCard
            imageSrc="/OurService/AcImage3.png"
            title="Save upto 3000₹ on electricity bills"
            description="AC Servicing"
            buttonColor="#FC8229"
            backgroundColor="#FBF8F2" 
          />
        </div>
        <div>
        <BookNowCard
            imageSrc="/OurService/BeautyService1.png"
            title="Elevate your wedding Glow!"
            description="Beauty Services"
            buttonColor="#3B3B3B"
            backgroundColor="white" 
          />
        </div>
        <div>
        <BookNowCard
            imageSrc="/OurService/HomeService2.png"
            title="Get experts in 2 Hours"
            description="Home Appliances Services"
            buttonColor="white"
            backgroundColor="#3B3B3B"
            textColor="white"
          />
        </div>
      </Slider>
      <ButtonBox
        sx={{
          position: "absolute",
       
          right: "40px",
          display: "flex",
          gap: "10px",
        }}
      >
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
    </div>
  );
};

export default BookNowCarousel;
