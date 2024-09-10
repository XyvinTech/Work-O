import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, backgroundColor,onChange }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        placeholder={placeholder}
        onChange={onChange} 
        sx={{
          width: "100%",
          padding: "2px",
          backgroundColor: backgroundColor || "text.background",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20))",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20))",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid var(--White-20, rgba(255, 255, 255, 0.20))",
          },
          "& .MuiInputBase-input": {
            color: backgroundColor ? "#000" : "background.paper",
            padding: "14px",
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
