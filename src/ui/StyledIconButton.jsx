"use client";
import { Button } from "@mui/material";
import styled from "styled-components";
import { mont } from "@/theme";
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
      startIcon={
        <RoundIcon>
          <Icon />
        </RoundIcon>
      }
      sx={{
        border: "1px solid #FC8229",
        minWidth: "300px",
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: mont.style.fontFamily,
      }}
    >
      {buttonText}
    </Button>
  );
};

export default StyledIconButton;
