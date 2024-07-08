
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Typography } from "@mui/material";
import LandingPage from "./component/LandingPage";
import ViewCourses from "./component/ViewCourses";
import Navbar from "./component/globalComponent/Navbar";
//import Courses from "./component/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage />}
          />
          <Route
            exact
            path="/viewcourses"
            element={<ViewCourses />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

