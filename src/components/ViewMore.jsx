"use client";
import ViewMoreCard from "./ViewMoreCard";
import viewMoreData from "../assets/json/BlogData";
import { Box } from "@mui/material";
import styled from "styled-components";

const ViewMoreContainer = styled(Box)`

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const ViewMore = () => {
  return (
    <ViewMoreContainer>
      {viewMoreData.map((item, index) => (
        <ViewMoreCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      ))}
    </ViewMoreContainer>
  );
};

export default ViewMore;
