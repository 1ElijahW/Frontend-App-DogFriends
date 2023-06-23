import React, { useState } from 'react';
import { createPost } from '../../api/posts';
const NewPost = () => {
  const [text, setText] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace 'your_dog_id_here' with the dog's ID,
    // you should retrieve this from wherever you're storing the logged in user's data
<<<<<<< matt
    const dogId = '64949572e9dd39a96ae9b228';
=======
    const dogId = localStorage.getItem('dogId');
    console.log(dogId)
    // const dogId = localStorage.getItem('dogId');
>>>>>>> local
    const data = await createPost(text, dogId);
  };
  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Post Content */}
          <div>
            <label>Post Content</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default NewPost;