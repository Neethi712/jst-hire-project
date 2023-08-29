import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import doubletick from "../../assets/images/double-tick.png";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const GraficComponent = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <Typography
          variant="h4"
          sx={{
            fontSize: "35px",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          Graphic and interactive design
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontSize: "19px",
            color: "#14C38E",
            marginTop: "6px",
          }}
        >
          Featured courses
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "15px", margin: "15px 0" }}>
          Both rest of know draw fond post as. It agreement defective to
          excellent. Feebly do engage of narrow. Extensive repulsive belonging
          depending if promotion be zealously as. Preference inquietude ask
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "20px",
            textTransform: "uppercase",
            margin: "15px 0 0",
            fontWeight: "500",
            color: "#14C38E",
          }}
        >
          learning outcomes
        </Typography>
        <Grid container>
          <List>
            <ListItem sx={{ padding: "0" }}>
              <img
                src={doubletick}
                style={{
                  width: "19px",
                  height: "19px",
                  fontWeight: "600",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <ListItemText
                sx={{
                  padding: "0 0 0 10px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                Over 37 Lectures And 55 Hours Of Content!
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: "0" }}>
              <img
                src={doubletick}
                style={{
                  width: "19px",
                  height: "19px",
                  fontWeight: "600",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <ListItemText
                sx={{
                  padding: "0 0 0 10px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                testing training included.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: "0" }}>
              <img
                src={doubletick}
                style={{
                  width: "19px",
                  height: "19px",
                  fontWeight: "600",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <ListItemText
                sx={{
                  padding: "0 0 0 10px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                Course content designed by considering current software testing
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: "0" }}>
              <img
                src={doubletick}
                style={{
                  width: "19px",
                  height: "19px",
                  fontWeight: "600",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <ListItemText
                sx={{
                  padding: "0 0 0 10px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                Practical assignments at the end of every session.
              </ListItemText>
            </ListItem>
            <Button
              variant="text"
              sx={{
                margin: "25px 0 0",
                padding: "10px 40px",
                backgroundColor: "#14C38E",
                color: "#000000",
                fontSize: "14px",
                border: "none",
                "&:hover": {
                  backgroundColor: "#00FFAB",
                  color: "#FFFFFF",
                },
              }}
            >
              enroll now
            </Button>
          </List>
          <Divider sx={{ width: "100%", margin: "25px 0 0 0" }} />
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #E7E7E7",
              padding: "15px 30px 0 0",
              margin: "0 30px 0 0",
            }}
          >
            <Box sx={{ flex: 1 }}>
              {/* Left content */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  margin: "0 0 5px",
                }}
              >
                Author
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "14px",
                  color: "#9B9B9B",
                }}
              >
                devid honey
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #E7E7E7 ",
              padding: "15px 30px 0 0",
              margin: "0 30px 0 0",
            }}
          >
            <Box sx={{ flex: 1 }}>
              {/* Left content */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  margin: "0 0 5px",
                }}
              >
                students enrolled
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "15px",
                  color: "#9B9B9B",
                }}
              >
                5455
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "15px 30px 0 0",
            }}
          >
            <Box sx={{ flex: 1 }}>
              {/* Left content */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  margin: "0 0 5px",
                }}
              >
                rating
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "15px",
                  color: "#9B9B9B",
                  marginLeft: "-5px",
                  color: "#14C38E",
                }}
              >
                <StarRateRoundedIcon />
                <StarRateRoundedIcon />
                <StarRateRoundedIcon />
                <StarRateRoundedIcon />
                <StarHalfRoundedIcon />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default GraficComponent;
