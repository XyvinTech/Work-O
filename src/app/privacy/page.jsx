
"use client"
import Header from "@/components/Header";
import bgImage from "/public/platform/home.webp";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import StyledBox from "@/components/StyledBox";

function Page() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Header title={"Privacy policy"} bgImg={bgImage.src} />{" "}
      <>
        <StyledBox>
          {" "}
          <Stack spacing={2}>
            <Typography variant={isMobile ? "h7" : "h6"}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Worko Foundation & Worko India
              </span>{" "}
              respects your privacy and is committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use,
              disclose, and protect your information when you use our website
              and mobile application.
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Information We Collect:
            </Typography>{" "}
            <ul style={{ paddingLeft: isMobile ? "20px" : "40px" }}>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Personal Information:</strong> When you create an
                  account or use our Platform, we may collect personal
                  information such as your name, email address, phone number,
                  address, and payment information.
                </Typography>
              </li>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Usage Data:</strong> We may collect information about
                  your interaction with our Platform, including IP address,
                  device information, browsing behavior, and service usage.
                </Typography>
              </li>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Location Data:</strong> We may collect your location
                  information with your consent to provide location-based
                  services.
                </Typography>
              </li>
            </ul>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              How We Use Your Information:
            </Typography>{" "}
            <ul style={{ paddingLeft: isMobile ? "20px" : "40px" }}>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>To provide and improve our services:</strong> We use
                  your information to facilitate the booking and delivery of
                  home services, process payments, and enhance your user
                  experience.
                </Typography>
              </li>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Communication:</strong> We may use your information to
                  send you notifications, updates, and promotional offers
                  related to our services.
                </Typography>
              </li>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Customer support:</strong> We may use your information
                  to respond to your inquiries and resolve issues.
                </Typography>
              </li>{" "}
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Marketing and analytics:</strong> We may use your
                  information for marketing purposes and to analyze user
                  behaviour to improve our Platform.
                </Typography>
              </li>
            </ul>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Information Sharing:
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"}>
              We may share your information with:
            </Typography>{" "}
            <ul style={{ paddingLeft: isMobile ? "20px" : "40px" }}>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Service providers:</strong> We may share your
                  information with service providers who assist us in operating
                  our Platform or providing services to you.
                </Typography>
              </li>
              <li style={{ paddingBottom: "8px" }}>
                <Typography variant={isMobile ? "h7" : "h6"}>
                  <strong>Legal requirements:</strong> We may disclose your
                  information to comply with legal obligations or to protect our
                  rights.
                </Typography>
              </li>
            </ul>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Data Security:
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"}>
              We implement reasonable security measures to protect your personal
              information from unauthorised access, disclosure, alteration, and
              destruction.
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Your Rights:
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"}>
              You can access, rectify, or delete your personal information. You
              can also object to processing your personal information or request
              data portability.
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Changes to this Privacy Policy:
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"}>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new Privacy
              Policy on our Platform.
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
              Contact Us:
            </Typography>{" "}
            <Typography variant={isMobile ? "h7" : "h6"}>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <Link href="mailto:Info@workoindia.com" passHref>
                Info@workoindia.com
              </Link>
            </Typography>
          </Stack>
        </StyledBox>
      </>
    </>
  );
}

export default Page;
