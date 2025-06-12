import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { getIndiaState, getIndiaDistrict } from "india-state-district";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const LandingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
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
    { value: "Refrigerator Repair", label: "Refrigerator Repair" },
    { value: "Refrigerator Servicing", label: "Refrigerator Servicing" },
    { value: "Refrigerator Installation", label: "Refrigerator Installation" },
    { value: "Geyser Repair", label: "Geyser Repair" },
    { value: "Geyser Servicing", label: "Geyser Servicing" },
    { value: "Geyser Installation", label: "Geyser Installation" },
    { value: "Washing Machine Repair", label: "Washing Machine Repair" },
    { value: "Washing Machine Servicing", label: "Washing Machine Servicing" },
    {
      value: "Washing Machine Installation",
      label: "Washing Machine Installation",
    },
    { value: "Networking Solutions", label: "Networking Solutions" },
    { value: "CCTV Installation", label: "CCTV Installation" },
    { value: "CCTV Monitoring", label: "CCTV Monitoring" },
  ];
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

  const router = useRouter();
  const onSubmit = async (data) => {
    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("firstName",data?.firstName);
    formData.append("lastName", data?.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("message", data.description);
    formData.append("state", data.state?.label);
    formData.append("service", service.label);
    formData.append("district", data.district?.label);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      reset();
      setSelectedCourse(null);
      setService(null);
      setSelectedState(null);
      setDistrictOptions([]);
      router.push("/thank");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} bgcolor="#F2F2F2">
        <Box
          bgcolor={"#F2F2F2"}
          padding={isMobile ? "20px" : "20px"}
          pt={"0px"}
          pb={"0px"}
          borderRadius={"4px"}
        >
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={isMobile ? 12 : 12}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <div>
                    <StyledInput
                      {...field}
                      placeholder="First Name"
                      backgroundColor={"white"}
                    />
                    {errors.firstName && (
                      <Typography color="error">
                        {errors.firstName.message}
                      </Typography>
                    )}
                  </div>
                )}
              />
            </Grid>
            <Grid item xs={isMobile ? 12 : 12}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledInput
                      {...field}
                      placeholder="Last Name"
                      backgroundColor={"white"}
                    />
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
                    <StyledInput
                      {...field}
                      placeholder="Email ID"
                      backgroundColor={"white"}
                    />
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
                    <StyledPhoneInput {...field} backgroundColor={"white"} />{" "}
                    {errors.phoneNumber && (
                      <Typography color="error">
                        {errors.phoneNumber.message}
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
                      backgroundColor={"white"}
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
                      backgroundColor={"white"}
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
            <Grid item xs={12}>
              <Controller
                name="service"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <StyledSelectField
                    label="Service"
                    backgroundColor={"white"}
                    options={services}
                    placeholder={"Service"}
                    value={service}
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
          </Grid>{" "}
          <Stack justifyContent={"center"} direction={"row"} py={3}>
            <Button
              variant="navbar"
              type="submit"
              fullWidth
            >
              Book your expert now
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default LandingForm;
