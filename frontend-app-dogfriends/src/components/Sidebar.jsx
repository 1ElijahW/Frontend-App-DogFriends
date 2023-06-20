import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSignOut = () => {

    // Handle sign out functionality
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      {isCollapsed ? (
        <button className="expand-btn sidebar-slider" onClick={toggleSidebar}>
          ---
        </button>
      ) : (
        <nav className={isCollapsed ? "collapsed" : ""}>
          <ul className="sidebar">
            <li className="sidebar-slider">
              <button onClick={toggleSidebar}> --- </button>
            </li>
            <li>
              <h2>DogFriends</h2>
            </li>
            <li>
              <Link to="/" className="sidebar-main">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="sidebar-main">
               Profile
              </Link>
            </li>
            <li>
            <Link to="/NewPost" className="sidebar-main">
                New Post
              </Link>
            </li>
            <li>
            <Link to="/Settings" className="sidebar-main">
                Settings
                </Link>
            </li>
            <li>
            <Link to="/About" className="sidebar-main">
                About
                </Link>
            </li>{" "}

            <li className="sidebar-bottom">
              {/* <button>Task Buckets</button> */}
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Sidebar;