"use client";
import "../wordpress-styles.css"
import ViewMoreCard from "@/components/ViewMoreCard";
import StyledInput from "@/ui/StyledInput";
import { Box, Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { firestore } from '../../../../firebaseConfig';
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

function Page() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [views, setViews] = useState(0);
  const [shares, setShares] = useState(0);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(
            `https://blog.workoindia.com/wp-json/wp/v2/posts/${id}`
          );
          console.log(response);
          setPost(response.data);

          const docRef = doc(firestore, "posts", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setViews(docSnap.data().views);
            setShares(docSnap.data().shares);
            await updateDoc(docRef, { views: docSnap.data().views + 1 });
          } else {
            await setDoc(docRef, { views: 1, shares: 0 });
            setViews(1);
          }


        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };

      fetchPost();
    }
  }, [id]);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <Box marginTop={isMobile ? 10 : 20} padding={4}>
      <Typography variant="h1" textTransform="uppercase">
        {post && post.title && post.title.rendered}
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

      <img
        src={post && post.jetpack_featured_media_url}
        style={{ objectFit: 'cover' }}
        width={isMobile ? "300px" : "100%"}
        height={isMobile ? "300px" : "641px"}
        alt="img"
      />

      <Grid container spacing={6} paddingTop={6}>
        <Grid item xs={isMobile ? 12 : 2}>
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
        <Grid item xs={isMobile ? 12 : 8}>
          <Stack spacing={2}>
            {post && post.content && (
              <div
                dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={isMobile ? 12 : 2}>
          <Stack spacing={2}>
            <Typography variant="h5">Join Our Newsletter</Typography>
            <StyledInput
              placeholder={"Enter Your Email"}
              backgroundColor={"background.paper"}
            />
            <Button variant="navbar" fullWidth>
              Submit
            </Button>

            <Typography variant="h9">
              <input type="checkbox" style={{ marginRight: "3px" }} />
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="h4" marginTop={5}>You May Also Like</Typography>
      <Grid container spacing={2} paddingTop={2} paddingBottom={15}>
        <Grid item xs={isMobile ? 12 : 4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <ViewMoreCard
            image="/blog/Blog.png"
            title="The transformation of a Gully Boy"
            description="Lorem ipsum dolor sit amet consectetur. A enim nunc elit ac consectetur suscipit pharetra"
            date="Sunday , 1 Jan 2024"
          />
        </Grid>
      </Grid>

      <Box marginTop={2}>
        <Typography variant="h6">Page Views: {views}</Typography>
        {/* <Button onClick={handleShare} variant="contained" color="primary">
          Share
        </Button> */}
        <Typography variant="h6">Shares: {shares}</Typography>
      </Box>
    </Box>
  );
}

export default Page;
