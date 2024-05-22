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
          backgroundColor: backgroundColor || "text.background",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "1px solid #2F2F2F",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "text.background",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2F2F2F",
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
