"use client";

import { Box } from "@mui/material";
import styled from "styled-components";
import VisionCard from "./VisionCard";

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


const VisionCardView = ({viewMoreData}) => {
  return (
    <ViewMoreContainer>
      {viewMoreData.map((item, index) => (
        <VisionCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </ViewMoreContainer>
  );
};

export default VisionCardView;
