"use client";
import Header from "@/components/Header";
import bgImage from "/public/platform/home.webp";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import StyledBox from "@/components/StyledBox";

function page() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Header title={" Terms and Conditions"} bgImg={bgImage.src} />{" "}
      <>
        <StyledBox>
          {" "}
          <Stack spacing={2}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              textAlign={"center"}
              fontWeight={700}
            >
              Terms and Conditions
            </Typography>
            <ol
              style={{
                paddingLeft: isMobile ? "20px" : "40px",
              }}
            >
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Acceptance of Terms:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                By accessing or using the Worko Platform, you agree to be bound
                by these Terms and Conditions.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  User Account:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                To use certain features of the Platform, you may need to create
                a user account. You are responsible for maintaining the
                confidentiality of your account credentials.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Services:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                Worko provides a platform for connecting customers with service
                providers. We ensure the best services are provided to you.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Payment:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                Payment for services is processed through the Platform. You
                agree to pay all applicable fees.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Intellectual Property:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                All intellectual property rights in the Platform and its content
                belong to Worko.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Limitation of Liability:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                Worko shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of the Platform.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Termination:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                Worko may terminate your account or access to the Platform at
                any time for any illegal activity & action against our user
                policy.
              </Typography>{" "}
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Contact Us:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at{" "}
                <Link href="mailto:Info@workoindia.com" passHref>
                  Info@workoindia.com
                </Link>
              </Typography>
            </ol>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              textAlign={"center"}
              paddingTop={isMobile ? 10 : 5}
              fontWeight={700}
            >
              EULA Agreement Terms
            </Typography>
            <ol
              style={{
                paddingLeft: isMobile ? "20px" : "40px",
              }}
            >
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Licence Grant
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                Subject to the terms and conditions of this EULA, Worko grants
                you a non-exclusive, non-transferable, non-sublicensable licence
                to access and use the Platform for your personal, non-commercial
                purposes. You may not modify, reverse engineer, decompile,
                disassemble, or create derivative works of the Platform.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  User Accounts
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                You may need to create an account to access certain features of
                the Platform. You are responsible for maintaining the
                confidentiality of your account credentials and are fully
                responsible for all activities that occur under your account.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  User Data
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                You are solely responsible for the accuracy, completeness, and
                legality of all information you submit to the Platform (User
                Data). You grant Worko a non-exclusive, worldwide, royalty-free
                licence to use, store, process, and disclose your User Data as
                necessary to provide and improve the Platform.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Acceptable Use
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                You agree to use the Platform in a lawful manner and by this
                EULA. You will not:
              </Typography>
              <ul style={{ paddingLeft: isMobile ? "20px" : "40px" }}>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Use the Platform for any illegal or unauthorised purpose
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Violate any applicable laws or regulations
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Infringe on the intellectual property rights of Worko or any
                    third party
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Transmit any viruses, malware, or other harmful code
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Interfere with or disrupt the Platform or any other user's
                    use of the Platform
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Collect or harvest any personal data of other users or
                  </Typography>
                </li>
                <li style={{ paddingBottom: "8px" }}>
                  <Typography variant={isMobile ? "h7" : "h6"}>
                    Impersonate any person or entity.
                  </Typography>
                </li>
              </ul>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Term and Termination
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                This EULA will become effective upon your first access to the
                Platform and will remain in effect until terminated by either
                party. Worko may terminate this EULA at any time, with or
                without cause. You may terminate this EULA by ceasing to use the
                Platform.
              </Typography>
              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Entire Agreement
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                This EULA constitutes the entire agreement between you and Worko
                concerning the use of the Platform and supersedes all prior or
                contemporaneous communications and proposals, whether oral or
                written.
              </Typography>

              <li style={{ marginTop: "10px" }}>
                {" "}
                <Typography variant={isMobile ? "h7" : "h6"} fontWeight={700}>
                  Contact Us:
                </Typography>{" "}
              </li>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                style={{ paddingBottom: "10px" }}
              >
                If you have any questions or concerns about this EULA, please
                contact us at
                <Link href="mailto:Info@workoindia.com" passHref>
                  Info@workoindia.com
                </Link>
              </Typography>
            </ol>
          </Stack>
        </StyledBox>
      </>
    </>
  );
}

export default page;
