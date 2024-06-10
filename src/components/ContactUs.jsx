"use client";
import styled from "styled-components";
import bgImageFooter from "/public/assets/home/img/footer.png";
import { Box, Stack } from "@mui/system";
import { Button, Modal, Typography, useMediaQuery } from "@mui/material";
import StyledForm from "@/components/StyledForm";
import Facebook from "../assets/icons/Facebook.svg";
import Insta from "../assets/icons/Insta.svg";
import LinkedIn from "../assets/icons/LinkedIn.svg";
import Link from "next/link";
import EnrollNow from "./EnrollNow";
import { useState } from "react";
import { useRouter } from "next/navigation";
function ContactUs({enroll}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const handleBackToHome = () => {
    handleClose();
    router.push("/");
  };
  return (

    <Container py={isMobile ? 4 : 10} px={isMobile ? 3 : 5}>
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
            <Typography variant="h6">7-666-666-559</Typography>
            <Typography variant="h6">info@workoindia.com</Typography>
          </Box>
          <Box>
            <Typography variant="footer_title">Find us here</Typography>
            <Stack direction={"row"} spacing={3} py={3}>
            <Link href={"https://www.facebook.com/workoindia/"} target="_blank" passHref style={{textDecoration:"none"}}>  <Facebook /></Link>
            <Link href={"https://www.instagram.com/workoindia"}  target="_blank"passHref style={{textDecoration:"none"}}>
              <Insta /></Link>
              <Link href={"https://www.linkedin.com/company/worko-india/"} target="_blank" passHref style={{textDecoration:"none"}}><LinkedIn /></Link>
            </Stack>
          </Box>
        </Stack>
        <Box width={{ lg: "55%", sm: "100%" }}>
        {enroll ? <EnrollNow /> : <StyledForm />}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button fullWidth={isMobile} variant="navbar" onClick={handleOpen}>
            {enroll ? "Enroll Now": "Submit"}
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
        
          <Typography variant="h6" fontWeight={"600"} color={"#ffffff"}>Your Submission Has Been Successfull</Typography>
          <img src="/Home/Remaining/Tick.png" alt="Tick"/>
          <Typography variant="h7" color={"#B2B0B0"}>Our team will call you shortly</Typography>
          <Button variant="navbar"onClick={handleBackToHome}>Back to Home</Button>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default ContactUs;

const Container = styled(Box)(() => ({
  backgroundImage: `url(${bgImageFooter.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  padding: "80px",
  "@media (max-width:600px)": {
    padding: "20px",
  },
  flexDirection: "column",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
}));
const ModalContent = styled(Box)(() => ({
  position: "absolute",
  top: "52%",
  left: "65%",
  height:"583px",
  gap:"30px",
  width:"50%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1B1B18",
  padding: "80px",
  boxShadow: 24,
  p: 4,
  "@media (max-width:600px)": {
    width: "100%",
    left:"50%",
    padding: "30px",
    height:"483px",
  },
}));