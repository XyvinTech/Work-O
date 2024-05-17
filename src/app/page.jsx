import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import StyledAccordion from "@/components/StyledAccordion";
import ViewMoreCard from "@/components/ViewMoreCard";
import StyledInput from "@/ui/StyledInput";
import StyledRadioButton from "@/ui/StyledRadioButton";
import StyledSelect from "@/ui/StyledSelect";
import StyledTabs from "@/ui/StyledTabs";
import { Box, Button, Typography } from "@mui/material";

export default function Page() {
  const options = [
    { label: "option1 ", value: 1 },
    { label: "option2", value: 2 },
    { label: "option3", value: 3 },
    { label: "option", value: 4 },
  ];

  return (
    <>
      <Typography variant="h4">Hello world</Typography>
      <Button variant="contained" color="primary">
        Get the App
      </Button>
      <Button variant="outlined" color="primary">
        View services
      </Button>
      <br />
      <br />
      <StyledInput placeholder="First Name" />
      <br />
      <br />
      <StyledSelect options={options} placeholder="Select an option" />
      <StyledRadioButton />
      <br />
      <br />
      <br></br>
      <StyledTabs />
      <br></br>
      <Navbar />
      <StyledAccordion />
      <br></br>
      <ServiceCard /><br /><ViewMoreCard/>
    </>
  );
}
