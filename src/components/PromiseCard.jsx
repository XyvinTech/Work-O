import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const PromiseCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "440px",
        height: "461px",
        padding: "30px",
        gap: "21px",
        margin: "auto",
        boxShadow: "none",
        background: "white",
        borderRadius: 0,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "&:hover": {
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
          transform: "scale(1.04)",
        },
      }}
    >
      <CardActionArea sx={{ width: "377px", height: "291px",position:"relative" }}>
        {/* <img src="/images/flower.png"/> */}
        <CardContent sx={{ color: "black" }}>
          <CardMedia
            image="/images/flower.png"
            sx={{
              height: "200px",
              width: "auto",
              position:"absolute",
              zIndex:"1",top:"0"
        
            }}
          />
          <CardMedia
            image="/images/Frame.png"
            sx={{
              height: "70px",
              width: "70px",
              marginTop: "23%",
              // backgroundColor: "rgba(0, 0, 0, 0.08)",
            }}
          />

          <Typography
            variant="card"
            sx={{ textAlign: "justify", marginTop: "15px" }}
            component="div"
          >
            Service Partners
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "justify",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            As a service partner, you play a vital role in supporting our
            mission to empower individuals through training and placement
            opportunities. Partnering with Worko allows you to leverage your
            expertise and resources to benefit our shared community. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PromiseCard;
