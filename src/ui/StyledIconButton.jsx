"use client";
import { Button } from "@mui/material";
import styled from "styled-components";

const RoundIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 135px;
  border: 1px solid #fc8229;
`;

const StyledIconButton = ({ icon: Icon, buttonText }) => {
  return (
    <Button
      variant="outlined"
     
      startIcon={
        <RoundIcon>
          <Icon />
        </RoundIcon>
      }
    >
      {buttonText}
    </Button>
  );
};

export default StyledIconButton;
