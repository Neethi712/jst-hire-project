import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F9F9F9",
        padding: {
          xs: "100px 10px 85px",
          md: "120px 0 105px",
        },
      }}
    >
      <Grid
        container
        sx={{
          margin: "0 auto",
          maxWidth: {
            xs: "400px",
            md: "1170px",
          },
        }}
      >
        <Typography>footer</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
