import axios from 'axios';

const GET_CURRENT_THREE_PROJECTS = 'http://localhost:5000/api/v1/projects/currentThreeProjects';
const GET_ALL_PROJECTS = 'http://localhost:5000/api/v1/projects';
const CREATE_PROJECT_API_URL = 'http://localhost:5000/api/v1/projects';


const getCurrentThreeProjects = async () => {
  const response = await axios.get(GET_CURRENT_THREE_PROJECTS);
  return response.data;
}

const getAllProjects = async () => {
  const response = await axios.get(GET_ALL_PROJECTS);
  return response.data;
}

const createProject = async (formData, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  };
  const response = await axios.post(CREATE_PROJECT_API_URL, formData, config);
  return response.data;
}

const projectServices = {
  getCurrentThreeProjects,
  getAllProjects,
  createProject,
}

export default projectServices;