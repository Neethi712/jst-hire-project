import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

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
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (step) => {
    const newSlide =
      (currentSlide + step + carouselData.length) % carouselData.length;
    setCurrentSlide(newSlide);
  };

  const currentCarouselItem = carouselData[currentSlide];

  return (
    <Grid
      container
      spacing={3}
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true when hovering
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when not hovering
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
          opacity: isHovered ? 1 : 0,
          pointerEvents: isHovered ? "auto" : "none",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Button
          onClick={() => handleSlideChange(-1)}
          sx={{ borderRadius: "100%" }}
        >
          {<KeyboardArrowLeft />}
        </Button>
        <Button onClick={() => handleSlideChange(1)}>
          {<KeyboardArrowRight />}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubCarousel;
