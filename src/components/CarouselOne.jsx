"use client"
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
    margin-bottom: 5px; /* Space between the two marquees */
`;

const StyledPicContainer = styled.div`
    display: flex;
    animation: ${marquee} 20s linear infinite;
`;

const StyledReversePicContainer = styled.div`
    display: flex;
    animation: ${reverseMarquee} 20s linear infinite;
`;

const StyledPic = styled.div`
    flex-shrink: 0;
    width: 216px;
    margin: 0 5px; /* Gap between images */

    @media (max-width: 768px) {
        width: 104px;
        margin:0 2px;
    }
`;

const StyledImg = styled.img`
    width: 216px;
    height: 180px;
    object-fit: cover;
    border: 1px solid rgba(238, 231, 231, 0.9);

    @media (max-width: 768px) {
        width: 104px;
        height: 90px;
    }
`;

const CarousalOne = ({ images }) => {
    // Duplicate images to ensure seamless scrolling
    const allImages = [...images, ...images];

    return (
        <div>
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
            <section id="reverse-marquee">
                <StyledContainer>
                    <StyledReversePicContainer>
                        {allImages.map((imageUrl, index) => (
                            <StyledPic key={index}>
                                <StyledImg src={imageUrl} alt={`img${index}`} />
                            </StyledPic>
                        ))}
                    </StyledReversePicContainer>
                </StyledContainer>
            </section>
        </div>
    );
};

export default CarousalOne




