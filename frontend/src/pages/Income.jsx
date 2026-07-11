import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addIncome,
  getIncome,
  deleteIncome,
  updateIncome,
} from "../services/incomeService";

import IncomeForm from "../components/Income/IncomeForm";
import IncomeList from "../components/Income/IncomeList";

const Income = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const [incomeList, setIncomeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchIncome();
  }, []);

  const resetForm = () => {
    setFormData({
      description: "",
      amount: "",
      category: "",
      date: "",
    });

    setIsEditing(false);
    setEditId(null);
  };

  const fetchIncome = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getIncome(token);

      setIncomeList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load income");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.description ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      let res;

      if (isEditing) {
        res = await updateIncome(editId, formData, token);
      } else {
        res = await addIncome(formData, token);
      }

      if (res.success) {
        toast.success(
          isEditing
            ? "Income Updated Successfully"
            : "Income Added Successfully"
        );

        resetForm();
        fetchIncome();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Operation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this income?")) return;

    try {
      const token = localStorage.getItem("token");

      const res = await deleteIncome(id, token);

      if (res.success) {
        toast.success(res.message);
        fetchIncome();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  const handleEdit = (income) => {
    setFormData({
      description: income.description,
      amount: income.amount,
      category: income.category,
      date: income.date.slice(0, 10),
    });

    setEditId(income._id);
    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Income
        </h1>

        <p className="text-gray-500 mt-2">
          Add and manage all your income sources.
        </p>
      </div>

      <IncomeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        isEditing={isEditing}
        handleCancel={handleCancel}
      />

      <IncomeList
        incomeList={incomeList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

    </div>
  );
};

export default Income;