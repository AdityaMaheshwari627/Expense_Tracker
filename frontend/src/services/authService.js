import axios from "axios";

const API = "http://localhost:4000/api/user";

export const loginUser = async (data) => {
  const response = await axios.post(`${API}/login`, data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post(`${API}/register`, data);
  return response.data;
};