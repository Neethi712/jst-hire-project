import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./viewcourse/Sidebar";
import DocumentationPage from "./viewcourse/DocumentationPage";
import pages from "./doc/html";
const Courses = () => {
  return (
    <div>
      <Router>
        <div className="app-container">
          <Sidebar pages={pages} />

          <div className="main-content">
            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.id}
                  path={page.path}
                  element={
                    <DocumentationPage
                      pageTitle={page.title}
                      pageContent={page.content}
                      pageDetails={page}
                    />
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Courses;
