"use client"
import { Box, Typography, useMediaQuery } from "@mui/material";

const StyledBox = ({ children, bgcolor, title }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box bgcolor={bgcolor} padding={isMobile ? "20px" : "80px"}>
      {title && (
        <Typography margin={isMobile ? "20px" : "40px"} textAlign="center" variant="h2">
          {title}
        </Typography>
      )}
      {children}
      
    </Box>
  );
};

export default StyledBox;
