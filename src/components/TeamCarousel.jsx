"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const TeamCarousel = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const router = useRouter();
  const ImageContainer = styled.div`
    width: ${isMobile ? "100%" :isTablet?"600px": "5500px"};
    height: ${isMobile ? "294px" : "520px"};
    overflow: hidden;
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <Box
      marginTop={"60px"}
      padding={4}
      border={"1px solid rgba(0, 0, 0, 0.12)"}
    >
      <Stack direction={isMobile ? "column" :isTablet ? "column": "row"} spacing={isMobile ? 2 :isTablet ? 2: 8} alignItems={"center"}>
        <ImageContainer>
          <Image src="/AboutUs/Avneesh.png" alt="img" />
        </ImageContainer>
        <Stack
          direction={"column"}
          spacing={isMobile ? 2 : 0}
          paddingTop={isMobile ? 2 : 10}
        >
          <Typography variant="h2">Avneesh Chaudhary</Typography>
          <Typography variant="h4">CEO</Typography>
          <Typography
            variant={isMobile ? "h7" : "h5"}
            textAlign={isMobile && "justify"}
            lineHeight={"27px"}
            paddingTop={"30px"}
          >
            Avneesh is a seasoned professional with a strong background in
            sales, accounts, management, and operations. Before helming Worko,
            he worked with multinational companies like Tech Mahindra, Times Of
            India, Airtel, Reliance, Mymobiforce, and others where he built his
            expertise across various domains. He holds a graduate degree from
            Delhi University and a postgraduate MBA in Sales & Operations from
            CCS University. This educational foundation coupled with his
            extensive corporate experience has equipped him with a well-rounded
            skill set. At Worko, Avneesh dons multiple hats. One of his crucial
            responsibilities is onboarding freelancers and vendors from across
            the nation. From making the first call to running thorough
            background checks on their expertise, he ensures that only the best
            talents make the cut and join Worko's field workforce. When not
            strategizing on professional fronts, Avneesh loves traveling,
            exploring new cuisines as a foodie, and taking long strolls at
            beaches to unwind. His passion for his work and a keen eye for
            talent make him an invaluable asset to the organization.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TeamCarousel;
