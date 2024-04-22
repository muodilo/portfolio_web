import axios from 'axios';

const GET_ALL_PROJECTS = 'http://localhost:5000/api/v1/projects';
const CREATE_PROJECT_API_URL = 'http://localhost:5000/api/v1/projects';
const DELETE_PROJECT_API_URL = 'http://localhost:5000/api/v1/projects';
const GET_PROJECT_BY_ID_URL = 'http://localhost:5000/api/v1/projects';

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;


const getCurrentThreeProjects = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/projects/currentThreeProjects`);
    return response.data;
  } catch (error) {
    // Handle errors, such as network issues or server errors
    console.error('Error fetching current three projects:', error);
    throw new Error('Failed to fetch current three projects');
  }
}

const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/projects/${projectId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch project');
  }
};


const getAllProjects = async () => {
  const response = await axios.get(`${BASE_API_URL}/projects`);
  return response.data;
}

const createProject = async (formData, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  };
  const response = await axios.post(`${BASE_API_URL}/projects`, formData, config);
  return response.data;
}

const deleteProject = async (projectId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(`${BASE_API_URL}/projects/${projectId}`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to delete project');
  }
};


const projectServices = {
  getCurrentThreeProjects,
  getAllProjects,
  createProject,
  deleteProject,
  getProjectById,
}

export default projectServices;