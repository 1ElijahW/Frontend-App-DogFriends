import React from 'react';
import Posts from '../../components/Posts';
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome, @itsadoggowrld </h1>
      <p>Here are the latest posts:</p>
      
      {/* Include the Posts component to display the list of posts */}
      <Posts />
      
      {/* You can add more content below if needed */}
    </div>
  );
};

export default Home;
