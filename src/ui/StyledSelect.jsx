"use client";
import { mont } from "@/Theme/Theme";
import React from "react";
import Select from "react-select";

const StyledSelectField = ({
  placeholder,
  options,
  backgroundColor,
  onChange,
  value,
  color,
  isMulti,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20));",
      borderRadius: "4px",
      backgroundColor: backgroundColor || "#282828",
      color: backgroundColor ? "#000" : "#FFFFFF",
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
      color: state.isFocused ? "#FC8229" : backgroundColor ? "#000" : "#ffffff",
      cursor: "pointer",
      fontFamily: mont.style.fontFamily,
      ":active": {
        backgroundColor: backgroundColor ? "#fff" : "#282828",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: backgroundColor ? "#fff" : "#282828",
      color: "#B5B8C5",
      zIndex: 10,
      "@media (max-width: 600px)": {
        // Adjust max height for mobile devices
        position: "relative",
      }, // Ensure the menu appears above other elements
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Set a fixed height for the menu
      overflowY: "auto",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: backgroundColor ? "#000" : "#F7F8FC",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#B5B8C5",
    }),
  };

  return (
    <Select
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
      styles={customStyles}
      value={value}
    />
  );
};

export default StyledSelectField;
