import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const TrendingCourses = ({ imageSrc, title, content, alt }) => {
  return (
    <Grid container alignItems="flex-start">
      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          border: {
            xs: "none",
            md: "1px solid #14C38E",
          },
          padding: {
            xs: "16px 46%",
            md: "16px ",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          alt={alt}
          src={imageSrc}
          sx={{
            width: { xs: 90, md: 50 },
            height: { xs: 90, md: 50 },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        sx={{ padding: { xs: "0 0 0 0", md: "0 0 0 20px" } }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 500,
            paddingBottom: "15px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "15.4px",
            marginBottom: "15px",
            color: "#666666",
            lineHeight: 1.8,
          }}
        >
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TrendingCourses;
