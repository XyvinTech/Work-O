'use client'
import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { mont } from "@/theme";

const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
`;

const StyledSelectField = ({ placeholder,options, onChange,value }) => {

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20));",
      borderRadius: "4px",
      backgroundColor:  "#2F2F2F" ,
      color: "#FFFFFF",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      fontFamily: mont.style.fontFamily,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Remove the separator
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#FF0000" : " #FF0000",
      color: state.isFocused ? "#fff" : "#B5B8C5",
      cursor: "pointer",
      backgroundColor: state.isSelected ? "#242424" : "initial",
      fontFamily: mont.style.fontFamily,
      // fontSize:'12px'
      // Add a :active pseudo-class for selected option
      ":active": {
        backgroundColor: "#242424",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#555555",
      color: "#B5B8C5",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "##F7F8FC",
    })
  };


  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={customStyles}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
