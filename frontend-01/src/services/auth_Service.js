import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/auth";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login/`, { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register/`, { name, email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
