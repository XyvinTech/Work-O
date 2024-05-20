import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ViewMoreCard = ({image,title,description,date}) => {
  return (
    <Card
      sx={{
        maxWidth: "440px",
        height: "514px",
        padding: "30px",
        gap: "21px",
        margin: "auto",
        boxShadow: "none",
        background: "white",
        borderRadius: 0,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      }}
    >
      <CardActionArea>
        <CardMedia
          image={image}
          sx={{
            paddingBottom: "56.25%",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          }}
        />
        <CardContent
          sx={{
            color: "black",
          }}
        >
          <Typography
            variant="h7"
            sx={{ color: "primary.main", textAlign: "justify" }}
          >
           {date}
          </Typography>
          <Typography
            variant="card"
            sx={{ textAlign: "justify", marginTop: "15px" }}
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "justify",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            {description}
          </Typography>
          <Typography variant="h7" sx={{ color: "primary.main" }}>
            View more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ViewMoreCard;
