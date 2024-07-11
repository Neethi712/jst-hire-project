import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Experience1 from "../../assets/images/experience1.jpg";
import Experience2 from "../../assets/images/experience2.jpg";
import Experience3 from "../../assets/images/experience3.jpg";
import Experience4 from "../../assets/images/experience4.jpg";
import Experience5 from "../../assets/images/experience5.jpg";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const cardData = [
  {
    id: 1,
    imageSrc: Experience1,
    instructor: "dr. bubly minu",
    subtitle: "science specialist",
  },
  {
    id: 2,
    imageSrc: Experience2, // Replace with actual image URL
    instructor: "professon. john doe",
    subtitle: "senior writter",
  },
  {
    id: 3,
    imageSrc: Experience3, // Replace with actual image URL
    instructor: "professon. john doe",
    subtitle: "senior writter",
  },
  {
    id: 4,
    imageSrc: Experience4, // Replace with actual image URL
    instructor: "professon. nuri paul",
    subtitle: "chemistry specialist",
  },
  {
    id: 5,
    imageSrc: Experience5, // Replace with actual image URL
    instructor: "professon. monayem",
    subtitle: "senior developer",
  },
  {
    id: 6,
    imageSrc: Experience2, // Replace with actual image URL
    instructor: "professon. john doe",
    subtitle: "senior writter",
  },
  // Add more card data here
];
const cardsPerSet = 3;
const ExperienceCard = () => {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  const totalSets = Math.ceil(cardData.length / cardsPerSet);
  const startIndex = currentSet * cardsPerSet;
  const endIndex = startIndex + cardsPerSet;
  const visibleCourses = cardData.slice(startIndex, endIndex);

  const handlePrevSet = () => {
    setCurrentSet((prevSet) => (prevSet > 0 ? prevSet - 1 : totalSets - 1));
  };

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "120px 0 105px", overflowX: "hidden" }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "30px",
          padding: "0 0 20px",
          fontWeight: "600",
          textTransform: "capitalize",
          color: "#14C38E",
        }}
      >
        experience advisors
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
            backgroundColor: "#14C38E",
            height: "2px",
            marginRight: "8px",
          }}
        />
        <Divider
          sx={{ width: "40px", backgroundColor: "#14C38E", height: "2px" }}
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
        <Typography variant="pre">
          Able an hope of body. Any nay shyness article matters own removal
          nothing his forming. Gay own additions education satisfied the
          perpetual. If he cause manor happy. Without farther she exposed saw
          manled.Along on happy could cease green oh.
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          margin: "0 auto",
          maxWidth: {
            xs: "83%",
            md: "1200px",
          },
          position: "relative",
        }}
      >
        <Grid sx={{ display: { xs: "none", md: "block" } }}>
          <KeyboardArrowLeftRoundedIcon
            onClick={handlePrevSet}
            sx={{
              margin: { xs: "0px", md: "0 -20px" },
              position: "absolute",
              top: "45%",
              left: "1.2%",
              backgroundColor: "#14C38E",
              borderRadius: "100%",
              padding: "4px",
              width: "40px",
              height: "40px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
        </Grid>
        {visibleCourses.map((card, index) => (
          <Grid key={index} item xs={12} sm={4} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%", // Set the card width to 100%
                margin: "0 auto",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "400px", objectFit: "cover" }} // Fit the image within the CardMedia
                src={card.imageSrc}
                alt={`Experience ${card.id}`}
              />
              <CardContent>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "18px",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      margin: "0 0 15px",
                    }}
                  >
                    {card.instructor}
                  </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: "#14C38E",
                      fontWeight: "500",
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Divider
                    sx={{
                      width: "10%",
                      height: "2px",
                      backgroundColor: "#14C38E",
                      marginY: "20px",
                    }}
                  />
                </Grid>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Grid item>
                    <IconButton
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      <Facebook
                        sx={{
                          backgroundColor: "#14C38E",
                          borderRadius: "100%",
                          "&:hover": { color: "#FFFFFF" },
                          padding: "10px",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      <Twitter
                        sx={{
                          backgroundColor: "#14C38E",
                          borderRadius: "100%",
                          "&:hover": { color: "#FFFFFF" },
                          "&:focus": {
                            outline: "none",
                          },
                          padding: "10px",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      <Instagram
                        sx={{
                          backgroundColor: "#14C38E",
                          borderRadius: "100%",
                          "&:hover": { color: "#FFFFFF" },
                          "&:focus": {
                            outline: "none",
                          },
                          padding: "10px",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid sx={{ display: { xs: "none", md: "block" } }}>
          <KeyboardArrowRightRoundedIcon
            onClick={handleNextSet}
            sx={{
              margin: "0 -4px",
              position: "absolute",
              top: "45%",
              left: { xs: "94%", md: "99%" },
              backgroundColor: "#14C38E",
              borderRadius: "100%",
              padding: "4px",
              width: "40px",
              height: "40px",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceCard;
