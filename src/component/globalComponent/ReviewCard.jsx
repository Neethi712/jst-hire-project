import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const ReviewCard = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [reviews.length]);

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);
  };

  return (
    <Grid
      container
      sx={{
        position: "relative",
        maxWidth: { xs: "400px", sm: "750px", md: "1170px" },
        mx: " auto",
        justifyContent: "center",
      }}
    >
      {/* review start */}
      <Grid sx={{ display: { xs: "none", md: "block" } }}>
        <KeyboardArrowLeftRoundedIcon
          onClick={handlePrevSlide}
          sx={{
            margin: { xs: "0px", md: "0 -20px" },
            position: "absolute",
            top: "42%",
            left: "1.2%",
            backgroundColor: "#FFFFFF",
            borderRadius: "100%",
            padding: "4px",
            width: "40px",
            height: "40px",
            color: "#14C38E",
            cursor: "pointer",
          }}
        />
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ margin: "0 auto", marginBottom: "20px" }}
      >
        {reviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Grid
              container
              sx={{
                boxShadow: 3,
                borderRadius: "5px",
                maxWidth: "570px",
                padding: "30px",
                backgroundColor: "#14C38E",
                border: "1px solid #FFFFFF",
              }}
            >
              <Grid item xs={12} md={4}>
                <img
                  src={review.imageSrc}
                  alt={review.reviewerName}
                  style={{
                    maxWidth: "165px",
                    height: "auto",
                    display: "block",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  padding: { xs: "0", md: "0 0 0 20px" },
                  marginTop: { xs: "20px", md: "0" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    margin: "0 0 15px 0",
                    maxWidth: "260px",
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  {review.reviewText}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: "18px",
                    margin: "0 0 5px",
                    color: "#FFFFFF",
                  }}
                >
                  {review.reviewerName}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    color: "#FFFFFF",
                  }}
                >
                  {review.reviewerOccupation}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      {/* review end */}
      {/* <Grid container justifyContent="center">
        <KeyboardArrowLeftRounded onClick={handlePrevSlide} sx={{ fontSize: 40, cursor: "pointer" }} />
        <KeyboardArrowRightRounded onClick={handleNextSlide} sx={{ fontSize: 40, cursor: "pointer" }} />
      </Grid> */}
      <Grid sx={{ display: { xs: "none", md: "block" } }}>
        <KeyboardArrowRightRoundedIcon
          onClick={handleNextSlide}
          sx={{
            margin: "0 -4px",
            position: "absolute",
            top: "42%",
            left: { xs: "94%", md: "99%" },
            backgroundColor: "#FFFFFF",
            borderRadius: "100%",
            padding: "4px",
            width: "40px",
            height: "40px",
            color: "#14C38E",
            cursor: "pointer",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
