import axios from 'axios'

const API_URL_register = 'http://localhost:5000/api/v1/users';
const API_URL_login = 'http://localhost:5000/api/v1/users/login';

const register = async (userData) => {
  const response = await axios.post(API_URL_register, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const logout = async () => localStorage.removeItem('user');

const login = async (userData) => {
  const response = await axios.post(API_URL_login, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}

const logout = async () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
  login,
}

export default authService;