import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const FooterSub = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#14C38E",
        padding: {
          xs: "100px 10px 85px",
          md: "20px 0",
        },
      }}
    >
      <Grid
        container
        columnSpacing={3}
        sx={{
          margin: "0 auto",
          maxWidth: {
            xs: "400px",
            sm: "790px",
            md: "1200px",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "400", color: "#FFFFFF" }}
          >
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved
            By JstHire
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={5} sx={{ display: "flex" }}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                marginRight: "10px",
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              terms of user
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#FFFFFF" }}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                marginLeft: "-25px",
                marginRight: "5px",
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              licence
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#FFFFFF", marginX: "10px" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                marginLeft: "-65px",
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              support
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterSub;
