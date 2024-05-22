import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
const ServiceCard = ({ title, image, description }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "none",
        height: "559px",
        borderRadius:"0px",
        "@media (max-width: 600px)": {
          width: "100%", // Full width on mobile
          height: "302px", // Adjust height automatically
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="395"
          image={image}
          alt="green iguana"
          sx={{
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            ":hover": {
              transform: "scale(1.1)",
            },
            "@media (max-width: 600px)": {
              width: "190px",
              height: "190px",
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="card"
            component="div"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "14px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "justify",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
