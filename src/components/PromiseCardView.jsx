"use client";

import { Box } from "@mui/material";
import styled from "styled-components";
import PromiseCard from "./PromiseCard";

const ViewMoreContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    
  }
`;


const PromiseCardView = ({viewMoreData}) => {
  return (
    <ViewMoreContainer>
      {viewMoreData.map((item, index) => (
        <PromiseCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </ViewMoreContainer>
  );
};

export default PromiseCardView;
