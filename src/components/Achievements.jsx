"use client"
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const reverseMarquee = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const StyledContainer = styled.div`
    overflow: hidden;
    width: 100%;
    margin-bottom: 5px;
`;

const StyledPicContainer = styled.div`
    display: flex;
    animation: ${marquee} 30s linear infinite;
`;



const StyledPic = styled.div`
    flex-shrink: 0;
    width: 300px;
    margin: 0 15px; /* Gap between images */

    @media (max-width: 768px) {
        width: 300px;
        margin:0 5px;
    }
`;

const StyledImg = styled.img`
    width: 236px;
    height: auto;
    object-fit: cover;
    border: 1px solid rgba(238, 231, 231, 0.9);
    border-radius:4px;
    @media (max-width: 768px) {
        width: 260px;
        height: auto;
    }
`;

const Achievements = ({ images }) => {
    const allImages = [...images, ...images];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box paddingTop={isMobile?5:10}marginTop={isMobile?5:10} bgcolor={'#FEEFE4'} paddingBottom={10}>
          <Typography variant='h2' paddingBottom={5} textAlign={"center"}> Our Client</Typography>
            <section id="marquee">
                <StyledContainer>
                    <StyledPicContainer>
                        {allImages.map((imageUrl, index) => (
                            <StyledPic key={index}>
                                <StyledImg src={imageUrl} alt={`img${index}`} />
                            </StyledPic>
                        ))}
                    </StyledPicContainer>
                </StyledContainer>
            </section>
          
        </Box>
    );
};

export default Achievements




