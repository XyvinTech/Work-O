"use client";
import styled from "styled-components";
import { Avatar, Rating, Typography } from "@mui/material";
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
  height: 260px;
  background: white;
  border-radius: 0;
  border: 1px solid #e3dccd;
  @media (max-width: 600px) {
    height: 300px;
  }
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
  cursor: cursor;
  display: block;
  height: 100%;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const ReviewCard = ({ image, title, subheader, description }) => {
  return (
    <StyledCardActionArea>
      <StyledCard>
        <StyledCardContent>
          <Rating
            name="rating"
            value={5}
            size="small"
            sx={{
              verticalAlign: "text-top",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            {description}
          </Typography>
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
