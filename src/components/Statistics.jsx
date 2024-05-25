"use client";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mont } from "@/theme";
import { useEffect, useState } from "react";
import axios from "axios";
// const data = [
//   {
//     workers_on_duty: 593,
//     jobs_completed: 1156,
//     locations: 8,
//     happy_customers: 5137,
//   },
// ];
const Statistics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [data,setData]=useState();
useEffect(()=>{
    const data=async()=>{
        try{
            const response=await axios.get("https://theworko.in/admin/tcapi_v1/website_dummy_data.php");
            console.log("response",response.data.data)
            setData(response.data.data)
            console.log(data)
        }
        catch(error){
            console.error(error)
        }
    }
    data();
},[])

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" height={isMobile?"237px":"0px"}>
      {data?.map((item) =>
        Object.entries(item).map(([key, value]) => (
          <Grid item xs={isMobile ? 6 : 3} key={item.id} textAlign="center">
            <Typography
              fontSize={isMobile ? "32px" : "72px"}
              fontWeight={"700"}
              color={"#FC8229"}
              fontFamily={mont.style.fontFamily}
            >
              {value}+
            </Typography>
            <Typography
              fontWeight={"500"}
              fontSize={isMobile ? "12px" : "20px"}
              fontFamily={mont.style.fontFamily}
            >
              {key}
            </Typography>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Statistics;
