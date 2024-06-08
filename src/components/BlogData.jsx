"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Pagination,
} from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import BlogCard from "./BlogCard";
import ForwardIcon from "../assets/icons/ForwardArrow.svg";
import BackwardIcon from "../assets/icons/BackwardArrow.svg";

const ButtonBox = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: space-between; // Align buttons to both ends
  margin-top: 20px;
  padding: 0 40px; // Add horizontal padding

  @media (max-width: 600px) {
    display: flex;
    gap: 1px;
    justify-content: flex-end;
    margin-top: 30px;
    padding-right: 10px;
  }
`;

const Container = styled(Box)`
  overflow: hidden;
`;

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const IconContainer = styled(Box)`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const BlogData = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://blog.workoindia.com/wp-json/wp/v2/posts"
      );
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(posts?.length / itemsPerPage))
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = posts?.slice(startIndex, endIndex);

  return (
    <Container>
      <HeaderContainer>
        <Typography variant="cardHead">All Blog Posts</Typography>
        <IconContainer>
          <img
            src="/Blog/Facebook.webp"
            style={{ width: "9px", height: "18px" }}
            alt="Facebook"
          />
          3.7 M
          <img
            src="/Blog/Instagram.webp"
            style={{ width: "18px", height: "18px" }}
            alt="Instagram"
          />
          2.4 M
          <img
            src="/Blog/Twitter.webp"
            style={{ width: "19px", height: "15px" }}
            alt="Twitter"
          />
          3.7 M
          <img
            src="/Blog/Youtube.webp"
            style={{ width: "22px", height: "15px" }}
            alt="YouTube"
          />
          2.4 M
        </IconContainer>
      </HeaderContainer>
      <GridContainer>
        {currentItems.map((item, index) => (
          <BlogCard
            key={index}
            image={item.jetpack_featured_media_url}
            title={item.title.rendered}
            description={item.excerpt.rendered}
            date={item.date}
            link={item.link}
          />
        ))}
      </GridContainer>
      {!isMobile && (
        <Pagination
          count={Math.ceil(posts?.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}
        />
      )}
      {!isMobile && (
        <ButtonBox>
          <Button onClick={handlePrevious} disabled={currentPage === 1}>
            <Typography
              variant="h7"
              color={currentPage === 1 ? "#ccc" : "#667085"}
            >
              &lt;&lt; previous
            </Typography>
          </Button>
          <Button onClick={handleNext} disabled={endIndex >= posts?.length}>
            <Typography
              variant="h7"
              color={endIndex >= posts?.length ? "#ccc" : "#667085"}
            >
              Next &gt;&gt;
            </Typography>
          </Button>
        </ButtonBox>
      )}
      {isMobile && (
        <ButtonBox>
          <Button onClick={handlePrevious} disabled={currentPage === 1}>
            <img
              src={
                currentPage === 1
                  ? "/images/Button1.png"
                  : "/images/Button2.png"
              }
              style={{ width: "48px", height: "48px" }}
              // onClick={previous}
              alt="Previous"
            />
          </Button>
          <Button onClick={handleNext} disabled={endIndex >= posts.length}>
            <img
              src={
                endIndex >= posts.length
                  ? "/images/Button3.png"
                  : "/images/Button.png"
              }
              style={{ width: "48px", height: "48px" }}
              alt="Next"
            />
          </Button>
        </ButtonBox>
      )}
    </Container>
  );
};

export default BlogData;
