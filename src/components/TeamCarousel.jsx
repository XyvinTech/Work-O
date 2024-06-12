"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const TeamCarousel = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const router = useRouter();
  const ImageContainer = styled.div`
    width: ${isMobile ? "100%" : "3800px"};
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
    <Box marginTop={"60px"} padding={4} border={"1px solid rgba(0, 0, 0, 0.12)"}>
      <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 2 : 8}>
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
            Before helming Worko, Avneesh worked with multinationals like Tech
            Mahindra, Times Of India, Airtel, Reliance, Mymobiforce, etc. There
            he built his expertise in Sales, Accounts, Management, Operations
            thereafter embarking on his serial entrepreneurship building
            journey. He loves travelling and foodie or taking long strolls at
            beaches when he is not brainstorming on professional fronts. Also
            Avneesh manages one of the toughest jobs in-house - onboarding
            freelancers and vendors from across the nation. From making the
            first call to running background checks on their expertise, it’s his
            job to ensure that only the best of the best make the cut and join
            our field workforce
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TeamCarousel;
