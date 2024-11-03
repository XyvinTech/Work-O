"use client";

import { Box } from "@mui/material";
import styles from "../../Styles/about/VisionCardView.module.css"; 
import VisionCard from "@/ui/about/VisionCard";

const VisionCardView = ({ viewMoreData }) => {
  return (
    <Box className={styles.viewMoreContainer}>
      {viewMoreData.map((item, index) => (
        <VisionCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </Box>
  );
};

export default VisionCardView;
