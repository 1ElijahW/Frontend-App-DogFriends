import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../api/postService";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API using the getPosts function
    getPosts(props.dogId)
      .then(responseData => {
        setPosts(responseData);
      })
      .catch(error => console.error('Error fetching posts:', error));

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <img src={'http://localhost:3500/' + post.photo} alt="Dog" />
          <p>{post.text}</p>
          <p>Author: {post.author}</p>
          <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
