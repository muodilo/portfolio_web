import axios from 'axios';

const GET_CURRENT_THREE_POSTS = 'http://localhost:5000/api/v1/posts/currentThreePosts';
const GET_ALL_POSTS = 'http://localhost:5000/api/v1/posts';
const GET_POSTS_BY_CATEGORY = 'http://localhost:5000/api/v1/posts/category';
const GET_RELATED_POSTS = 'http://localhost:5000/api/v1/posts/related';
const CREATE_POST_API_URL = 'http://localhost:5000/api/v1/posts'
const DELETE_POST_API_URL = 'http://localhost:5000/api/v1/posts'


const getCurrentThreePosts = async () => {
  const response = await axios.get(GET_CURRENT_THREE_POSTS);
  return response.data;
}

const getAllPosts = async () => {
  const response = await axios.get(GET_ALL_POSTS);
  return response.data;
}

const getSpecificPost = async (id) => {
  const response = await axios.get(`${GET_ALL_POSTS}/${id}`);
  return response.data;
}
const getPostsByCategory = async (category) => {
  const response = await axios.get(`${GET_POSTS_BY_CATEGORY}/${category}`);
  return response.data;
}

const getRelatedPosts = async (category) => {
  const response = await axios.get(`${GET_RELATED_POSTS}/${category}`);
  return response.data;
}

const createPost = async (formData, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  };
  const response = await axios.post(CREATE_POST_API_URL, formData, config);
  return response.data;
}

const deletePost = async (postId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    await axios.delete(`${DELETE_POST_API_URL}/${postId}`, config);
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
    const response = await axios.put(`${DELETE_POST_API_URL}/${postId}`, postData, config);

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