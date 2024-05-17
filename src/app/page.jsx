import Navbar from "@/components/Navbar";
import StyledInput from "@/ui/StyledInput";
import StyledPhoneInput from "@/ui/StyledPhoneInput";
import StyledRadioButton from "@/ui/StyledRadioButton";
import StyledSelect from "@/ui/StyledSelect";
import StyledTabs from "@/ui/StyledTabs";
import StyledTextArea from "@/ui/StyledTextArea";
import { Button, Typography } from "@mui/material";

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
      </Button><br /><br />
      <StyledInput placeholder="First Name" /><br /><br />
      <StyledPhoneInput />
      <StyledSelect options={options} placeholder="Select an option" />
      <StyledTextArea placeholder="Add a description/enquiry (less than 500 words)"/>
      <StyledRadioButton/><br /><br /><br>
      </br>
      <StyledTabs/>
      <Navbar />
    </>
  );
}
