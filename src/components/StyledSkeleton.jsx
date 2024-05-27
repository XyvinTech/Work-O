import { Skeleton, Box } from "@mui/material";
import styled from "styled-components";

const SkeletonContainer = styled(Box)`
  width: 100%;
  height:  ${(props) => props.height || '200px'}; // Default height is 200px

  margin: 10px 0;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledSkeleton = ({height}) => (
    <SkeletonContainer height={height}>
    <Skeleton variant="rectangular" width="100%" height="100%" />
  </SkeletonContainer>
);

export default StyledSkeleton