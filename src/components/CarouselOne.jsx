"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function CarouselOne({ images }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    
  const mobileStyle = { width: "90px", height: "104px", objectFit: "cover", padding: "1px" };
  const desktopStyle = { width: "187px", height: "217px", objectFit: "cover", padding: "1px" };
  
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <div>
      <div className="slider-container" style={{ overflow: "hidden" }}>
        <Slider {...settings1}>
          {images.map((image, index) => (
            <div key={`slider1-${index}`}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
                style={isMobile ? mobileStyle : desktopStyle}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-container" style={{ overflow: "hidden", marginTop: "20px" }}>
        <Slider {...settings2}>
          {images.map((image, index) => (
            <div key={`slider2-${index}`}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
                style={isMobile ? mobileStyle : desktopStyle}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselOne;
