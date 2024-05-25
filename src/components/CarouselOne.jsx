"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function CarouselOne({ images,pic }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    
  const mobileStyle = { width: "90px", height: "104px", objectFit: "cover", padding: "1px" };
  const desktopStyle = { width: "180px", height: "216px", objectFit: "cover", padding: "1px" };
  const responsiveCarousel = [
    {
      breakpoint: 2000, // Settings for extra large screens
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    
    {
      breakpoint: 1440, // Typical for MacBook Air
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1200, // Settings for normal large screens
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 900, // Settings for tablets
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600, // Settings for mobile devices
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  
  ]
  
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed:1500,
    autoplaySpeed: 1500,
    easing:'linear',
    cssEase: "linear",
    responsive: responsiveCarousel
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed:800,
    pauseOnHover: false,
    autoplaySpeed: 800,
    cssEase: "linear",
    easing:'linear',
    responsive: responsiveCarousel
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
      <div className="slider-container" style={{ overflow: "hidden", marginTop: "10px" }}>
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
