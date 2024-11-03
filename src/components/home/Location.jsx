"use client";
import viewMoreData from "../../assets/json/LocationData";
import { Box } from "@mui/material";
import styles from "../../Styles/home/Location.module.css";
import LocationCard from "@/ui/home/LocationCard";

const Location = () => {
  return (
    <Box className={styles.viewMoreContainer}>
      {viewMoreData.map((item, index) => (
        <LocationCard key={index} image={item.image} title={item.title} />
      ))}
    </Box>
  );
};

export default Location;
