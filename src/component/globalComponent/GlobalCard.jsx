import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system";

const HoverableCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 94px 50px 30px",
  boxShadow: "0px 4px 8px rgba(0.4, 0.4, 0.4, 0.4)",
  transition: "transform 0.4s ease-in-out",
  "&:hover": {
    transform: "translateY(-6px)",
    background: `linear-gradient(135deg, #00FFAB, #B8F1B0)`,
  },
});

const LogoContainer = styled(Grid)({
  marginRight: "0px",
});

const Title = styled(Typography)({
  fontWeight: 600,
  marginBottom: "8px",
  fontSize: "16px",
  textTransform: "uppercase",
  color: "#14C38E",
});

const Subtitle = styled(Typography)({
  color: "#666",
  fontSize: "14px",
  textTransform: "uppercase",
  color: "#6FD660",
});

const GlobalCard = ({ logo, title, subtitle }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <HoverableCard>
        <LogoContainer item>{logo}</LogoContainer>
        <CardContent>
          <Title variant="h4">{title}</Title>
          <Subtitle variant="body2">{subtitle}</Subtitle>
        </CardContent>
      </HoverableCard>
    </ThemeProvider>
  );
};

export default GlobalCard;
