import React, { useState, useEffect } from "react";
import { addIncome, getIncome } from "../services/incomeService";
import toast from "react-hot-toast";

const Income = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const [incomeList, setIncomeList] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await addIncome(formData, token);

      if (res.success) {
        toast.success("Income Added Successfully");

        setFormData({
          description: "",
          amount: "",
          category: "",
          date: "",
        });

        fetchIncome();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add income"
      );
    }
  };

  const fetchIncome = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getIncome(token);

      console.log("Income API Response:", res);

      if (res.success) {
        setIncomeList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Income
        </h1>

        <p className="text-gray-500 mt-1">
          Add and manage all your income sources.
        </p>
      </div>

      {/* Add Income Form */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-xl font-semibold mb-5">
          Add New Income
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            className="bg-teal-600 text-white rounded-xl py-3 hover:bg-teal-700 transition md:col-span-2"
          >
            Add Income
          </button>

        </form>

      </div>

      {/* Income List */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-xl font-semibold mb-4">
          Income History
        </h2>

        <p className="text-gray-500">
          No income added yet
        </p>

      </div>

    </div>
  );
};

export default Income;