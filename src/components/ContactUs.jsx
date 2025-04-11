"use client";
import { Box, Stack } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import Facebook from "../assets/icons/Facebook.svg";
import Insta from "../assets/icons/Insta.svg";
import LinkedIn from "../assets/icons/LinkedIn.svg";
import Link from "next/link";
import styles from "../Styles/Contact.module.css";
import EnrollNow from "./EnrollNow";
import StyledForm from "./StyledForm";

function ContactUs({ enroll }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      className={styles.container}
      py={isMobile ? 4 : 10}
      px={isMobile ? 3 : 5}
    >
      <Stack direction={{ lg: "row", sm: "column" }}>
        <Stack width={{ lg: "40%", sm: "100%" }} spacing={6}>
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="h6">
            Address: <br />
            Nextra the address, plot no. 4B, District center,
            <br /> Mayur vihar phase 1 extension, New Delhi
          </Typography>
          <Box>
            <Typography variant="h6"> Contact Us :</Typography>
            <Typography variant="h6">+91 7-666-666-559</Typography>
            <Typography variant="h6">info@workoindia.com</Typography>
          </Box>
          <Box>
            <Typography variant="footer_title">Find us here</Typography>
            <Stack direction={"row"} spacing={3} py={3}>
              <Link
                href={"https://www.facebook.com/workoindia/"}
                target="_blank"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Facebook />
              </Link>
              <Link
                href={"https://www.instagram.com/workoindia"}
                target="_blank"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Insta />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/worko-india/"}
                target="_blank"
                passHref
                style={{ textDecoration: "none" }}
              >
                <LinkedIn />
              </Link>
            </Stack>
          </Box>
        </Stack>
        <Box width={{ lg: "60%", sm: "100%" }}>
          
          {enroll ? <EnrollNow /> : <StyledForm />}
        </Box>
      </Stack>
    </Box>
  );
}

export default ContactUs;
