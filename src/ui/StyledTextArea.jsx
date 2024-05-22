"use client";
import styled from "styled-components";
import { mont } from "@/theme";

const TextArea = styled.textarea`
  font-family: ${mont.style.fontFamily};
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #2F2F2F;
  border-radius: 8px;
  background-color: #2F2F2F;
  color: #b0b0b0;
  font-size: 16px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;


const StyledTextArea = ({ placeholder, onChange }) => {
  return <TextArea placeholder={placeholder} onChange={onChange} />;
};

export default StyledTextArea;
