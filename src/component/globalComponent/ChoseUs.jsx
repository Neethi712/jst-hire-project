import React from "react";
import {
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";
import imgone from "../../assets/images/img1.jpg";
import trending from "../../assets/images/trending.png";
import TrendingCourses from "./TrendingCourses";
import library from "../../assets/images/library.png";
import professor from "../../assets/images/professor.png";

const ChoseUs = () => {
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
          maxWidth: "full",
        }}
      >
        {/* Left column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imgone}
            alt="About Us"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1)",
            }}
          />
        </Grid>

        {/* Right column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: `linear-gradient(120deg, #00FFAB, #B8F1B0, #D2FACC, #14C38E)`,
            padding: "120px 120px 120px 50px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontSize: "30px",
              color: "#FFFFFF",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Why chose Us
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
              fontSize: "15.4px",
              marginBottom: "15px",
              paddingTop: "25px",
              color: "#666666",
              lineHeight: 1.8,
            }}
          >
            Discourse assurance estimable applauded to so. Him everything
            melancholy uncommonly but solicitude inhabiting projection off.
            Connection stimulated estimating excellence an to impression.
          </Typography>
          <Grid
            item
            maxWidth={"full"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              //   padding: "15px 0 0",
            }}
          >
            <Grid item maxWidth="full">
              <TrendingCourses
                imageSrc={trending}
                title="Trending Courses"
                content="Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me."
              />
              <Divider
                sx={{
                  borderBottom: "1px dashed #333333",
                  margin: "20px 0 30px 0",
                }}
              />
              <TrendingCourses
                imageSrc={library}
                title="Books & Library"
                content="Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me."
              />
              <Divider
                sx={{
                  borderBottom: "1px dashed #333333",
                  margin: "20px 0 30px 0",
                }}
              />
              <TrendingCourses
                imageSrc={professor}
                title="Certified Teachers"
                content="Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ChoseUs;
