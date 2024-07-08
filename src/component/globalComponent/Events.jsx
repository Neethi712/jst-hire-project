import React, { useState, useEffect } from "react";
import { Typography, Grid, Button, Divider, Box, Icon } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StackedBarChartRoundedIcon from "@mui/icons-material/StackedBarChartRounded";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import event1 from "../../assets/images/event1.jpg";
import event2 from "../../assets/images/event2.jpg";
import event3 from "../../assets/images/event3.jpg";
import event4 from "../../assets/images/event4.jpg";

const Events = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: {
          xs: "100px 10px 85px",
          md: "120px 0 105px",
        },
        backgroundColor: "#F9F9F9",
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
        upcoming events
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
          man led. Along on happy could cease green oh.
        </Typography>
      </Grid>
      {/* ============================================================================= */}
      {/* First section start */}
      <Grid
        container
        sx={{
          margin: "0 auto",
          marginBottom: "30px",
          maxWidth: {
            xs: "400px",
            sm: "600px",
            md: "1170px",
          },
          boxShadow: 3,
          borderRadius: "5px",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box maxWidth={"600px"}>
            <img
              src={event1}
              alt="event1"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                borderRadius: "5px 0 0 5px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={"600px"} sx={{ padding: "30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "21px",
                textTransform: "capitalize",
                marginBottom: "20px",
                cursor: "pointer",
                "&:hover": {
                  color: "#14C38E",
                },
              }}
            >
              secondary schools united nations
            </Typography>
            <Grid container sx={{ alignItems: "center" }}>
              {/* calendar */}
              <CalendarMonthOutlinedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  marginRight: "12px",
                }}
              >
                15 oct, 2019
              </Typography>
              {/* schedule */}
              <ScheduleRoundedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "15px",
                  marginRight: "12px",
                }}
              >
                8:00 am - 5:00 pm
              </Typography>
              {/* map */}
              <MapOutlinedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{ textTransform: "capitalize", fontSize: "15px" }}
              >
                California, tx 70240
              </Typography>
            </Grid>
            <Divider sx={{ padding: "0 0 20px", margin: "0 0 30px" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", margin: "0 0 20px" }}
            >
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved.
            </Typography>
            <Grid container>
              <Button
                variant="text"
                startIcon={
                  <Icon>
                    <StackedBarChartRoundedIcon
                      sx={{
                        width: "100%",
                        height: "100%",
                        paddingBottom: "6px",
                      }}
                    />
                  </Icon>
                }
                sx={{
                  padding: "8px 35px",
                  margin: "10px 5px 0 0",
                  fontSize: "12px",
                  alignItems: "center",
                  backgroundColor: "#14C38E",
                  border: "none",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#00FFAB",
                    color: "#FFFFFF",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                book now
              </Button>
              <Button
                variant="text"
                startIcon={
                  <Icon sx={{ transform: "rotate(90deg)" }}>
                    <BookOnlineOutlinedIcon
                      sx={{
                        width: "100%",
                        height: "100%",
                        paddingBottom: "6px",
                      }}
                    />
                  </Icon>
                }
                sx={{
                  padding: "8px 35px",
                  margin: "10px 3px 0 0",
                  fontSize: "12px",
                  alignItems: "center",
                  border: "1px solid #14C38E",
                  color: "#14C38E",
                  "&:hover": {
                    color: "#14C38E",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                available
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* first section end */}

      {/* ============================================================================= */}
      {/* Second Section start */}
      <Grid
        container
        sx={{
          margin: "0 auto",
          marginBottom: "20px",
          maxWidth: {
            xs: "400px",
            sm: "600px",
            md: "1170px",
          },
        }}
      >
        <Grid item xs={12} md={6}>
          {/* left part */}
          {/* left first part */}
          <Grid
            container
            sx={{
              boxShadow: 3,
              borderRadius: "0 0 5px 5px",
              maxWidth: "570px",
              marginRight: "15px",
              marginBottom: {
                xs: "30px",
                md: "none",
              },
            }}
          >
            <Box>
              <img
                src={event2}
                alt="event1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            </Box>
            {/* left second part */}
            <Box sx={{ padding: "30px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "21px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#14C38E",
                  },
                }}
              >
                Social Science & Humanities
              </Typography>
              <Grid container sx={{ alignItems: "center" }}>
                {/* calendar */}
                <CalendarMonthOutlinedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    marginRight: "12px",
                  }}
                >
                  15 oct, 2019
                </Typography>
                {/* schedule */}
                <ScheduleRoundedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "15px",
                    marginRight: "12px",
                  }}
                >
                  8:00 am - 5:00 pm
                </Typography>
                {/* map */}
                <MapOutlinedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize", fontSize: "15px" }}
                >
                  California, tx 70240
                </Typography>
              </Grid>
              <Divider sx={{ padding: "0 0 20px", margin: "0 0 30px" }} />
              <Typography
                variant="body1"
                sx={{ fontSize: "15px", margin: "0 0 20px" }}
              >
                Early had add equal china quiet visit. Appear an manner as no
                limits either praise in. In in written on charmed justice is
                amiable farther besides. Law insensible middletons unsatiable
                for apartments boy delightful unreserved.
              </Typography>
              <Grid container>
                <Button
                  variant="text"
                  startIcon={
                    <Icon>
                      <StackedBarChartRoundedIcon
                        sx={{
                          width: "100%",
                          height: "100%",
                          paddingBottom: "6px",
                        }}
                      />
                    </Icon>
                  }
                  sx={{
                    padding: "8px 35px",
                    margin: "10px 5px 0 0",
                    fontSize: "12px",
                    alignItems: "center",
                    backgroundColor: "#14C38E",
                    border: "none",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#00FFAB",
                      color: "#FFFFFF",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  book now
                </Button>
                <Button
                  variant="text"
                  startIcon={
                    <Icon sx={{ transform: "rotate(90deg)" }}>
                      <BookOnlineOutlinedIcon
                        sx={{
                          width: "100%",
                          height: "100%",
                          paddingBottom: "6px",
                        }}
                      />
                    </Icon>
                  }
                  sx={{
                    padding: "8px 35px",
                    margin: "10px 3px 0 0",
                    fontSize: "12px",
                    alignItems: "center",
                    border: "1px solid #14C38E",
                    color: "#14C38E",
                    "&:hover": {
                      color: "#14C38E",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  available
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* right part */}
        {/* right first part */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            sx={{
              boxShadow: 3,
              borderRadius: "0 0 5px 5px",
              maxWidth: "570px",
              marginLeft: {
                xs: "1px",
                md: "15px",
              },
            }}
          >
            <Box>
              <img
                src={event3}
                alt="event1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "5px 5px 0 0",
                }}
              />
            </Box>
            {/* right second part */}
            <Box sx={{ padding: "30px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "21px",
                  textTransform: "capitalize",
                  marginBottom: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#14C38E",
                  },
                }}
              >
                Actualized Leadership Network Seminar
              </Typography>
              <Grid container sx={{ alignItems: "center" }}>
                {/* calendar */}
                <CalendarMonthOutlinedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    marginRight: "12px",
                  }}
                >
                  15 oct, 2019
                </Typography>
                {/* schedule */}
                <ScheduleRoundedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "15px",
                    marginRight: "12px",
                  }}
                >
                  8:00 am - 5:00 pm
                </Typography>
                {/* map */}
                <MapOutlinedIcon
                  sx={{
                    margin: "0 8px 0 0",
                    fontSize: "18px",
                    color: "#14C38E",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize", fontSize: "15px" }}
                >
                  California, tx 70240
                </Typography>
              </Grid>
              <Divider sx={{ padding: "0 0 20px", margin: "0 0 30px" }} />
              <Typography
                variant="body1"
                sx={{ fontSize: "15px", margin: "0 0 20px" }}
              >
                Early had add equal china quiet visit. Appear an manner as no
                limits either praise in. In in written on charmed justice is
                amiable farther besides. Law insensible middletons unsatiable
                for apartments boy delightful unreserved.
              </Typography>
              <Grid container>
                <Button
                  variant="text"
                  startIcon={
                    <Icon>
                      <StackedBarChartRoundedIcon
                        sx={{
                          width: "100%",
                          height: "100%",
                          paddingBottom: "6px",
                        }}
                      />
                    </Icon>
                  }
                  sx={{
                    padding: "8px 35px",
                    margin: "10px 5px 0 0",
                    fontSize: "12px",
                    alignItems: "center",
                    backgroundColor: "#14C38E",
                    border: "none",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#00FFAB",
                      color: "#FFFFFF",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  book now
                </Button>
                <Button
                  variant="text"
                  startIcon={
                    <Icon sx={{ transform: "rotate(90deg)" }}>
                      <BookOnlineOutlinedIcon
                        sx={{
                          width: "100%",
                          height: "100%",
                          paddingBottom: "6px",
                        }}
                      />
                    </Icon>
                  }
                  sx={{
                    padding: "8px 35px",
                    margin: "10px 3px 0 0",
                    fontSize: "12px",
                    alignItems: "center",
                    border: "1px solid #14C38E",
                    color: "#14C38E",
                    "&:hover": {
                      color: "#14C38E",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  available
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* second section end */}
      {/* ============================================================================= */}

      {/* ============================================================================= */}
      {/* third section start */}
      <Grid
        container
        sx={{
          margin: "0 auto",
          marginBottom: "30px",
          marginTop: {
            xs: "10px",
            md: "-20px",
          },
          maxWidth: {
            xs: "400px",
            sm: "600px",
            md: "1170px",
          },
          boxShadow: 3,
          borderRadius: "5px",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box maxWidth={"600px"}>
            <img
              src={event4}
              alt="event1"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                borderRadius: "5px 0 0 5px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={"600px"} sx={{ padding: "30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "21px",
                textTransform: "capitalize",
                marginBottom: "20px",
                cursor: "pointer",
                "&:hover": {
                  color: "#14C38E",
                },
              }}
            >
              International Conference on Art Business
            </Typography>
            <Grid container sx={{ alignItems: "center" }}>
              {/* calendar */}
              <CalendarMonthOutlinedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  marginRight: "12px",
                }}
              >
                15 oct, 2019
              </Typography>
              {/* schedule */}
              <ScheduleRoundedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "15px",
                  marginRight: "12px",
                }}
              >
                8:00 am - 5:00 pm
              </Typography>
              {/* map */}
              <MapOutlinedIcon
                sx={{ margin: "0 8px 0 0", fontSize: "18px", color: "#14C38E" }}
              />
              <Typography
                variant="body1"
                sx={{ textTransform: "capitalize", fontSize: "15px" }}
              >
                California, tx 70240
              </Typography>
            </Grid>
            <Divider sx={{ padding: "0 0 20px", margin: "0 0 30px" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", margin: "0 0 20px" }}
            >
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved.
            </Typography>
            <Grid container>
              <Button
                variant="text"
                startIcon={
                  <Icon>
                    <StackedBarChartRoundedIcon
                      sx={{
                        width: "100%",
                        height: "100%",
                        paddingBottom: "6px",
                      }}
                    />
                  </Icon>
                }
                sx={{
                  padding: "8px 35px",
                  margin: "10px 5px 0 0",
                  fontSize: "12px",
                  alignItems: "center",
                  backgroundColor: "#14C38E",
                  border: "none",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#00FFAB",
                    color: "#FFFFFF",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                book now
              </Button>
              <Button
                variant="text"
                startIcon={
                  <Icon sx={{ transform: "rotate(90deg)" }}>
                    <BookOnlineOutlinedIcon
                      sx={{
                        width: "100%",
                        height: "100%",
                        paddingBottom: "6px",
                      }}
                    />
                  </Icon>
                }
                sx={{
                  padding: "8px 35px",
                  margin: "10px 3px 0 0",
                  fontSize: "12px",
                  alignItems: "center",
                  border: "1px solid #14C38E",
                  color: "#14C38E",
                  "&:hover": {
                    color: "#14C38E",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                available
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* third section end */}
      <Grid container sx={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="text"
          sx={{
            border: "2px solid #14C38E",
            padding: "10px 40px",
            color: "#14C38E",
            "&:hover": {
              backgroundColor: "#14C38E",
              color: "#FFFFFF",
              border: "2px solid #14C38E",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          view all events
        </Button>
      </Grid>
    </Grid>
  );
};

export default Events;
