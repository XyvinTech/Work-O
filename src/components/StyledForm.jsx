"use client";
import { useState } from "react";
import styled from "styled-components";
import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import StyledTextArea from "@/ui/StyledTextArea";
import ToolTipIcon from "../assets/icons/tooltip.svg";

import {
  Grid,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Typography,
} from "@mui/material";
import { mont } from "@/theme";
import StyledRadioButton from "@/ui/StyledRadioButton";

const StyledForm = () => {
  const [selectedForm, setSelectedForm] = useState("form1");

  const handleRadioChange = (event) => {
    setSelectedForm(event.target.value);
  };
  const StyledLabel = styled.span`
    font-family: ${mont.style.fontFamily};
    font-weight: 900;
    font-size: 16px;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      font-size: 12px;
      font-weight: 500;
    }
  `;
  const StyledToolTipIcon = styled(ToolTipIcon)`
    margin-left: 6px;
    margin-top: 4px;
    @media (max-width: 600px) {
      margin: 0px;
    }
  `;
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "text.secondary",
      color: "white",
      maxWidth: 220,

      border: "none",
      borderRadius: "4px",
    },
  }));
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <HtmlTooltip
                placement="bottom"
                title={
                  <>
                    <Typography variant="h7">Business enquiry</Typography>
                    <br />
                    <br />
                    <Typography variant="h8">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                {" "}
                <FormControlLabel
                  value="form1"
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Business enquiry
                      <StyledToolTipIcon  />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <HtmlTooltip
                placement="bottom"
                title={
                  <>
                    <Typography variant="h7">Customer</Typography>
                    <br />
                    <br />
                    <Typography variant="h8">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                <FormControlLabel
                  value="form2"
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Customer
                      <StyledToolTipIcon  />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <HtmlTooltip
                placement="bottom"
                title={
                  <>
                    <Typography variant="h7">Service Partner</Typography>
                    <br />
                    <br />
                    <Typography variant="h8">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                {" "}
                <FormControlLabel
                  value="form3"
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Service Partner
                      <StyledToolTipIcon  />
                    </StyledLabel>
                  }
                />{" "}
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      {selectedForm === "form1" && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledInput placeholder="First Name" />
          </Grid>
          <Grid item xs={6}>
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
            <StyledSelectField placeholder="State" />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectField placeholder="District" />
          </Grid>
        </Grid>
      )}

      {selectedForm === "form2" && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledInput placeholder="Full Name" />
          </Grid>
          <Grid item xs={12}>
            <StyledInput placeholder="Email ID" />
          </Grid>
          <Grid item xs={12}>
            <StyledPhoneInput />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectField placeholder="State" />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectField placeholder="District" />
          </Grid>
          <Grid item xs={12}>
            <StyledTextArea placeholder="Add a Description/Enquiry" />
          </Grid>
        </Grid>
      )}

      {selectedForm === "form3" && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledInput placeholder="Partner Name" />
          </Grid>
          <Grid item xs={12}>
            <StyledInput placeholder="Company ID" />
          </Grid>
          <Grid item xs={12}>
            <StyledPhoneInput />
          </Grid>

          <Grid item xs={6}>
            <StyledSelectField placeholder="State" />
          </Grid>
          <Grid item xs={6}>
            <StyledSelectField placeholder="District" />
          </Grid>
          <Grid item xs={12}>
            <StyledTextArea placeholder="Add a Description/Enquiry" />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default StyledForm;
