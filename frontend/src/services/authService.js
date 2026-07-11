import axios from "axios";

const API = "https://expense-tracker-rvip.onrender.com";

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Login
export const loginUser = async (data) => {
  const response = await axios.post(`${API}/login`, data);
  return response.data;
};

// Register
export const registerUser = async (data) => {
  const response = await axios.post(`${API}/register`, data);
  return response.data;
};

// Get Current User
export const getCurrentUser = async () => {
  const response = await axios.get(
    `${API}/me`,
    getConfig()
  );

  return response.data;
};

// Update Profile
export const updateProfile = async (data) => {
  const response = await axios.put(
    `${API}/profile`,
    data,
    getConfig()
  );

  return response.data;
};

// Change Password
export const updatePassword = async (data) => {
  const response = await axios.put(
    `${API}/password`,
    data,
    getConfig()
  );

  return response.data;
};