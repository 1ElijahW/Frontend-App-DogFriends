// api/post.js
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3500/api/', // Replace with your backend's base URL
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Assuming you're using token-based authentication
  config.headers.Authorization = token;
  return config;
});
export const createPost = async (text, dogId) => {
  try {
    const response = await api.post('/posts', { text, dogId }); // Replace '/posts/create' with the correct endpoint
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};