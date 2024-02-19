import axios from 'axios';

const GET_CURRENT_THREE_POSTS = 'http://localhost:5000/api/v1/posts/currentThreePosts';

const getCurrentThreePosts = async () => {
  const response = await axios.get(GET_CURRENT_THREE_POSTS);
  return response.data;
}

const postServices = {
  getCurrentThreePosts,
}

export default postServices;