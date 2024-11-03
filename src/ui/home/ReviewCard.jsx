"use client";
import { Avatar, Box, Rating, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import styles from "../../Styles/home/ReviewCard.module.css";

const ReviewCard = ({ image, title, subheader, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.styledCardActionArea}>
      <div className={styles.styledCard}>
        <Stack spacing={2} height="100%" padding={2}>
          <Box>
            <Rating
              name="rating"
              value={5}
              size="small"
              sx={{ verticalAlign: "text-top" }}
            />
          </Box>
          <Box flexGrow={1}>
            <Typography variant={isMobile ? "h7" : "h6"} lineHeight={"24px"}>
              {description}
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Avatar src={image} alt={title} className={styles.styledAvatar} /> */}
            <div>
              <Typography variant="h6" fontWeight={"600"}>
                {title}
              </Typography>
              <span className={styles.styledLabel}>{subheader}</span>
            </div>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default ReviewCard;
