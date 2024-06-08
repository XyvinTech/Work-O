import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import StyledTextArea from "@/ui/StyledTextArea";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { getIndiaState, getIndiaDistrict } from "india-state-district";
import { useState } from "react";


const EnrollNow = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [districtOptions, setDistrictOptions] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const states = getIndiaState().map(({ state, code }) => ({
      value: code,
      label: state,
    }));
  

    const handleStateChange = (selectedOption) => {
      setSelectedState(selectedOption);
      const districts = getIndiaDistrict(selectedOption.value).map(
        (district) => ({ value: district, label: district })
      );
      setDistrictOptions(districts);
    };
  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={isMobile ? 12 : 6}>
        <StyledInput placeholder="First Name" />
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <StyledInput placeholder="Last Name" />
      </Grid>
      <Grid item xs={12}>
        <StyledInput placeholder="Email ID" />
      </Grid>
      <Grid item xs={12}>
        <StyledPhoneInput />
      </Grid>
      <Grid item xs={12}>
        <StyledTextArea placeholder="Add a Description/Enquiry" />
      </Grid>
      <Grid item xs={6}>
        <StyledSelectField
          placeholder="State"
          options={states}
          onChange={handleStateChange}
          value={selectedState}
        />
      </Grid>
      <Grid item xs={6}>
        <StyledSelectField
          placeholder="District"
          options={districtOptions}
          onChange={(e) => console.log("Selected district:", e)}
        />
      </Grid>{" "}
    </Grid>
  );
};

export default EnrollNow;
