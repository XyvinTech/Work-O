"use client";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import bgImage from "/public/assets/home/img/footer.png";
import styled from "styled-components";
import { mont } from "@/theme";

const FooterContainer = styled(Box)(() => ({
  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
}));

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FooterContainer>
      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 1 : 4}
        spacing={isMobile ? 5 : 20}
      >
        <Box>
          <img
            src="/main_logo.png"
            alt="Logo"
            width={isMobile ? "165px" : "270px"}
            height={"auto"}
          />
          <Typography variant="h6" lineHeight={"30px"} p={2}>
            Address: <br />
            Nextra the address, plot no. 4B, District <br /> center, Mayur Vihar phase 1 extension,
            <br />
            New Delhi
          </Typography>
        </Box>
        <Stack direction={"row"} spacing={isMobile ? 3 : 10} p={isMobile ? 2 : 4}>
          <Stack spacing={2}>
            <Typography variant="footer_title">Legal</Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Contact us
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Privacy policy
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Terms & conditions
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="footer_title">Resources</Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Blogs
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Location
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Help centre
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="footer_title">Discover</Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Services
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Skill devlopment
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="footer_title">Comapany</Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              About
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Join Us
            </Typography>
            <Typography fontSize="18px" variant="footer_subtitle">
              Download App
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Stack>
            <Box>Newsletter</Box>
            <Box>Need help</Box>
        </Stack>
        <Stack>
            Locations
        </Stack>
        <Stack>
            Copyright
        </Stack> */}
    </FooterContainer>
  );
}

export default Footer;
