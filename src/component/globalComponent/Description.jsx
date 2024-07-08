import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import user from "../../assets/images/user.png";
import clock from "../../assets/images/clock.png";
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  Box,
  Button,
} from "@mui/material";

const Description = ({ course }) => {
  const {
    avatarSrc,
    instructor,
    rating,
    enroll,
    title,
    description,
    users,
    time,
    price,
  } = course;

  return (
    <Grid container sx={{ padding: "15px" }}>
      {/* Part One */}
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          item
          sx={{
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "100%",
          }}
        >
          <Avatar
            src={avatarSrc}
            alt="avatar"
            sx={{
              width: "62px",
              height: "62px",
              alignItems: "center",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              textTransform: "uppercase",
              fontWeight: "500",
              marginLeft: "14px",
              marginBottom: "-12px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {instructor}
          </Typography>
          <List sx={{ marginLeft: "-8px" }}>
            <ListItem>
              <StarRateRoundedIcon sx={{ color: "#14C38E" }} />
              <StarRateRoundedIcon sx={{ color: "#14C38E" }} />
              <StarRateRoundedIcon sx={{ color: "#14C38E" }} />
              <StarRateRoundedIcon sx={{ color: "#14C38E" }} />
              <StarHalfRoundedIcon sx={{ color: "#14C38E" }} />
              <Typography variant="body1" sx={{ marginX: "5px" }}>
                {rating}
              </Typography>
              <Typography variant="body1">{enroll}</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* Part Two */}
      <Grid item>
        <Typography
          variant="h6"
          sx={{
            textTransform: "capitalize",
            fontSize: "20px",
            margin: "20px 0 10px 0",
            color: "#14C38E",
            cursor: "pointer",
            "&:hover": {
              color: "#00FFAB",
            },
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Grid>
      <Divider sx={{ width: "100%", marginY: "20px" }} />

      {/* Users and number of users */}
      <Box
        sx={{
          display: "flex",
          borderRight: "1px solid #E7E7E7",
          padding: "0 5px 0 0",
          margin: "0 5px 0 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={user} alt="users" style={{ width: "25px", height: "25px" }} />
        <Typography
          variant="body1"
          sx={{ fontSize: "15px", marginLeft: "5px" }}
        >
          {users}
        </Typography>
      </Box>

      {/* Clock and time */}
      <Box
        sx={{
          display: "flex",
          borderRight: "1px solid #E7E7E7",
          padding: "0 5px 0 0",
          margin: "0 5px 0 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={clock}
          alt="clock"
          style={{ width: "25px", height: "25px" }}
        />
        <Typography
          variant="body1"
          sx={{ fontSize: "15px", marginLeft: "5px" }}
        >
          {time}
        </Typography>
      </Box>

      {/* Price */}
      <Box
        sx={{
          display: "flex",
          borderRight: "1px solid #E7E7E7",
          padding: "0 5px 0 0",
          margin: "0 5px 0 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="text"
          sx={{
            fontSize: "12px",
            margin: "2px",
            padding: "5px",
            backgroundColor: "#14C38E",
            border: "none",
            textTransform: "capitalize",
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
          {price}
        </Button>
      </Box>

      {/* Enroll now */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="text"
          sx={{
            fontSize: "12px",
            padding: "5px 11px",
            backgroundColor: "#14C38E",
            border: "none",
            textTransform: "capitalize",
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
          enroll now
        </Button>
      </Box>
    </Grid>
  );
};

export default Description;
