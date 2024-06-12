import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FC8229" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" ,backgroundColor:"#FC8229"}}
        onClick={onClick}
      />
    );
  }
function Gallery() {
  const StyledSlider = styled(Slider)`
.slick-slide {
  padding: 0 20px; 

}

  }
`;
const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <StyledSlider {...settings}>
        <div style={{ width: 300, marginRight: 20 }}>
          <img
            src="/AboutUs/Gallery1.jpg"
            style={{ width: "100%", height: isMobile?"200px":"400px" }}
          />
        </div>
        <div style={{ width: 300, marginRight: 20 }}>
          <img
            src="/AboutUs/Gallery2.jpg"
            style={{ width: "100%", height: isMobile?"200px":"400px" }}
          />
        </div>
        <div style={{ width: 300, marginRight: 20 }}>
          <img
            src="/AboutUs/Gallery3.jpg"
            style={{ width: "100%", height: isMobile?"200px":"400px" }}
          />
        </div>
        <div style={{ width: 300 }}>
          <img
            src="/AboutUs/Gallery4.jpg"
            style={{ width: "100%", height: isMobile?"200px":"400px" }}
          />
        </div>
      </StyledSlider>
    </div>
  );
}

export default Gallery;
