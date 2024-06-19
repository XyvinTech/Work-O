import React, { useState } from 'react';
import PlatformCard from './PlatformCard';
import styled from 'styled-components';
import cardData from '../assets/json/PlatformCardData';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const ViewMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #FFF;
  color:  #FC8229;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  
`;

const PlatformCardView = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  // Determine how many cards to display based on showAllCards state
  const displayedCards = showAllCards || window.innerWidth > 600 ? cardData : cardData.slice(0, 5);

  return (
    <>
      <GridContainer>
        {displayedCards.map((card, index) => (
          <PlatformCard 
            key={index} 
            title={card.title} 
            icon={card.icon} 
            number={card.number} 
          />
        ))}
      </GridContainer>
      {!showAllCards && window.innerWidth <= 600 && (
        <ViewMoreButton onClick={toggleShowAllCards}>
          View More
        </ViewMoreButton>
      )}
    </>
  );
}

export default PlatformCardView;
