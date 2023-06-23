

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
<<<<<<< matt
    // Fetch posts from the API using Axios
    axios.get('http://localhost:3500/api/posts')
      .then(response => {
        setPosts(response.data);
=======
    // Fetch posts from the API using the getPosts function
    getPosts(props.dogId)
      .then(responseData => {
        setPosts(responseData);
>>>>>>> local
      })
      .catch(error => console.error('Error fetching posts:', error));

  }, []);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div className="post" key={post._id}>
          <img src={post.photo} alt="Dog" />
          <p>{post.text}</p>
          <p>Author: {post.author}</p>
          <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
        </div>
      ))}
    </div>
  );
};

export default Posts;


