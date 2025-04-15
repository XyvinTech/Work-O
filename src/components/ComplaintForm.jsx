import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledSelectField from "@/ui/StyledSelect";
import StyledTextArea from "@/ui/StyledTextArea";
import { mont } from "@/Theme/Theme";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getIndiaDistrict, getIndiaState } from "india-state-district";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ComplaintForm = ({ open, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const theme = useTheme();
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#1e1e1e",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#777777",
      borderRadius: "4px",
      "&:hover": {
        background: "#999999",
      },
    },
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const [complaintType, setComplaintType] = useState("app_type");
  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };
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
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("complaintType", complaintType);
    formData.append("appType", data?.appType?.label || "");
    formData.append("state", data?.state?.label || "");
    formData.append("district", data?.district?.label || "");
    formData.append("fullName", data?.fullName || "");
    formData.append("email", data?.email || "");
    formData.append("service", data?.service || "");
    formData.append("serviceProviderName", data?.serviceProviderName || "");
    formData.append("phoneNumber", data?.phoneNumber || "");
    formData.append("description", data?.description || "");
    try {
      const response = await fetch("/api/complaint", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      reset();
      onClose();
      router.push("/thank");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: "#2A2A2AE0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          width: "750px", // Add this line
          maxWidth: "750px", // Add this line
        },
      }}
    >
      <DialogTitle variant="h3" textAlign={"center"} color="#FC8229">
        {" "}
        Complaint Form
      </DialogTitle>
      <DialogContent
        sx={{
          padding: 4,
          maxHeight: "80vh",
          ...scrollbarStyles,
        }}
      >
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
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
          <Grid
            item
            xs={12}
            sx={{
              //   bgcolor: "#252525",
              //   borderRadius: "8px",
              padding: "24px",
              mb: 2,
            }}
          >
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={complaintType}
                onChange={handleComplaintTypeChange}
              >
                <Grid container spacing={4} rowSpacing={3}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="app_type"
                      control={
                        <Radio
                          sx={{
                            color: "#777777",
                            "&.Mui-checked": { color: "#FC8229" },
                            "& .MuiSvgIcon-root": { fontSize: 24 },
                          }}
                        />
                      }
                      label="App Complaint"
                      sx={{
                        color: "white",
                        "& .MuiFormControlLabel-label": {
                          fontFamily: mont.style.fontFamily,
                        },
                      }}
                    />
                    
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="service_provider_complaint"
                      control={
                        <Radio
                          sx={{
                            color: "#777777",
                            "&.Mui-checked": { color: "#FC8229" },
                            "& .MuiSvgIcon-root": { fontSize: 24 },
                          }}
                        />
                      }
                      label="Service Provider Complaint"
                      sx={{
                        color: "white",
                        "& .MuiFormControlLabel-label": {
                          fontFamily: mont.style.fontFamily,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="service_complaint"
                      control={
                        <Radio
                          sx={{
                            color: "#777777",
                            "&.Mui-checked": { color: "#FC8229" },
                            "& .MuiSvgIcon-root": { fontSize: 24 },
                          }}
                        />
                      }
                      label="Service Complaint"
                      sx={{
                        color: "white",
                        "& .MuiFormControlLabel-label": {
                          fontFamily: mont.style.fontFamily,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="other_issue"
                      control={
                        <Radio
                          sx={{
                            color: "#777777",
                            "&.Mui-checked": { color: "#FC8229" },
                            "& .MuiSvgIcon-root": { fontSize: 24 },
                          }}
                        />
                      }
                      label="Other Issues"
                      sx={{
                        color: "white",
                        "& .MuiFormControlLabel-label": {
                          fontFamily: mont.style.fontFamily,
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          {complaintType === "app_type" && (
            <>
              <Grid item xs={6}>
                <Controller
                  name="appType"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <StyledSelectField
                        {...field}
                        placeholder="Select App Type"
                        options={[
                          { value: "Android", label: "Android" },
                          { value: "iOS", label: "iOS" },
                        ]}
                        onChange={(e) => field.onChange(e)}
                      />
                    </div>
                  )}
                />
              </Grid>{" "}
            </>
          )}
          {(complaintType === "service_complaint" ||
            complaintType === "service_provider_complaint") && (
            <Grid item xs={12} mt={2}>
              <Controller
                name="service"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <StyledSelectField
                    label="Service"
                    options={services}
                    placeholder="Service"
                    //   value={services.find(option => option.value === field.value)}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption?.value || null)
                    }
                    isClearable
                    isSearchable
                  />
                )}
              />
            </Grid>
          )}
          {(complaintType === "app_type" ||
            complaintType === "service_complaint" ||
            complaintType === "other_issue") && (
            <Grid item xs={12} mt={2}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <StyledTextArea
                      {...field}
                      placeholder="Describe your issue"
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
          )}
          {complaintType === "service_provider_complaint" && (
            <>
              <Grid item xs={12} mt={2}>
                <Controller
                  name="serviceProviderName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <StyledInput
                        {...field}
                        placeholder="Service Provider Name"
                      />
                    </div>
                  )}
                />
              </Grid>{" "}
            </>
          )}
          <Button
            fullWidth={isMobile}
            variant="navbar"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ComplaintForm;
