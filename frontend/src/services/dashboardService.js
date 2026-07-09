import axios from "axios";

const API_URL = "http://localhost:4000/api/dashboard";

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