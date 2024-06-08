
import ViewMoreCard from "@/components/ViewMoreCard";
import StyledInput from "@/ui/StyledInput";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function page() {
  
  return (
    <Box marginTop={20} padding={4}>
      <Typography variant="h1" textTransform="uppercase">
        THE TRANSFORMATION OF A GULLY BOY
      </Typography>
      <Typography variant="cardHead" fontWeight={"400"}>
        Lorem ipsum dolor sit amet consectetur. A enim nun{" "}
      </Typography>
      <Stack justifyContent={"space-between"} marginTop={2} marginBottom={2}>
        <Typography variant="h5" fontWeight={"700"}>
          by John Doe
        </Typography>
        <Typography></Typography>
      </Stack>

      <img src="/Blog/Blog.png" width={"100%"} height={"641px"} alt="img" />

      <Grid container spacing={6} paddingTop={6}>
        <Grid item xs={2}>
          <Typography variant="h5" fontWeight={"700"}>
            Table of Contents
          </Typography>
          <Stack spacing={2} paddingTop={2}>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet cons?
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolorsLorem ipsum dolorsLorem ipsum dolors?
            </Typography>
            <Typography variant="h6">
              Lorem ipsum ipsum dolorsLorem ipsum dolors?
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet cons?
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolorsLorem ipsum dolorsLorem ipsum dolors?
            </Typography>
            <Typography variant="h6">
              Lorem ipsum ipsum dolorsLorem ipsum dolors?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Typography variant="h2">Lorem ipsum dolor sit am ?</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in nulla amet
              fames eget donec ante consequat sed. Vel pellentesque nulla sem ac
              vestibulum non vulputate massa. Vitae cras sed sapien interdum at.
              Eget pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque sit amet consecteturdiam velit commodo fames
              consequat rnare{" "}
            </Typography>
            <Typography variant="h2">Lorem ipsum dolor sit am ?</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in nulla amet
              fames eget donec ante consequat sed. Vel pellentesque nulla sem ac
              vestibulum non vulputate massa. Vitae cras sed sapien interdum at.
              Eget pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque sit amet consecteturdiam velit commodo fames
              consequat rnare{" "}
            </Typography>
            <Typography variant="h2">Lorem ipsum dolor sit am ?</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in nulla amet
              fames eget donec ante consequat sed. Vel pellentesque nulla sem ac
              vestibulum non vulputate massa. Vitae cras sed sapien interdum at.
              Eget pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque sit amet consecteturdiam velit commodo fames
              consequat rnare{" "}
            </Typography>
            <Typography variant="h2">Lorem ipsum dolor sit am ?</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in nulla amet
              fames eget donec ante consequat sed. Vel pellentesque nulla sem ac
              vestibulum non vulputate massa. Vitae cras sed sapien interdum at.
              Eget pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque sit amet consecteturdiam velit commodo fames
              consequat rnare{" "}
            </Typography>
            <Typography variant="h2">Lorem ipsum dolor sit am ?</Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur. Rhoncus in nulla amet
              fames eget donec ante consequat sed. Vel pellentesque nulla sem ac
              vestibulum non vulputate massa. Vitae cras sed sapien interdum at.
              Eget pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque diam velit commodo fames consequat rnare tibulum non
              vulputate massa. Vitae cras sed sapien interdum at. Eget
              pellentesque nisl ultricies pellentesque. Maecenas cras
              pellentesque sit amet consecteturdiam velit commodo fames
              consequat rnare{" "}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Typography variant="h5">Join Our NewsLetter</Typography>
            <StyledInput
              placeholder={"Enter Your Email"}
              backgroundColor={"background.paper"}
            />
            <Button variant="navbar" fullWidth>
              Submit
            </Button>
            <Typography variant="h9">
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="h4">You May Also Like</Typography>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item xs={4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
        <Grid item xs={4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
        <Grid item xs={4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
      </Grid>

    </Box>
  );
}
export default page;
