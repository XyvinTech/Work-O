"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const StyledBox = ({ children, bgcolor, title, padding }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const mobilePadding = padding || "20px";
  const tabletPadding = padding || "40px";

  return (
    <Box bgcolor={bgcolor} padding={isMobile ? mobilePadding : isTablet ? tabletPadding : "60px"}>
      {title && (
        <Typography margin={isMobile ? "32px" : isTablet ? "36px" : "40px"} textAlign="center" variant="h2">
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default StyledBox;
