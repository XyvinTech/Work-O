"use client";
import {  Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "next/link";
const OurTrainingPartner = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  return (
    <>
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
        spacing={isMobile ? 2 : isTablet ? 2 : 8}
        alignItems={"center"}
      >
        <img
          src="/SkillDevelopment/Training.png"
          alt="img"
          width={"224px"}
          height={"224px"}
        />

        <Stack
          direction={"column"}
          spacing={isMobile ? 2 : 0}
         
        >
          <Typography
            variant={isMobile ? "h7" : "h5"}
            textAlign={isMobile && "justify"}
            lineHeight={"27px"}
          >
            Samarth Bharat{" "}
            <Link color="#368FF6" href={"http://samarthbharat.net"}>
              http://samarthbharat.net
            </Link>{" "}
            under the aegis of BDSN, aims to uplift the socially and
            economically weaker sections by making them self-sufficient and
            enabling them to live with pride. To achieve this vision, Samarth
            Bharat provides Skill Development Training to unemployed youth, a
            need intensified by the COVID-19 pandemic. By leveraging training
            and hand-holding, the initiative helps participants break free from
            poverty, climb the social and economic ladder, and achieve dignity
            and pride. The program focuses on reskilling and upskilling in
            pre-identified sectors, facilitating transitions into formal
            employment or entrepreneurial ventures. Key areas of training
            include roles such as Electrician, AC and Washing Machine
            Technician, Beautician, Hair Stylist, Smartphones Repair Technician,
            and CCTV Technician, all supported by a network of quality
            instructors and comprehensive training programs.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default OurTrainingPartner;
