import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        placeholder={placeholder} // Set placeholder dynamically from prop
        sx={{
          width: "100%",
          padding:"3px",
          backgroundColor: "text.secondary", // Custom background color
          borderRadius: "8px", // Rounded corners
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "background.default",
            borderWidth: "1px", // Custom border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "text.secondary", // Custom border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "text.secondary", // Custom border color when focused
          },
          "& .MuiInputBase-input": {
            color: "background.paper",
            fontWeight: 500, // Custom font weight
            padding: "14px", // Custom padding
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
