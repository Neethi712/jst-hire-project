import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import React from "react";
import logo from "../../assets/images/Vector.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import FooterSub from "./FooterSub";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F9F9F9",
        padding: {
          xs: "100px 10px 85px",
          md: "120px 0 80px",
        },
      }}
    >
      <Grid
        container
        columnSpacing={2}
        sx={{
          margin: "0 auto",
          maxWidth: {
            xs: "400px",
            sm: "750px",
            md: "1200px",
          },
        }}
      >
        {/* column one */}
        <Grid item xs={12} sm={8} md={4}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <img
                  src={logo}
                  alt="brand_light_logo"
                  sx={{ backgroundColor: "#14C38E" }}
                />
              </ListItemAvatar>
            </ListItem>
            <ListItem>
              <ListItemText>
                Excellence decisively nay man yet impression for contrasted
                remarkably. There spoke happy for you are out. Fertile how old
                address did showing because sitting replied six. Had arose guest
                visit going off child she new.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText sx={{ fontStyle: "italic" }}>
                Please write your email and get our amazing updates, news and
                support
              </ListItemText>
            </ListItem>

            <ListItem>
              <TextField
                variant="outlined"
                size="small"
                placeholder="enter your e-mail here"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton
                      color="#14C38E"
                      // onClick={handleSearch}
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      <SendRoundedIcon
                        sx={{
                          color: "#14C38E",
                        }}
                      />
                    </IconButton>
                  ),
                }}
                InputLabelProps={{
                  shrink: true, // Shrink the label when text is entered
                  style: { color: "#14C38E" }, // Change the label text color
                }}
              />
            </ListItem>
          </List>
        </Grid>
        {/* column two */}
        <Grid item xs={12} sm={4} md={2}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  links
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                courses
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                event
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                gallery
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                faqs
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                teachers
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                contact
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        {/* column three */}
        <Grid item xs={12} sm={6} md={2}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  support
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                documentation
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                forums
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                langauage packs
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                release status
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#14C38E",
                    cursor: "pointer",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                learn press
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#14C38E",
                    transform: "scale(1.1)",
                    transition: "0.2s",
                  },
                }}
              >
                feedback
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        {/* column four */}
        <Grid item xs={12} sm={6} md={4}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  address
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={2}>
                  <List>
                    <ListItem sx={{ justifyContent: "center" }}>
                      <EmailRoundedIcon
                        sx={{
                          color: "#14C38E",
                          marginLeft: "-20px",
                          marginRight: "8px",
                        }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "#14C38E",
                          width: "1px",
                          height: "40px",
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ textTransform: "uppercase" }}>
                    email
                  </Typography>
                  <Typography>support@jsthire.com</Typography>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <Grid
                container
                sx={{ justifyContent: "flex-start", alignItems: "center" }}
              >
                <Grid item xs={2}>
                  <List>
                    <ListItem>
                      <PersonPinCircleRoundedIcon
                        sx={{
                          color: "#14C38E",
                          marginLeft: "-20px",
                          marginRight: "7px",
                          fontSize: "30px",
                        }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          backgroundColor: "#14C38E",
                          width: "1px",
                          height: "40px",
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ textTransform: "uppercase" }}>
                    office
                  </Typography>
                  <Typography>123 6th st. melbourne, fl 32904</Typography>
                </Grid>
              </Grid>
            </ListItem>

            <Divider />
            <ListItem>
              <ListItemText>
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  opening hours
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    mon - tues:
                  </Typography>
                  <Divider sx={{ marginY: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    wed - thu:
                  </Typography>
                  <Divider sx={{ marginY: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    sun:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">6.00 am - 10.00 pm</Typography>
                  <Divider sx={{ marginY: "10px" }} />
                  <Typography variant="body1">8.00 am - 6.00 pm</Typography>
                  <Divider sx={{ marginY: "10px" }} />
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    closed
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
