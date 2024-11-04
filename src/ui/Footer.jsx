"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StyledInput from "@/ui/StyledInput";
import { useState } from "react";
import Link from "next/link";
import PlusIcon from "../assets/icons/call.svg";
import SMSIcon from "../assets/icons/sms.svg";
import StyledIconButton from "./StyledIconButton";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [showMore, setShowMore] = useState(false);
  const handleViewMoreClick = () => {
    setShowMore(!showMore);
  };
  const styles = {
    typography: {
      fontSize: "20px",
      fontWeight: 700,
      backgroundImage:
        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.31) 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
  };

  return (
    <Box bgcolor={"#000"} color={"white"}>
      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 0 : 4}
        spacing={isMobile ? 3 : isTablet ? 0 : 20}
      >
        <Box>
          <img
            src="/Home/Remaining/Logo.webp"
            alt="Logo"
            width={isMobile ? "165px" : "270px"}
            height={"auto"}
          />
          <Typography variant="h6" lineHeight={"30px"} p={2} color="white">
            Address: <br />
            Nextra the address, plot no. 4B, District <br /> center, Mayur Vihar
            phase 1 extension,
            <br />
            New Delhi
          </Typography>
        </Box>
        <Stack
          direction={isMobile ? "column" : isTablet ? "column" : "row"}
          spacing={isMobile ? 2 : 6}
          p={isMobile ? 2 : 4}
          gap={4}
        >
          <Stack direction={"row"} spacing={isTablet ? 4 : 11}>
            <Stack spacing={2}>
              <Typography fontWeight={isMobile ? 700 : 500}   variant="footer_title">Legal</Typography>
              <Link
                href={"/contact"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Contact us
                </Typography>
              </Link>
              <Link
                href={"/privacy"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Privacy policy
                </Typography>
              </Link>{" "}
              <Link
                href={"/terms"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Terms & conditions
                </Typography>
              </Link>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="footer_title"
                fontWeight={isMobile ? 700 : 500}
              >
                Resources
              </Typography>
              {/* <Link href={"/blog"}  passHref style={{textDecoration:"none",color:"white"}}> */}
              {/* <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                Blogs
              </Typography> */}
              {/* </Link> */}
              <Link
                href={"/enroll"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Enroll Now
                </Typography>
              </Link>
              <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                Help centre
              </Typography>
            </Stack>
          </Stack>{" "}
          <Stack direction={"row"} spacing={isTablet ? 4 : 13}>
            <Stack spacing={2}>
              <Typography
                variant="footer_title"
                fontWeight={isMobile ? 700 : 500}
              >
                Discover
              </Typography>
              <Link
                href={"/services"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Services
                </Typography>
              </Link>
              <Link
                href={"/skill"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Skill devlopment
                </Typography>
              </Link>
            </Stack>
            <Stack spacing={2}>
              <Typography
                variant="footer_title"
                fontWeight={isMobile ? 700 : 500}
              >
                Company
              </Typography>
              <Link
                href={"/about"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  About
                </Typography>
              </Link>

              <Link
                href={"/get-the-app"}
                passHref
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant={isMobile ? "h7" : "footer_subtitle"}>
                  Download App
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        px={isMobile ? 1 : 6}
        py={1}
        spacing={isMobile ? 5 : 10}
        alignItems={"center"}
        width={"100%"}
        marginTop={isMobile ? 2 : 0}
      >
        <Stack spacing={2} width={isMobile ? "100%" : "55%"}>
          <Typography variant="h5">Join our newsletter</Typography>
          <Stack direction={"row"} spacing={2}>
            <StyledInput
              placeholder={"Email ID"}
              backgroundColor={"background.paper"}
            />
            <Stack width={isMobile ? "49%" : "20%"}>
              <Button variant="navbar" fullWidth>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={isMobile ? "100%" : "55%"} pt={3} spacing={2}>
          <Typography style={styles.typography}>Need some Help?</Typography>
          <Typography fontSize={"30px"} fontWeight={"700"} color={"primary"}>
            Reach out to us
          </Typography>
          <Stack
            direction={isMobile ? "column" : isTablet ? "column" : "row"}
            spacing={3}
          >
            <StyledIconButton
              hover={true}
              icon={PlusIcon}
              buttonText="+91 7-666-666-559"
              color={"white"}
              borderColor={"rgba(255, 255, 255, 0.12)"}
            />
            <StyledIconButton
              hover={true}
              icon={SMSIcon}
              buttonText="info@workoindia.com"
              color={"white"}
              borderColor={"rgba(255, 255, 255, 0.12)"}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="h6"
          fontWeight={"400"}
          px={isMobile ? 2 : 6}
          py={2}
        >
          Worko Locations
        </Typography>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 2 : 4}
        px={isMobile ? 2 : 6}
        spacing={isMobile ? 2 : isTablet ? 4 : 18}
        // justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={isMobile ? 7 : isTablet ? 4 : 18}>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Delhi NCR
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Chennai
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Mumbai
            </Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Dehradun
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Mumbai
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Assam
            </Typography>
          </Stack>
        </Stack>{" "}
        <Stack direction="row" spacing={isMobile ? 7 : isTablet ? 4 : 18}>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Tirupati
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Gujarat
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Andaman
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Lucknow
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Kerala
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Rajasthan
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "left" : "space-between"}
        bgcolor={"#333333"}
        p={2}
        height={"60px"}
        spacing={1}
      >
        <Typography variant="copyrights">
          &copy; 2005-2024 Worko Private limited. All Rights Reserved
        </Typography>
        <Typography variant="copyrights" color={"#908E8E"}>
          Handcrafted with ❤️ by Acute Angle
        </Typography>
      </Stack>
      {/* </StyledBox> */}
    </Box>
  );
}

export default Footer;
