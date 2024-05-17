import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
const ServiceCard = () => {
  return (
    <Card sx={{ width:"400px",height:"559px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="395"
          image="/img1.png"
          alt="green iguana"
          sx={{
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            ':hover': {
                transform: "scale(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="card"
            component="div"
          >
            Networking
          </Typography>
          <Typography variant="h6" sx={{textAlign:"justify"}} color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
