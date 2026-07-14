import axios from "axios";

const API_URL = "https://expense-tracker-rvip.onrender.com/api/income";

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add Income
export const addIncome = async (data, token) => {
  const response = await axios.post(
    `${API_URL}/add`,
    data,
    getConfig(token)
  );

  return response.data;
};

// Get All Income
export const getIncome = async (token) => {
  const response = await axios.get(
    `${API_URL}/get`,
    getConfig(token)
  );

  return response.data;
};

// Delete Income
export const deleteIncome = async (id, token) => {
  const response = await axios.delete(
    `${API_URL}/delete/${id}`,
    getConfig(token)
  );

  return response.data;
};

// Update Income
export const updateIncome = async (id, data, token) => {
  const response = await axios.put(
    `${API_URL}/update/${id}`,
    data,
    getConfig(token)
  );

  return response.data;
};

// Download Excel
export const downloadIncomeExcel = async (token) => {
  const response = await axios.get(
    `${API_URL}/downloadexcel`,
    {
      ...getConfig(token),
      responseType: "blob",
    }
  );

  return response.data;
};

// Income Overview
export const getIncomeOverview = async (range, token) => {
  const response = await axios.get(
    `${API_URL}/overview?range=${range}`,
    getConfig(token)
  );

  return response.data;
};