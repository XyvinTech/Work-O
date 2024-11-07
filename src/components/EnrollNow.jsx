import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import StyledTextArea from "@/ui/StyledTextArea";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "../Styles/Form.module.css";
import { getIndiaState, getIndiaDistrict } from "india-state-district";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const EnrollNow = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedCourse, setSelectedCourse] = useState(null);
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("selectedForm", "Enroll Now");
    formData.append("firstName",data?.firstName);
    formData.append("lastName", data?.lastName);
    formData.append("email", data?.email);
    formData.append("phoneNumber", data?.phoneNumber);
    formData.append("message", data?.description);
    formData.append("state", data?.state?.label);
    formData.append("district", data?.district?.label);
    if (selectedCourse && selectedCourse.length > 0) {
      selectedCourse.forEach((course) => {
        formData.append("courses[]", course.label); 
      });
    } else {
      console.error("No courses selected.");
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
    <>
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
              name="course"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <StyledSelectField
                  isMulti
                  label="Course"
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
            Enroll Now
          </Button>
        </Stack>
      </form>
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
    </>
  );
};

export default EnrollNow;

