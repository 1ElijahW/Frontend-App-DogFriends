import api from './apiConfig';

export async function getPosts(props) {
  try {
    console.log("props");
    console.log(props);
    
    const response = await api.get('/posts', {
      params: {
        dogId: props
      }
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostById(id) {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// export async function createPost(postData) {
//   try {
//     const response = await api.post('/posts', postData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function createPost(postData)  {
  try {
    const response = await api.post('/posts', postData); // Replace '/posts/create' with the correct endpoint
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export async function deletePost(id) {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePost(id, postData) {
  try {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
}