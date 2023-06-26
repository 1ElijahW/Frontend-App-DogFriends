import React from "react";
import Posts from "../../components/Posts";
//import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome! </h1>
      <p>Here are the latest posts:</p>

      {/* Include the Posts component to display the list of posts */}
      <div className="post">
        <Posts />
      </div>

      {/* You can add more content below if needed */}
    </div>
  );
};

export default Home;
