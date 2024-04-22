import axios from 'axios'

const BASE_API_URL = import.meta.env.REACT_APP_API_URL;

const register = async (userData) => {
  const response = await axios.post(`${BASE_API_URL}/users`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const logout = async () => localStorage.removeItem('user');

const login = async (userData) => {
  const response = await axios.post(`${BASE_API_URL}/users/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
}


const authService = {
  register,
  logout,
  login,
}

export default authService;