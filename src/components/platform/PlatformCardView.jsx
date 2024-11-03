"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import styles from "../../Styles/platform/PlatformCardView.module.css"; // Import the CSS Module
import cardData from "../../assets/json/PlatformCardData";
import PlatformCard from "./PlatformCard";

const PlatformCardView = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  // Use Material-UI's useMediaQuery hook to determine if the screen width is 600px or less
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  // Determine how many cards to display based on showAllCards and screen width
  const displayedCards = showAllCards || !isMobile ? cardData : cardData.slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {displayedCards.map((card, index) => (
          <div key={index}>
            <PlatformCard
              title={card.title}
              icon={card.icon}
              number={card.number}
            />
          </div>
        ))}
      </div>
      {!showAllCards && isMobile && (
        <button className={styles.viewMoreButton} onClick={toggleShowAllCards}>
          View More
        </button>
      )}
    </div>
  );
};

export default PlatformCardView;
