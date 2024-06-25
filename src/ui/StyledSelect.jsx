'use client'
import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { mont } from "@/theme";

const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
`;

const StyledSelectField = ({ placeholder, options, onChange, value, color }) => {

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20));",
      borderRadius: "4px",
      backgroundColor: "#282828",
      color: color || "#FFFFFF",
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
      backgroundColor: state.isFocused ? "transparent" : "transparent",
      color: state.isFocused ? "#FC8229" : "#ffffff",
      cursor: "pointer",
      fontFamily: mont.style.fontFamily,
      ":active": {
        backgroundColor: "#282828",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#282828",
      color: "#B5B8C5",
      zIndex: 10,
       '@media (max-width: 600px)': { // Adjust max height for mobile devices
        position: "relative",
      }  // Ensure the menu appears above other elements
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Set a fixed height for the menu
      overflowY: "auto",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#F7F8FC",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#B5B8C5",
    }),
  };

  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={customStyles}
        value={value}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
