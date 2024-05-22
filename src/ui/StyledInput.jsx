import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, backgroundColor }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        placeholder={placeholder}
        
        sx={{
          width: "100%",
          padding: "3px",
          backgroundColor: backgroundColor || "text.secondary",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "background.default",
            borderWidth: "1px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "text.secondary",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "none !important",
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
