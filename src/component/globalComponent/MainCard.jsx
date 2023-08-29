import React from "react";
import { Grid, CardMedia } from "@mui/material";
import GlobalCard from "./GlobalCard";
import expert from "../../assets/images/expert.png";
// import fac from "../../assets/images/fa.png";
// import img from "../../assets/images/img1.jpg";
import onlineClass from "../../assets/images/online.png";
import scholar from "../../assets/images/scholarship.png";

const cardData = [
  {
    id: 1,
    logo: (
      <CardMedia
        component="img"
        alt="Expertise"
        image={expert}
        sx={{ width: "82px", height: "80px" }}
      />
    ),
    title: "expert faculty",
    subtitle: "read more",
  },
  {
    id: 2,
    logo: (
      <CardMedia
        component="img"
        alt="Expertise"
        image={onlineClass}
        sx={{ width: "82px", height: "80px" }}
      />
    ),
    title: "online learning",
    subtitle: "read more",
  },
  {
    id: 3,
    logo: (
      <CardMedia
        component="img"
        alt="Expertise"
        image={scholar}
        sx={{ width: "82px", height: "80px" }}
      />
    ),
    title: "edu scholarship",
    subtitle: "read more",
  },
  // Add more card data as needed
];

const MainCard = () => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      {cardData.map((card) => (
        <Grid item key={card.id}>
          <GlobalCard
            logo={card.logo}
            title={card.title}
            subtitle={card.subtitle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCard;
