import '../viewcourse/Sidebar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ pages }) => {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {pages.map(page => (
                    <li key={page.id} className="sidebar-item">
                        <Link to={page.path} className="sidebar-link">
                            {page.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

