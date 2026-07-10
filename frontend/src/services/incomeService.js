import axios from "axios";

const API_URL = "http://localhost:4000/api/income";

export const addIncome = async (data, token) => {
  const response = await axios.post(`${API_URL}/add`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getIncome = async (token) => {
  const response = await axios.get(`${API_URL}/get`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};