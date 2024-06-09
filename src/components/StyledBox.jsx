"use client"
import { Box, Typography, useMediaQuery } from "@mui/material";

const StyledBox = ({ children, bgcolor, title,padding }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mobilePadding = padding || "20px";
  return (
    <Box bgcolor={bgcolor} padding={isMobile ? mobilePadding : "70px"}>
      {title && (
        <Typography margin={isMobile ? "32px" : "40px"} textAlign="center" variant="h2">
          {title}
        </Typography>
      )}
      {children}
      
    </Box>
  );
};

export default StyledBox;
