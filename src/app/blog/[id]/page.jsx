"use client";
import "../wordpress-styles.css";
import ViewMoreCard from "@/components/ViewMoreCard";
import StyledInput from "@/ui/StyledInput";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import DOMPurify, { version } from "dompurify";
import Link from "next/link";
import { useParams } from "next/navigation";
import ViewIcon from "../../../assets/icons/views.svg";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import BlogCard from "@/components/BlogCard";

function Page() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [views, setViews] = useState(0);
  const [shares, setShares] = useState(0);
  const [posts, setPosts] = useState([]);

  const filteredPosts = posts?.filter((post) => post.id != id);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://blog.workoindia.com/wp-json/wp/v2/posts"
      );
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(
            `https://blog.workoindia.com/wp-json/wp/v2/posts/${id}`
          );
          const postData = response.data;
          setPost(postData);
          const authorResponse = await axios.get(
            `https://blog.workoindia.com/wp-json/wp/v2/users/${postData.author}`
          );
          setAuthor(authorResponse.data);
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
          const parser = new DOMParser();
          const contentDoc = parser.parseFromString(
            postData.content.rendered,
            "text/html"
          );
          const headingElements = contentDoc.querySelectorAll(
            "h1, h2, h3, h4, h5, h6"
          );
          const extractedHeadings = Array.from(headingElements).map(
            (heading) => ({
              id:
                heading.id ||
                heading.textContent.replace(/\s+/g, "-").toLowerCase(),
              text: heading.textContent,
              level: heading.tagName,
            })
          );
          setHeadings(extractedHeadings);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };

      fetchPost();
    }
    fetchData();
  }, [id]);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <Box marginTop={isMobile ? 10 : 20} padding={4}>
      <Typography variant="h6">
        Home &gt; Blog &gt;{" "}
        <Link
          href={"/blog"}
          style={{
            textDecoration: "underline",
            color: "#FC8229",
            textDecorationColor: "#FC8229",
          }}
        >
          {post && post.title && post.title.rendered}
        </Link>
      </Typography>
      <Typography variant="h1" marginTop={2} textTransform="uppercase">
        {post && post.title && post.title.rendered}
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        marginBottom={2}
      >
        <Typography variant="h5" fontWeight={"700"}>
          by {author && author.name}
        </Typography>
        <Box display="flex" alignItems="center">
          <ViewIcon />
          <Typography variant="h6" marginLeft={1}>
            {views} views
          </Typography>
        </Box>
      </Stack>

      <img
        src={post && post.jetpack_featured_media_url}
        style={{ objectFit: "cover" }}
        width={isMobile ? "300px" : "100%"}
        height={isMobile ? "300px" : "641px"}
        alt="img"
      />

      <Grid container spacing={6} paddingTop={6}>
        <Grid item xs={isMobile ? 12 : 2} marginTop={isMobile ? "0px" : "10px"}>
          <Typography variant="h5" fontWeight={"700"}>
            Table of Contents
          </Typography>
          <Stack spacing={2} paddingTop={2}>
            {headings.map((heading) => (
              <Typography
                key={heading.id}
                variant="h6"
                component="a"
                href={`#${heading.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {heading.text}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={isMobile ? 12 : 8}>
          <Stack spacing={0}>
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
      <Typography variant="h4" marginTop={5}>
        You May Also Like
      </Typography>
      <Grid container spacing={2} paddingTop={2} paddingBottom={15}>
        {filteredPosts?.slice(0, 3).map((item, index) => (
          <Grid item xs={isMobile ? 12 : 4} key={index}>
            <BlogCard
              image={item.jetpack_featured_media_url}
              title={item.title.rendered}
              description={item.excerpt.rendered}
              date={item.date}
              link={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Page;
