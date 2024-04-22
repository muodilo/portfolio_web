import axios from 'axios';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;


const getCurrentThreePosts = async () => {
  const response = await axios.get(`${BASE_API_URL}/posts/currentThreePosts`);
  return response.data;
}

const getAllPosts = async () => {
  const response = await axios.get(`${BASE_API_URL}/posts`);
  return response.data;
}

const getSpecificPost = async (id) => {
  const response = await axios.get(`${BASE_API_URL}/posts/${id}`);
  return response.data;
}
const getPostsByCategory = async (category) => {
  const response = await axios.get(`${BASE_API_URL}/posts/category/${category}`);
  return response.data;
}

const getRelatedPosts = async (category) => {
  const response = await axios.get(`${BASE_API_URL}/posts/related/${category}`);
  return response.data;
}

const createPost = async (formData, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  };
  const response = await axios.post(`${BASE_API_URL}/posts`, formData, config);
  return response.data;
}

const deletePost = async (postId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    await axios.delete(`${BASE_API_URL}/posts/${postId}`, config);
    return true; // Indicates successful deletion
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete post');
  }
};

const updatePost = async (postId, postData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    // Make a PUT request to update the post
    const response = await axios.put(`${BASE_API_URL}/posts/${postId}`, postData, config);

    return response.data; // Return the updated post data
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update post');
  }
};



const postServices = {
  getCurrentThreePosts,
  getAllPosts,
  getSpecificPost,
  getRelatedPosts,
  createPost,
  deletePost, 
  updatePost,
  getPostsByCategory,
}

export default postServices;