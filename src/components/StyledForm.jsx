"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/Form.module.css";
import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledTextArea from "@/ui/StyledTextArea";
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
import StyledRadioButton from "@/ui/StyledRadioButton";
import { getIndiaState, getIndiaDistrict } from "india-state-district";
import StyledSelectField from "@/ui/StyledSelect";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useServiceStore } from "@/Store/ServiceStore";

const StyledForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { selectedService } = useServiceStore();
  const [selectedForm, setSelectedForm] = useState("Business enquiry");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [service, setService] = useState(selectedService);
  const [districtOptions, setDistrictOptions] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const states = getIndiaState().map(({ state, code }) => ({
    value: code,
    label: state,
  }));

  const services = [
    { value: "AC Repair", label: "AC Repair" },
    {
      value: "AC Installation",
      label: "AC Installation",
    },
    { value: "AC Maintenance", label: "AC Maintenance" },
    {
      value: "Washing Machine Repair",
      label: "Washing Machine Repair",
    },
    { value: "Appliances Repair", label: "Appliances Repair" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Hair Services", label: "Hair Services" },
    { value: "Makeup Services", label: "Makeup Services" },
    { value: "Spa Services", label: "Spa Services" },
    { value: "Networking Solutions", label: "Networking Solutions" },
    { value: "CCTV Installation", label: "CCTV Installation" },
    { value: "CCTV Monitoring", label: "CCTV Monitoring" },
  ];
  const courses = [
    { value: "Assistant Electrician", label: "Assistant Electrician" },
    {
      value: "DTH & CCTV Installation Technician",
      label: "DTH & CCTV Installation Technician",
    },
    { value: "Home Appliance Technician", label: "Home Appliance Technician" },
    {
      value: "GST Accounts Assistant & Tally",
      label: "GST Accounts Assistant & Tally",
    },
    { value: "Cutting & Tailoring", label: "Cutting & Tailoring" },
    { value: "Mobile Repairing", label: "Mobile Repairing" },
    { value: "AC / Refrigerator Repair", label: "AC / Refrigerator Repair" },
    { value: "Beautician", label: "Beautician" },
  ];
  useEffect(() => {}, [service, services]);
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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("selectedForm", selectedForm);
    formData.append("name", `${data?.firstName} ${data?.lastName}`);
    formData.append("fullname", data?.fullName);

    formData.append("email", data?.email);
    formData.append("phoneNumber", data?.phoneNumber);
    formData.append("message", data?.description);
    formData.append("state", data?.state?.label);
    formData.append("district", data?.district?.label);
    formData.append("partnerName", data?.partnerName);
    formData.append("companyId", data?.companyId);

    if (selectedCourse && selectedCourse.length > 0) {
      selectedCourse.forEach((course) => {
        formData.append("courses[]", course.label);
      });
    }
    if (service) {
      formData.append("service", service);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      // console.log(responseData.message);
      // alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      // alert("Error, please try resubmitting the form");
    }

    handleOpen();
    reset();
  };
  const handleBackToHome = () => {
    handleClose();
    router.push("/");
  };
  return (
    <div>
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
        spacing={2}
        // alignItems="center"
      >
        <Stack
          direction={"row"}
          spacing={0}
          justifyContent={isTablet ? "flex-start" : "space-between"}
        >
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
              <FormControlLabel
                value="Business enquiry"
                control={<StyledRadioButton />}
                label={
                  <span className={styles.styledLabel}>Business enquiry</span>
                }
              />
            </RadioGroup>
          </FormControl>{" "}
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
            
                <FormControlLabel
                  value="Service Partner"
                  control={<StyledRadioButton />}
                  label={
                    <span className={styles.styledLabel}>
                      Service Partner
                    </span>
                  }
                />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={isTablet ? "flex-start" : "space-between"}
          spacing={2}
        >
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
            
                <FormControlLabel
                  value="Customer"
                  control={<StyledRadioButton />}
                  label={
                    <span className={styles.styledLabel}>
                      Customer
                    </span>
                  }
                />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <RadioGroup row value={selectedForm} onChange={handleRadioChange}>
             
                <FormControlLabel
                  value="Candidates For Training"
                  control={<StyledRadioButton />}
                  label={
                    <span className={styles.styledLabel}>
                      Candidates For Training
                    </span>
                  }
                />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>

      {selectedForm === "Business enquiry" && (
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

      {selectedForm === "Customer" && (
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

      {selectedForm === "Service Partner" && (
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
                name="companyId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput {...field} placeholder="Company ID" />
                    {errors.companyId && (
                      <Typography color="error">
                        {errors.companyId.message}
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
      {selectedForm === "Candidates For Training" && (
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
                name="course"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <StyledSelectField
                    label="Course"
                    isMulti
                    options={courses}
                    placeholder={"Course"}
                    value={selectedCourse}
                    onChange={(selectedOption) => {
                      setSelectedCourse(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    isClearable
                    isSearchable
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="service"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <StyledSelectField
                    label="Service"
                    options={services}
                    placeholder={"Service"}
                    value={services.find((option) => option.value === service)}
                    onChange={(selectedOption) => {
                      setService(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    isClearable
                    isSearchable
                  />
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
        <Box className={styles.modalContent}>
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
        </Box>
      </Modal>
    </div>
  );
};

export default StyledForm;
