import axios from 'axios';

const GET_CURRENT_THREE_PROJECTS = 'http://localhost:5000/api/v1/projects/currentThreeProjects';
const GET_ALL_PROJECTS = 'http://localhost:5000/api/v1/projects';
const CREATE_PROJECT_API_URL = 'http://localhost:5000/api/v1/projects';
const DELETE_PROJECT_API_URL = 'http://localhost:5000/api/v1/projects'


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

const deleteProject = async (projectId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(`${DELETE_PROJECT_API_URL}/${projectId}`, config);
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
}

export default projectServices;