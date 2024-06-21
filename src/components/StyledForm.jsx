"use client";
import React, { useState } from "react";
import styled from "styled-components";

import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import StyledTextArea from "@/ui/StyledTextArea";
import ToolTipIcon from "../assets/icons/tooltip.svg";
import {
  Grid,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
  Modal,
  Box,
} from "@mui/material";
import { mont } from "@/theme";
import StyledRadioButton from "@/ui/StyledRadioButton";
import { getIndiaState, getIndiaDistrict } from "india-state-district";
import StyledSelectField from "@/ui/StyledSelect";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

const StyledForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedForm, setSelectedForm] = useState("form1");
  const [selectedState, setSelectedState] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const states = getIndiaState().map(({ state, code }) => ({
    value: code,
    label: state,
  }));

  const handleRadioChange = (event) => {
    setSelectedForm(event.target.value);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    const districts = getIndiaDistrict(selectedOption.value).map(
      (district) => ({ value: district, label: district })
    );
    setDistrictOptions(districts);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      state: data.state.label,
      district: data.district.label,
    };
    console.log(formattedData);
    handleOpen();
    reset();
  };
  const handleBackToHome = () => {
    handleClose();
    router.push("/");
  };
  const StyledLabel = styled.span`
    font-family: ${mont.style.fontFamily};
    font-weight: 900;
    font-size: 13px;
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
      <Stack
        direction={isMobile ? "column" :isTablet?"column": "row"}
        spacing={2}
        // alignItems="center"
      >
        <Stack direction={"row"} spacing={0} justifyContent={isTablet?"flex-start":"space-between"}>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                <FormControlLabel
                  value="form1"
                 
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Business enquiry
                      <StyledToolTipIcon />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl> <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <HtmlTooltip
                placement="bottom"
                title={
                  <>
                    <Typography variant="h7">Service Partner</Typography>
                    <br />
                    <br />
                    <Typography variant="h8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                <FormControlLabel
                  value="form3"
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Service Partner
                      <StyledToolTipIcon />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
         
        </Stack>
        <Stack direction={"row"}justifyContent={isTablet?"flex-start":"space-between"}spacing={2}>
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
                      <StyledToolTipIcon />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <HtmlTooltip
                placement="bottom"
                title={
                  <>
                    <Typography variant="h7">
                      Candidates For Training
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique
                    </Typography>
                  </>
                }
              >
                <FormControlLabel
                  value="form4"
                  control={<StyledRadioButton />}
                  label={
                    <StyledLabel>
                      Candidates For Training
                      <StyledToolTipIcon />
                    </StyledLabel>
                  }
                />
              </HtmlTooltip>
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>

      {selectedForm === "form1" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={isMobile ? 12 : 6}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="First Name" />
                    {errors.firstName && (
                      <Typography color="error">
                        {errors.firstName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={isMobile ? 12 : 6}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Last Name" />
                    {errors.lastName && (
                      <Typography color="error">
                        {errors.lastName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Email ID" />
                    {errors.email && (
                      <Typography color="error">
                        {errors.email.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <div>
                    <StyledPhoneInput {...field} />{" "}
                    {errors.phoneNumber && (
                      <Typography color="error">
                        {errors.phoneNumber.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledTextArea
                      {...field}
                      placeholder="Add a Description/Enquiry"
                    />{" "}
                    {errors.description && (
                      <Typography color="error">
                        {errors.description.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="State"
                      options={states}
                      onChange={(value) => {
                        field.onChange(value);
                        handleStateChange(value);
                      }}
                      value={selectedState}
                    />
                    {errors.state && (
                      <Typography color="error">
                        {errors.state.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="District"
                      options={districtOptions}
                      onChange={(e) => field.onChange(e)}
                    />
                    {errors.district && (
                      <Typography color="error">
                        {errors.district.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
          </Grid>{" "}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button fullWidth={isMobile} variant="navbar" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      )}

      {selectedForm === "form2" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Full Name" />
                    {errors.fullName && (
                      <Typography color="error">
                        {errors.fullName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Email ID" />
                    {errors.email && (
                      <Typography color="error">
                        {errors.email.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <div>
                    <StyledPhoneInput {...field} />{" "}
                    {errors.phoneNumber && (
                      <Typography color="error">
                        {errors.phoneNumber.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledTextArea
                      {...field}
                      placeholder="Add a Description/Enquiry"
                    />{" "}
                    {errors.description && (
                      <Typography color="error">
                        {errors.description.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="State"
                      options={states}
                      onChange={(value) => {
                        field.onChange(value);
                        handleStateChange(value);
                      }}
                      value={selectedState}
                    />
                    {errors.state && (
                      <Typography color="error">
                        {errors.state.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="District"
                      options={districtOptions}
                      onChange={(e) => field.onChange(e)}
                    />
                    {errors.district && (
                      <Typography color="error">
                        {errors.district.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
          </Grid>{" "}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button fullWidth={isMobile} variant="navbar" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      )}

      {selectedForm === "form3" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <Controller
                name="partnerName"
                control={control}
                defaultValue=""
                rules={{ required: "Partner Name is required" }}
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Partner Name" />
                    {errors.partnerName && (
                      <Typography color="error">
                        {errors.partnerName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Company ID" />
                    {errors.email && (
                      <Typography color="error">
                        {errors.email.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <div>
                    <StyledPhoneInput {...field} />{" "}
                    {errors.phoneNumber && (
                      <Typography color="error">
                        {errors.phoneNumber.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledTextArea
                      {...field}
                      placeholder="Add a Description/Enquiry"
                    />{" "}
                    {errors.description && (
                      <Typography color="error">
                        {errors.description.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="State"
                      options={states}
                      onChange={(value) => {
                        field.onChange(value);
                        handleStateChange(value);
                      }}
                      value={selectedState}
                    />
                    {errors.state && (
                      <Typography color="error">
                        {errors.state.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="District"
                      options={districtOptions}
                      onChange={(e) => field.onChange(e)}
                    />
                    {errors.district && (
                      <Typography color="error">
                        {errors.district.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
          </Grid>{" "}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button fullWidth={isMobile} variant="navbar" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      )}
      {selectedForm === "form4" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Full Name" />
                    {errors.fullName && (
                      <Typography color="error">
                        {errors.fullName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Email ID" />
                    {errors.email && (
                      <Typography color="error">
                        {errors.email.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{ required: "Phone Number is required" }}
                render={({ field }) => (
                  <div>
                    <StyledPhoneInput {...field} />{" "}
                    {errors.phoneNumber && (
                      <Typography color="error">
                        {errors.phoneNumber.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledTextArea
                      {...field}
                      placeholder="Add a Description/Enquiry"
                    />{" "}
                    {errors.description && (
                      <Typography color="error">
                        {errors.description.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="State"
                      options={states}
                      onChange={(value) => {
                        field.onChange(value);
                        handleStateChange(value);
                      }}
                      value={selectedState}
                    />
                    {errors.state && (
                      <Typography color="error">
                        {errors.state.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <div>
                    <StyledSelectField
                      {...field}
                      placeholder="District"
                      options={districtOptions}
                      onChange={(e) => field.onChange(e)}
                    />
                    {errors.district && (
                      <Typography color="error">
                        {errors.district.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
          </Grid>{" "}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button fullWidth={isMobile} variant="navbar" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      )}
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Typography variant="h6" fontWeight={"600"} color={"#ffffff"}>
            Your Submission Has Been Successfull
          </Typography>
          <img src="/Home/Remaining/Tick.png" alt="Tick" />
          <Typography variant="h7" color={"#B2B0B0"}>
            Our team will call you shortly
          </Typography>
          <Button variant="navbar" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StyledForm;
const ModalContent = styled(Box)(() => ({
  position: "absolute",
  top: "52%",
  left: "65%",
  height: "583px",
  gap: "30px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1B1B18",
  padding: "80px",
  boxShadow: 24,
  p: 4,
  "@media (max-width:600px)": {
    width: "100%",
    left: "50%",
    padding: "30px",
    height: "483px",
  },
}));
