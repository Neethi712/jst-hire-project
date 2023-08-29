import React from "react";
import {
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  Divider,
  Button,
} from "@mui/material";
import About from "../../assets/images/about.jpg";
import MainCard from "./MainCard";

const AboutInfo = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          my: "120px",
          justifyContent: "sapce-around",
          mx: "auto",
          maxWidth: {
            xs: "400px",
            sm: "768px",
            md: "1200px",
          },
        }}
      >
        {/* Left column */}
        <Grid item xs={12} md={6} sx={{ padding: "0 35px 0 15px" }}>
          <img
            src={About}
            alt="About Us"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={6} sx={{ px: "15px" }}>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontSize: "18px",
              color: "#666666",
              marginBottom: "10px",
            }}
          >
            Introduction
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "35px",
              marginBottom: "25px",
              fontWeight: 600,
              color: "#14C38E",
            }}
          >
            Welcome To The Beigest Online Learning Source Of Eduka
          </Typography>
          <Typography
            sx={{
              position: "relative",
              "&::before, &::after": {
                content: '""',
                display: "block",
                position: "absolute",
                height: "2px",
                backgroundColor: "#14C38E",
              },
              "&::before": {
                left: 0,
                width: "10%",
              },
              "&::after": {
                left: 65,
                width: "5%",
              },
            }}
          ></Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "15.2px",
              marginBottom: "15px",
              paddingTop: "25px",
              color: "#666666",
              lineHeight: 1.8,
            }}
          >
            Alteration literature to or an sympathize mr imprudence. Of is
            ferrars subject as enjoyed or tedious cottage. Procuring as in
            resembled by in agreeable. Next long no gave mr eyes. Admiration
            advantages no he celebrated so pianoforte unreserved. Not its
            herself forming charmed amiable. Him why feebly expect future now.
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
            Curiosity incommode now led smallness allowance. Favour bed assure
            son things yet. She consisted consulted elsewhere happiness
            disposing household any old the. Widow downs. Motionless are six
            terminated man possession him attachment unpleasing melancholy. Sir
            smile arose one share. No abroad in easily relied an whence lovers
            temper by.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              padding: "10px 40px",
              color: "#14C38E",
              borderColor: "#14C38E",
              marginBottom: "50px",
              "&:hover": {
                borderColor: "#00FFAB",
                backgroundColor: "none",
              },
            }}
          >
            read more
          </Button>
        </Grid>
        <Divider width="100%" sx={{ marginBottom: "50px" }} />
        <MainCard />
      </Grid>
    </ThemeProvider>
  );
};

export default AboutInfo;
