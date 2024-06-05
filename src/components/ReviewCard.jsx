"use client";
import styled from "styled-components";
import { Avatar, Box, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  height: auto;
  background: white;
  border-radius: 0;
  border: 1px solid #e3dccd;
`;

const StyledCardContent = styled.div`
  color: black;
  padding: 20px;
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const StyledCardActionArea = styled.div`
  cursor: pointer;
  display: block;
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
        <StyledCardContent>
          <Box>
            <Rating
              name="rating"
              value={5}
              size="small"
              sx={{
                verticalAlign: "text-top"
              }}
            />
          </Box>
          <Box mt={1.5} mb={1.5}>
            <Typography
              variant={isMobile ? "h7" : "h6"}lineHeight={isMobile?"21px":"24px"}
            >
              {description}
            </Typography>
          </Box>
          <StyledCardHeader>
            <StyledAvatar alt="Cindy Baker" src={image} />
            <div>
              <Typography variant="h6" fontWeight={"600"}>
                {title}
              </Typography>
              <StyledLabel>{subheader}</StyledLabel>
            </div>
          </StyledCardHeader>
        </StyledCardContent>
      </StyledCard>
    </StyledCardActionArea>
  );
};

export default ReviewCard;
