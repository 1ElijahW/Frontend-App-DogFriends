import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextComponent";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('userId');
      localStorage.removeItem('dogId');
    setIsLoggedIn(false);
  };
  const handleSignIn = () => {
    // Logic for handleSignIn if any
    // setIsLoggedIn(true);
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
            {isLoggedIn ? (
              <li>
                <Link to="/Profile" className="sidebar-main">
                  Profile
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isLoggedIn ? (
              <li>
                <Link to="/NewPost" className="sidebar-main">
                  New Post
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isLoggedIn ? (
              <li>
                <Link to="/Settings" className="sidebar-main">
                  Settings
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            <li>
              <Link to="/About" className="sidebar-main">
                About
              </Link>
            </li>{" "}
            <li className="sidebar-bottom">
              {isLoggedIn ? (
                <button onClick={handleSignOut}>Sign Out</button>
              ) : (
                <button
                  onClick={() => {
                    handleSignIn();
                    window.location.href = "auth/signin";
                  }}
                >
                  Sign In/Sign Up
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Sidebar;