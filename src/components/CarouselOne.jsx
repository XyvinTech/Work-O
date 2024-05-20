"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselOne({ images }) {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
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
                style={{ width: "187px", height: "217px", objectFit: "cover", padding: "1px" }}
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
                style={{ width: "187px", height: "217px", objectFit: "cover", padding: "1px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselOne;
