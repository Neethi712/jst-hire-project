import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import fthree from "../../assets/images/f3.jpg";
import ftwo from "../../assets/images/f2.jpg";
import fone from "../../assets/images/f1.jpg";
import GraficComponent from "./GraphicComponent";
import DataComponent from "./DataAnaComponent";
import CodecadComponent from "./Codecadcomponent";

const carouselData = [
  {
    imageUrl: fthree,
    content: <GraficComponent />,
    key: "graphic",
  },
  {
    imageUrl: ftwo,
    content: <DataComponent />,
    key: "data",
  },
  {
    imageUrl: fone,
    content: <CodecadComponent />,
    key: "codecad",
  },
  // Add more carousel items as needed
];

const SubCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (step) => {
    const newSlide =
      (currentSlide + step + carouselData.length) % carouselData.length;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(1); // Move to the next slide
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentSlide]);
  const currentCarouselItem = carouselData[currentSlide];

  return (
    <Grid
      container
      spacing={3}
      // onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when hovering
      // onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when not hovering
      sx={{
        padding: "120px 0 105px",
        margin: " 0 auto",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: {
          xs: "100%",
          md: "1200px",
        },
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} md={5} sx={{ px: "15px" }}>
        <img
          src={currentCarouselItem.imageUrl}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "1%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          marginTop: "-10px",
        }}
      >
        <>{currentCarouselItem.content}</>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        maxWidth={"1200px"}
        rowSpacing={"25.5%"}
        sx={{
          mx: "auto",
          columnSpacing: {
            xs: "25.5%",
            md: "none",
          },
          // opacity: isHovered ? 1 : 0,
          // pointerEvents: isHovered ? "auto" : "none",
          transition: "opacity 0.3s ease-in-out",
          position: "relative",
        }}
      >
        <Grid
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => handleSlideChange(-1)}
        >
          {
            <KeyboardArrowLeftRoundedIcon
              sx={{
                margin: { xs: "0px", md: "0 -20px" },
                position: "absolute",
                top: "42%",
                left: "1.7%",
                backgroundColor: "#14C38E",
                borderRadius: "100%",
                padding: "4px",
                width: "40px",
                height: "40px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            />
          }
        </Grid>
        <Grid
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={() => handleSlideChange(1)}
        >
          {
            <KeyboardArrowRightRoundedIcon
              sx={{
                margin: "0 -4px",
                position: "absolute",
                top: "42%",
                left: { xs: "94%", md: "97%" },
                backgroundColor: "#14C38E",
                borderRadius: "100%",
                padding: "4px",
                width: "40px",
                height: "40px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            />
          }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubCarousel;
