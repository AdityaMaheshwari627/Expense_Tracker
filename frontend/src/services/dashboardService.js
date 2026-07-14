import axios from "axios";

const API_URL = "https://expense-tracker-rvip.onrender.com/api/dashboard";

export const getDashboardData = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};