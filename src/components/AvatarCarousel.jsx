"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";
function AvatarCarousel({images}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 12,
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
            slidesToShow: 12,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
       
      ]
  };
  // const images = [
  //   '/assets/home/carousel-1/image1.png',
  //   '/assets/home/carousel-1/image2.png',
  //   '/assets/home/carousel-1/image3.png',
  //   '/assets/home/carousel-1/image4.png',
  //   '/assets/home/carousel-1/image5.jpeg',
  //   '/assets/home/carousel-1/image6.png',
  //   '/assets/home/carousel-1/image7.png',
  //   '/assets/home/carousel-1/image8.jpeg',
  //   '/assets/home/carousel-1/image9.png',
  //   '/assets/home/carousel-1/image10.png',
  // ];
  return (
    <div className="slider-container" style={{overflow:"hidden"}}>
      <Slider {...settings}>
      {images.map((image, index) => (
          <div key={index}>
            <Avatar src={image} sx={{height:"100px",width:"100px"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AvatarCarousel;