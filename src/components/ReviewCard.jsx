"use client";
import styled from "styled-components";
import { Avatar, Box, Rating, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mont } from "@/theme";

const StyledLabel = styled.span`
  font-family: ${mont.style.fontFamily};
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 350px;
  background: white;
  border-radius: 0;
  border: 1px solid #e3dccd;
`;

const StyledCardActionArea = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const ReviewCard = ({ image, title, subheader, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <StyledCardActionArea>
      <StyledCard>
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
          
            <div>
              <Typography variant="h6" fontWeight={"600"}>
                {title}
              </Typography>
              <StyledLabel>{subheader}</StyledLabel>
            </div>
          </Stack>
        </Stack>
      </StyledCard>
    </StyledCardActionArea>
  );
};

export default ReviewCard;
