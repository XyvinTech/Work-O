"use client";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bgImage from "/public/assets/home/img/footer.png";
import styled from "styled-components";
import { mont } from "@/theme";
import StyledInput from "@/ui/StyledInput";
import PlusIcon from "../assets/icons/call.svg";
import SMSIcon from "../assets/icons/sms.svg";
import StyledIconButton from "@/ui/StyledIconButton";
import StyledBox from "./StyledBox";

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

  const styles = {
    typography: {
      fontSize: "20px",
      fontWeight: 700,
      fontFamily: mont.style.fontFamily,
      backgroundImage:
        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.31) 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
  };

  return (
    <FooterContainer>
      <StyledBox>

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
            Nextra the address, plot no. 4B, District <br /> center, Mayur Vihar
            phase 1 extension,
            <br />
            New Delhi
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          spacing={isMobile ? 3 : 10}
          p={isMobile ? 2 : 4}
        >
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
      <Stack
        direction={isMobile ? "column" : "row"}
        px={isMobile ? 3 : 6}
        py={1}
        spacing={isMobile ? 5 : 10}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack spacing={2} width={isMobile ? "100%" : "55%"}>
          <Typography variant="h5">Join our newsletter</Typography>
          <Stack direction={"row"} spacing={2}>
            <StyledInput
              placeholder={"Email ID"}
              backgroundColor={"background.paper"}
            />
            <Button variant="navbar" fullWidth>Submit</Button>
          </Stack>
        </Stack>
        <Stack width={isMobile ? "100%" : "55%"} pt={3} spacing={2}>
          <Typography style={styles.typography}>Need some Help?</Typography>
          <Typography
            fontFamily={mont.style.fontFamily}
            fontSize={"30px"}
            fontWeight={"700"}
            color={"primary"}
          >
            Reach out to us
          </Typography>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={3}
            width={isMobile ? "50%" : "100%"}
          >
            <StyledIconButton icon={PlusIcon} buttonText="7-666-666-559"  color={"white"} borderColor={"rgba(255, 255, 255, 0.12)"}/>
            <StyledIconButton icon={SMSIcon} buttonText="info@workoindia.com" color={"white"} borderColor={"rgba(255, 255, 255, 0.12)"}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="footer_title" px={isMobile ? 4 : 6} py={2}>
          Worko Locations
        </Typography>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 2 : 4}
        px={isMobile ? 4 : 6}
        justifyContent={"space-between"}
      >
        <Stack spacing={2}>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Delhi NCR
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Lucknow
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Jaipur
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Dehradun
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
          <Typography variant="h6" color={"#BDBDBD"}>
            Worko in Coming Soon
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        bgcolor={"#333333"}
        p={4}height={"60px"}
        spacing={2}
      >
        <Typography variant="copyrights">
          &copy; 2005-2024 Worko Private limited. All Rights Reserved
        </Typography>
        <Typography variant="copyrights">
          Handcrafted with ❤️ by Acute Angle
        </Typography>
      </Stack>
      </StyledBox>

    </FooterContainer>
  );
}

export default Footer;
