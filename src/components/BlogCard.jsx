"use client";
import { Typography } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from "../assets/icons/ArrowIcon.svg";
import DOMPurify from "dompurify";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const StyledCard = styled.div`
  width: 100%;
  height: 630px;
  padding: 20px;
  margin: auto;
  box-shadow: none;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    height: 650px;
  }
    @media (max-width: 768px) {
    height: 850px;
  }
`;

const StyledCardMedia = styled.div`
  height: 240px;
  background-color: rgba(0, 0, 0, 0.08);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  color: black;
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
  flex-grow: 1;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ViewMoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: auto;

  &:hover .view-more-icon {
    visibility: visible;
    margin-left: 8px;
  }
`;

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  visibility: hidden;
  transition: margin-left 0.3s ease;
`;

const BlogCard = ({ image, title, description, date, link }) => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  const formattedDate = format(parseISO(date), "EEEE, d MMM yyyy");

  return (
    <StyledCard>
      <StyledCardMedia image={image} />
      <StyledCardContent>
        <div>
          <DateTypography variant="h7">{formattedDate}</DateTypography>
          <TitleTypography variant="card" component="div">
            {title}
          </TitleTypography>
          <DescriptionTypography
            variant="h6"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          ></DescriptionTypography>
        </div>
        <ViewMoreContainer>
          <Link href={`/blog/${link}`} passHref style={{ textDecoration: "none" }}>
            <Typography variant="h7" sx={{ color: "primary.main" }}>
              View more
            </Typography>
            <StyledArrowForwardIcon className="view-more-icon" />
          </Link>
        </ViewMoreContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

export default BlogCard;
