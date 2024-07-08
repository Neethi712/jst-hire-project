import "../viewcourse/Sidebar.css"; // Your existing styles

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ pages }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-scroll-container">
        <ul className="sidebar-list">
          {pages.map((page) => (
            <li key={page.id} className="sidebar-item">
              <Link
                to={page.path}
                className="sidebar-link"
                style={{ color: "#12B76A" }}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
