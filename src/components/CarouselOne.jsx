"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function CarouselOne({ images,pic }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    
  const mobileStyle = { width: "90px", height: "104px", objectFit: "cover", padding: "1px" };
  const desktopStyle = { width: "186px", height: "216px", objectFit: "cover", padding: "1px" };
  
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    autoplaySpeed: 1000,
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
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    pauseOnHover: false,
    autoplaySpeed: 800,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
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
                objectFit="cover"
                style={isMobile ? mobileStyle : desktopStyle}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container" style={{ overflow: "hidden", marginTop: "20px" }}>
        <Slider {...settings2}>
          {pic.map((image, index) => (
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
