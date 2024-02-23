import axios from 'axios';

const GET_CURRENT_THREE_POSTS = 'http://localhost:5000/api/v1/posts/currentThreePosts';
const GET_ALL_POSTS = 'http://localhost:5000/api/v1/posts';
const GET_RELATED_POSTS = 'http://localhost:5000/api/v1/posts/related'


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

const getRelatedPosts = async (category) => {
  const response = await axios.get(`${GET_RELATED_POSTS}/${category}`);
  return response.data;
}

const postServices = {
  getCurrentThreePosts,
  getAllPosts,
  getSpecificPost,
  getRelatedPosts
}

export default postServices;