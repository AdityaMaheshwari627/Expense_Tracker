import axios from "axios";

const API_URL = "http://localhost:4000/api/expense";

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add Expense
export const addExpense = async (data, token) => {
  const response = await axios.post(
    `${API_URL}/add`,
    data,
    getConfig(token)
  );

  return response.data;
};

// Get Expense
export const getExpense = async (token) => {
  const response = await axios.get(
    `${API_URL}/get`,
    getConfig(token)
  );

  return response.data;
};

// Delete Expense
export const deleteExpense = async (id, token) => {
  const response = await axios.delete(
    `${API_URL}/delete/${id}`,
    getConfig(token)
  );

  return response.data;
};

// Update Expense
export const updateExpense = async (id, data, token) => {
  const response = await axios.put(
    `${API_URL}/update/${id}`,
    data,
    getConfig(token)
  );

  return response.data;
};

// Download Excel
export const downloadExpenseExcel = async (token) => {
  const response = await axios.get(
    `${API_URL}/downloadexcel`,
    {
      ...getConfig(token),
      responseType: "blob",
    }
  );

  return response.data;
};

// Expense Overview
export const getExpenseOverview = async (range, token) => {
  const response = await axios.get(
    `${API_URL}/overview?range=${range}`,
    getConfig(token)
  );

  return response.data;
};