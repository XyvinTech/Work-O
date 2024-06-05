import React from "react";
import {  Typography } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from "../assets/icons/ArrowIcon.svg"
import DOMPurify from "dompurify";
const StyledCard = styled.div`
  width: 100%;
  height: 532px;
  padding: 20px;
  gap: 21px;
  margin: auto;
  box-shadow: none;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0;
`;

const StyledCardMedia = styled.div`
  height: 240px;
  padding-bottom: 56.25%;
  background-color: rgba(0, 0, 0, 0.08);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;



const StyledCardContent = styled.div`
  color: black;
  padding-bottom:15px;
`;

const DateTypography = styled(Typography)`
  color: #fc8229;
  text-align: justify;
  font-weight: 600;
  margin-top: 15px;
`;

const TitleTypography = styled(Typography)`
  text-align: justify;
  margin-top: 15px;
`;

const DescriptionTypography = styled(Typography)`
  margin-top: 15px;
  margin-bottom: 15px;
  max-height: 80%; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ViewMoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover .view-more-icon {
    visibility: visible;
    margin-left: 8px;
  }
`;

const ViewMoreTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  visibility: hidden;
  transition: margin-left 0.3s ease;
`;

const BlogCard = ({ image, title, description, date }) => {
    const sanitizedDescription = DOMPurify.sanitize(description);
  return (
    <StyledCard>
      <StyledCardMedia image={image} />
      <StyledCardContent>
        <DateTypography variant="h7">{date}</DateTypography>
        <TitleTypography variant="card" component="div">
          {title}
        </TitleTypography>
        <DescriptionTypography variant="h6" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}>
          {/* {description} */}
        </DescriptionTypography>
        <ViewMoreContainer>
          <Typography variant="h7" sx={{ color: "primary.main" }}>
            View more
          </Typography>
          <StyledArrowForwardIcon className="view-more-icon" />
        </ViewMoreContainer>
       
      </StyledCardContent>
    </StyledCard>
  );
};

export default BlogCard;
