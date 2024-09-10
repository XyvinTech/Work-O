"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { mont } from "@/theme";

const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
 background-color: ${(props) => props.backgroundColor || "#2F2F2F"};
  padding: 8px;
  color:  ${(props) => props.backgroundColor ? "#000" : "#fff"};
`;
const CountryCodeSelect = styled.select`
  color:  ${(props) => props.backgroundColor ? "#000" : "#fff"};
 background-color: ${(props) => props.backgroundColor || "#2F2F2F"};
  border: none;
  padding: 8px;
  outline: none;
  appearance: none;
  &:focus {
    border: none;
    outline: none;
  }
  option {
   background-color: ${(props) => props.backgroundColor || "#2F2F2F"};
    color: #BDBDBD;
  }
`;

const Input = styled.input`
  font-family: ${mont.style.fontFamily};
  font-weight: 500;
  background: none;
  border: none;
  outline: none;
  color: ${(props) => props.backgroundColor ? "#000" : "#fff"};
  flex: 1;
  &::placeholder {
    color: #BDBDBD;
  }
`;

const DropIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-right: 10px;
`;

const StyledPhoneInput = ({ onChange , backgroundColor}) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
    if (onChange) {
      onChange(`${event.target.value}${phoneNumber}`);
    }
  };

  const handleChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    if (onChange) {
      onChange(`${countryCode}${newPhoneNumber}`);
    }
  };

  return (
    <PhoneNumberContainer backgroundColor={backgroundColor}>
      <CountryCodeSelect value={countryCode}backgroundColor={backgroundColor} onChange={handleCountryCodeChange}>
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
      </CountryCodeSelect>
      <DropIconContainer>
        <ArrowDropUpIcon />
        <ArrowDropDownIcon />
      </DropIconContainer>
      <Input placeholder="Enter Phone number" onChange={handleChange} backgroundColor={backgroundColor} />
    </PhoneNumberContainer>
  );
};

export default StyledPhoneInput;
