import React, { useState, useEffect } from "react";
import { Typography, MobileStepper, Grid, IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

const Carousel = ({ items }) => {
  const maxSteps = items.length;
  const [activeStep, setActiveStep] = useState(0);
  const [zoomedOut, setZoomedOut] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setZoomedOut(true);
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setZoomedOut(true);
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      handleBack();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  const handleClick = () => {
    navigate('/viewcourses');
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext(); // Auto slide to the next image
    }, 5000); // Change slide every 5 seconds

    const zoomOutTimeout = setTimeout(() => {
      setZoomedOut(false); // Auto zoom out after 5 seconds
    }, 5000);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(zoomOutTimeout);
    };
  }, [activeStep]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Grid item xs={12} sx={{ position: "relative" }}>
        <img
          src={items[activeStep].imgPath}
          alt={items[activeStep].label}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            transform: zoomedOut ? "scale(1.2)" : "scale(1)",
            transition: "transform 2s ease-out",
          }}
          onTransitionEnd={() => {
            if (zoomedOut) {
              setZoomedOut(false);
            }
          }}
        />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            color: "#fff",
          }}
        >
          <Grid item mx={15} justifyContent={"center"} alignItems={"center"}>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "35px",
                },
                fontWeight: 400,
                margin: {
                  xs: "0 0 10px",
                  md: "0 0 15px",
                },
              }}
            >
              {items[activeStep].title}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "38px",
                  md: "54px",
                },
                fontWeight: 600,
                margin: {
                  xs: "0 0 10px",
                  md: "0 0 15px",
                },
                maxWidth: {
                  xs: "400px",
                  md: "700px",
                },
              }}
            >
              {items[activeStep].subtitle}
            </Typography>
            <Button
              variant="contained"
              sx={{
                justifyContent: "flex-start",
                cursor: "pointer",
                padding: "10px 40px",
                fontSize: "14px",
                margin: "15px 14px 0 0",
                background: "transparent",
                border: "1.2px solid #14C38E",
                "&:hover": {
                  backgroundColor: "#14C38E",
                  color: "#000000",
                  border: "1.2px solid #14C38E",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              Learn More
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                cursor: "pointer",
                padding: "10px 40px",
                fontSize: "14px",
                margin: "15px 0 0 0px",
                backgroundColor: "#14C38E",
                "&:hover": {
                  backgroundColor: "#00FFAB",
                  color: "#000000",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
              onClick={handleClick}
            >
              View Courses
            </Button>
          </Grid>
        </Grid>

        {/* Navigation arrows */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
          }}
        >
          <Grid item>
            <IconButton
              size="medium"
              onClick={handleBack}
              disabled={maxSteps <= 1}
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <KeyboardArrowLeftRoundedIcon
                sx={{
                  fontSize: "80px",
                  padding: "10px",
                  color: "#14C38E",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              size="medium"
              onClick={handleNext}
              disabled={maxSteps <= 1}
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <KeyboardArrowRightRoundedIcon
                sx={{
                  fontSize: "80px",
                  padding: "10px",
                  color: "#14C38E",
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
        {/* Dots */}
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            "& .MuiMobileStepper-dotActive": {
              width: "16px",
              height: "16px",
              margin: "0 4px",
              backgroundColor: "#14C38E",
            },
            "& .MuiMobileStepper-dot": {
              width: "10px",
              height: "10px",
              margin: "0 4px",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Carousel;
