"use client";

import { Box } from "@mui/material";
import styles from "../../Styles/home/PromiseCardView.module.css";
import PromiseCard from "@/ui/home/PromiseCard";

const PromiseCardView = ({ viewMoreData }) => {
  return (
    <Box className={styles.viewMoreContainer}>
      {viewMoreData.map((item, index) => (
        <PromiseCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </Box>
  );
};

export default PromiseCardView;
