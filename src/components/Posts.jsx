// import React, { useEffect, useState } from "react";
// //import axios from "axios";
// import { getPosts } from "../api/postService";
// import { IMAGE_BASE_URL } from "../api/apiConfig";
// //import "../pages/Newpost/NewPost.css";
// import { Link } from "react-router-dom";
// import "./posts.css"
// import { deletePost } from "../api/postService";

// const Posts = (props) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from the API using the getPosts function
//     getPosts(props.dogId)
//       .then(responseData => {
//         setPosts(responseData);
//       })
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []); // Add an empty dependency array if you want to run the effect only once

//   return (
//     <div className="posts-container">

//       {posts.map((post) => (
//         <div className="post" key={post._id}>
//           <img src={'http://localhost:3500/' + post.photo} alt="Dog" />
//           <p>{post.text}</p>
//           <Link to={`/profile/${post.dog}`}><p>Author: {post.author}</p></Link>
          
//           <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
//           {/* Below code adds a delete button to profile page when owner is on their own page */}
//           {props.dogId === localStorage.getItem("dogId") && (
//           <button onClick={() => {
//             deletePost(post._id).then(() => {
//               fetchPosts();
//             });
//           }}>Delete Post</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Posts;
//   return (
//     <div className="posts-container">
//       {posts.map((post) => (
//         <div className="post" key={post._id}>
//             <img src={IMAGE_BASE_URL + post.photo} alt="Dog" />
//             <div className="post-content">
//           <p>{post.text}</p>
//           <p>Author: {post.author}</p>
//           <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
//         </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Posts;

// =================================
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPosts } from "../api/postService";
import { Link } from "react-router-dom";
import { deletePost } from "../api/postService";
import "./posts.css";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    getPosts(props.dogId)
      .then(responseData => {
        const sortedPosts = responseData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }

  useEffect(() => {
    fetchPosts();
  }, []); // Add an empty dependency array if you want to run the effect only once

  return (
    <div className="posts-container">

      {posts.map((post) => (
        <div className="post" key={post._id}>
          <img src={post.photo} alt="Dog" />
          <p>{post.text}</p>
          <Link to={`/profile/${post.dog}`}><p>Author: {post.author}</p></Link>
          
          <small>{new Date(post.date).toLocaleString()}</small> {/* Display the date in a readable format */}
          {/* Below code adds a delete button to profile page when owner is on their own page */}
          {props.dogId === localStorage.getItem("dogId") && (
          <button onClick={() => {
            deletePost(post._id).then(() => {
              fetchPosts();
            });
          }}>Delete Post</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;