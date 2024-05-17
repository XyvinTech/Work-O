import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ViewMoreCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "440px",
        height: "514px",
        padding:"30px",
        gap:"21px",
        margin: "auto",
        boxShadow: "none",
        background: "black",
        borderRadius: 0,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        "&:hover": {
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
          transform: "scale(1.04)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          image="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
          sx={{
            paddingBottom: "56.25%",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          }}
        />
        <CardContent sx={{ color: "white" }}>
          <Typography
            variant="h7"
            sx={{ color: "primary.main", textAlign: "justify",lineHeight:"20px" }}
          >
            Sunday , 1 Jan 2024
          </Typography>
          <Typography  variant="card" sx={{textAlign:"justify",marginTop:"15px"}}  component="div">
          The transformation of a Gully Boy
          </Typography>
          <Typography variant="h6" sx={{textAlign:"justify",marginTop:"15px",marginBottom:"15px"}} >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography
            variant="h7"
            sx={{ color: "primary.main" }}
          >
            View more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ViewMoreCard;
