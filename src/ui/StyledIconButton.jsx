"use client";
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

// Define a styled component for the icon
const RoundIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; /* Adjust size as needed */
  height: 32px; /* Adjust size as needed */
  border-radius: 135px ;
  border:1px solid #FC8229
`;

const StyledIconButton = ({ icon: Icon, buttonText }) => {
  return (
    <Button
      variant="outlined"
      startIcon={
        <RoundIcon>
          <Icon />
        </RoundIcon >
      }
    >
      {buttonText}
    </Button>
  );
};

export default StyledIconButton;
