import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import Course1 from "../../assets/images/course1.jpg";
import Course2 from "../../assets/images/course2.jpg";
import Course3 from "../../assets/images/course3.jpg";
import Course4 from "../../assets/images/course4.jpg";
import Course5 from "../../assets/images/course5.jpg";
import jonathon from "../../assets/images/jonathon.jpg";
import huma from "../../assets/images/huma.jpg";
import prokash from "../../assets/images/prokash.jpg";
import munil from "../../assets/images/munil.jpg";
import akua from "../../assets/images/akua.jpg";
import Description from "./Description";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const courses = [
  {
    image: Course1,
    avatarSrc: munil,
    instructor: "munil druva",
    rating: 4.5,
    enroll: "(23,890)",
    title: "data science and software",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "free",
  },
  {
    image: Course2,
    avatarSrc: akua,
    instructor: "akua paul",
    rating: 5,
    enroll: "(8657)",
    title: "stanford engineering",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "$ 12",
  },
  {
    image: Course3,
    avatarSrc: jonathon,
    instructor: "jonathom kiyam",
    rating: 4.9,
    enroll: "(2,655)",
    title: "covers big data analysis",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "free",
  },
  {
    image: Course4,
    avatarSrc: huma,
    instructor: "huma park",
    rating: 4.4,
    enroll: "(16,465)",
    title: "professonal web development",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "free",
  },
  {
    image: Course5,
    avatarSrc: prokash,
    instructor: "prokash timer",
    rating: 5,
    enroll: "(7,890)",
    title: "java programming masterclass",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "free",
  },
  {
    image: Course2,
    avatarSrc: akua,
    instructor: "akua paul",
    rating: 5,
    enroll: "(8657)",
    title: "stanford engineering",
    description:
      "Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.",
    users: 6690,
    time: "16:00",
    price: "$ 12",
  },

  // Add more courses as needed
];

const cardsPerSet = 3; // Number of cards to display in a set

const Popular = () => {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  const totalSets = Math.ceil(courses.length / cardsPerSet);
  const startIndex = currentSet * cardsPerSet;
  const endIndex = startIndex + cardsPerSet;
  const visibleCourses = courses.slice(startIndex, endIndex);

  const handlePrevSet = () => {
    setCurrentSet((prevSet) => (prevSet > 0 ? prevSet - 1 : totalSets - 1));
  };

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
  };
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: {
          xs: "100px 10px 85px",
          md: "120px 0 105px",
        },
      }}
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
        popular courses
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
          maxWidth: { xs: "380px", md: "800px" },
          mx: "auto",
          marginBottom: "50px",
        }}
      >
        <Typography variant="pre">
          Discourse assurance estimable applauded to so. Him everything
          melancholy uncommonly but solicitude inhabiting projection off.
          Connection stimulated estimating excellence an to impression.
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          margin: {
            xs: "auto 13px",
            md: "0 auto",
          },
          maxWidth: {
            xs: "90%",
            md: "1200px",
          },
        }}
        position={"relative"}
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

        {visibleCourses.map((course, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                width: "100%",
                justifyContent: "center",
                margin: 0,
              }}
            >
              <CardMedia
                component="img"
                height="219.98px"
                width="293.33px"
                image={course.image}
              />
              <CardContent>
                <Description course={course} />
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

export default Popular;
