"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
function AvatarCarousel({images}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mobileStyle = { width: "56px", height: "56px"};
  const desktopStyle = { width: "100px", height: "100px" };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 11,
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
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
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
    <>
    <div className="slider-container" style={{overflow:"hidden"}}>
      <Slider {...settings}>
      {images.map((image, index) => (
          <div key={index}>
            <Avatar src={image} sx={isMobile ? mobileStyle : desktopStyle}/>
          </div>
        ))}
      </Slider>
      
    </div>
    <Stack direction={isMobile?"column":"row"} spacing={isMobile?2:6} marginTop={"20px"}>
          <Typography variant="h6" textAlign={"justify"}>
            Empowering over 2,000 individuals through our skill-development
            program underscores our steadfast dedication to community
            transformation. At Worko, we firmly believe in the transformative
            power of education and training to open doors to brighter futures.
            Through our comprehensive programs, we equip participants with
            practical skills essential for success in today's competitive job
            market.
          </Typography>
          <Typography variant="h6" textAlign={"justify"}>
            From technical proficiencies to soft skills refinement, we enable
            our students to explore their potential and pursue rewarding
            careers. With the backing of our committed team and esteemed
            partners, we're not merely changing lives; we're fostering a
            more strong, resilient workforce for the future. Join us as we
            continue our mission to make a positive impact.
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button variant="navbar" color="primary">Enroll Now</Button>
        </Box>
    </>
  );
}

export default AvatarCarousel;