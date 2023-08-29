import { Grid, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Grid container sx={{ justifyContent: "center", alignItems: "center",  }}>
      <ExperienceCard />
    </Grid>
  );
};

export default Experience;
