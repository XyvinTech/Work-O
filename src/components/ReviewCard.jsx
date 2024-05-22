"use client";
import styled from "styled-components";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { mont } from "@/theme";
const StyledLabel = styled.span`
  font-family: ${mont.style.fontFamily};
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const ReviewCard = ({image,title,subheader,description}) => {
  return (
    <Card
      sx={{
       maxWidth:"500px",
        height: "260px",
        // boxShadow: "none",
        background: "white",
        borderRadius: 0,
       border:"1px solid #e3dccd"
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            color: "black",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
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
          <CardHeader
            sx={{ padding: "0", marginTop: "30px" }}
            avatar={<Avatar alt="Cindy Baker" src={image} />}
            title={<Typography variant="h6">{title}</Typography>}
            subheader={
              <StyledLabel>{subheader}</StyledLabel>
            }
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ReviewCard;
