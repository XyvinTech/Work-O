"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import data from "../../assets/json/TeamData";
import styles from "../../Styles/about/TeamCarousal.module.css"; // Adjust path if necessary
import { mont } from "@/Theme/Theme";

const TeamCarousal = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const router = useRouter();

  return (
    <>
      {data.map((item, index) => (
        <Box className={styles.container} key={index}>
          <Stack
            direction={isMobile ? "column" : isTablet ? "column" : "row"}
            spacing={isMobile ? 2 : isTablet ? 2 : 8}
            alignItems={"center"}
          >
            <div className={styles.imageContainer}>
              <img src={item.image} alt="img" />
            </div>
            <Stack direction={"column"} spacing={isMobile ? 2 : 0} paddingTop={isMobile ? 2 : 2}>
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="h4">{item.position}</Typography>
              <div
                className={styles.description}
                style={{ fontFamily: mont.style.fontFamily }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default TeamCarousal;
