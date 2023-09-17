import React, { useState, useEffect } from "react";
import { Typography, Grid, Divider } from "@mui/material";
import ReviewCard from "./ReviewCard";
import huma from "../../assets/images/huma.jpg";
import prokash from "../../assets/images/prokash.jpg";
import akua from "../../assets/images/akua.jpg";
import paol from "../../assets/images/paol.jpg";
import jonathon from "../../assets/images/jonathon.jpg";
import munil from "../../assets/images/munil.jpg";

const reviewsData = [
  {
    imageSrc: huma,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "druna patia",
    reviewerOccupation: "biology student",
  },
  {
    imageSrc: prokash,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "Prokash Mistry",
    reviewerOccupation: "Chemistry Student",
  },
  {
    imageSrc: akua,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "akua paul",
    reviewerOccupation: "software engineer",
  },
  {
    imageSrc: paol,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "paol dani",
    reviewerOccupation: "development student",
  },
  {
    imageSrc: jonathon,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "jonathom kiyam",
    reviewerOccupation: "react student",
  },
  {
    imageSrc: munil,
    reviewText:
      "Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise.. ",
    reviewerName: "munil paul",
    reviewerOccupation: "angular student",
  },
];
const Review = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: {
          xs: "100px 10px 85px",
          md: "120px 0 105px",
        },
        backgroundColor: "#14C58E",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "30px",
          padding: "0 0 20px",
          fontWeight: "600",
          textTransform: "capitalize",
          color: "#FFFFFF",
        }}
      >
        students review
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 0 15px",
        }}
      >
        <Divider
          sx={{
            width: "40px",
            backgroundColor: "#FFFFFF",
            height: "2px",
            marginRight: "8px",
          }}
        />
        <Divider
          sx={{ width: "40px", backgroundColor: "#FFFFFF", height: "2px" }}
        />
      </Grid>
      <Grid
        container
        sx={{
          maxWidth: { xs: "380px", sm: "550px", md: "800px" },
          mx: "auto",
          marginBottom: "50px",
        }}
      >
        <Typography variant="pre" sx={{ color: "#FFFFFF" }}>
          Able an hope of body. Any nay shyness article matters own removal
          nothing his forming. Gay own additions education satisfied the
          perpetual. If he cause manor happy. Without farther she exposed saw
          man led. Along on happy could cease green oh.
        </Typography>
      </Grid>

      {/* main card code  */}
      <ReviewCard reviews={reviewsData} />
    </Grid>
  );
};

export default Review;
