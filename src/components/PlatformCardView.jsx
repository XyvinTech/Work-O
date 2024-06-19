import React from 'react';
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
    grid-template-columns: 1fr; 
  }

`;

const PlatformCardView = () => {
  return (
    <GridContainer>
      {cardData.map((card, index) => (
        <PlatformCard 
          key={index} 
          title={card.title} 
          icon={card.icon} 
          number={card.number} 
        />
      ))}
    </GridContainer>
  );
}

export default PlatformCardView;
