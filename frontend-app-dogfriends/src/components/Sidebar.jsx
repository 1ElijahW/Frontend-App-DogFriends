import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextComponent";
import "./sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('ownerId');
    localStorage.removeItem('ownerName');
    localStorage.removeItem('dogId');
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSignIn = () => {
    // Logic for handleSignIn if any
    // setIsLoggedIn(true);
  };
  const handleSignUp = () => {
    // Logic for handleSignUp if any
    // setIsLoggedIn(true);
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 0.55 * window.screen.width) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <>
                <button onClick={() => {handleSignIn(); window.location.href = "auth/signin";}}>Sign In</button>
                <button onClick={() => {handleSignUp(); window.location.href = "auth/signup";}}>Sign Up</button>
                </>
              )}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Sidebar;