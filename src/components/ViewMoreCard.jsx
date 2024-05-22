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
        width: "100%",
        height: "514px",
        padding: "30px",
        gap: "21px",
        margin: "auto",
        boxShadow: "none",
        background: "white",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: 0,
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
