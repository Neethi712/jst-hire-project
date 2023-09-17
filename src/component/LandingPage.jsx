import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Carousel from "./globalComponent/Carousel";
import imgone from "../assets/images/img1.jpg";
import imgtwo from "../assets/images/img2.jpg";
import imgthree from "../assets/images/img3.jpg";
import AboutInfo from "./globalComponent/AboutInfo";
import ChoseUs from "./globalComponent/ChoseUs";
import SubCarousel from "./globalComponent/SubCarousel";
import Popular from "./globalComponent/Popular";
import Experience from "./globalComponent/Experience";
import Events from "./globalComponent/Events";
import Review from "./globalComponent/Review";
import Footer from "./globalComponent/Footer";
import FooterSub from "./globalComponent/FooterSub";
import Navbar from "./globalComponent/Navbar";

const carouselItems = [
  {
    title: "REACH YOU CAREER",
    subtitle: "Learn From Best Online Training Course",
    imgPath: imgone,
  },
  {
    title: "WE'RE GLADE TO SEE YOU",
    subtitle: "Explore Our Brilliant Graduates",
    imgPath: imgtwo,
  },
  {
    title: "THE GOAL OF EDUCATION",
    subtitle: "Join The Bigest Comunity Of Eduka",
    imgPath: imgthree,
  },
];

const containerStyle = {
  marginTop: 0,
  padding: 0,
};

function LandingPage() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" style={containerStyle}>
        <Grid container spacing={3} justifyContent="center">
          <Navbar />
          <Grid item xs={12} sx={{ overflowY: "hidden" }}>
            <Carousel items={carouselItems} />
          </Grid>
          <Grid item xs={12} sx={{ overflowY: "hidden" }}>
            <AboutInfo />
            <ChoseUs />
            <SubCarousel />
            <Popular />
            <Experience />
            <Events />
            <Review />
            <Footer />
            <FooterSub />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default LandingPage;
