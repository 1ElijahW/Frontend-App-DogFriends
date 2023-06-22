

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPosts } from "../api/postService"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API using the getPosts function
    getPosts()
      .then(responseData => {
        setPosts(responseData);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div className="post" key={post._id}>
          <img src={post.photo} alt="Dog" />
          <p>{post.text}</p>
          <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
        </div>
      ))}
    </div>
  );
};

export default Posts;


