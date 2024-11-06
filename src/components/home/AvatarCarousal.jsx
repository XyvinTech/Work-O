"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";

function AvatarCarousal({ images }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const router = useRouter();
  const avatarSize = isMobile
    ? { width: "56px", height: "56px" }
    : { width: "100px", height: "100px" };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 8, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 6, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Avatar src={image} sx={avatarSize} />
            </div>
          ))}
        </Slider>
      </div>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 2 : 6}
        marginTop="20px"
      >
        <Typography
          textAlign={isMobile ? "justify" : "left"}
          variant={isMobile ? "h7" : "h6"}
          lineHeight="27px"
        >
          Empowering over 2,000 individuals through our skill-development
          program underscores our steadfast dedication to community
          transformation. At Worko, we firmly believe in the transformative
          power of education and training to open doors to brighter futures.
          Through our comprehensive programs, we equip participants with
          practical skills essential for success in today&apos;s competitive job
          market.
        </Typography>
        <Typography
          textAlign={isMobile ? "justify" : "left"}
          variant={isMobile ? "h7" : "h6"}
          lineHeight="27px"
        >
          From technical proficiencies to soft skills refinement, we enable our
          students to explore their potential and pursue rewarding careers. With
          the backing of our committed team and esteemed partners, we&apos;re
          not merely changing lives; we&apos;re fostering a more strong,
          resilient workforce for the future. Join us as we continue our mission
          to make a positive impact.
        </Typography>
      </Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
      >
        <Button
          variant="contained"
          fullWidth={isMobile}
          color="primary"
          onClick={() => router.push("/enroll")}
        >
          Enroll Now
        </Button>
      </Box>
    </>
  );
}

export default AvatarCarousal;
