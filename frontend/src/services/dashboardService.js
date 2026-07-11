import axios from "axios";

const API_URL = "https://expense-tracker-rvip.onrender.com";

export const getDashboardData = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};