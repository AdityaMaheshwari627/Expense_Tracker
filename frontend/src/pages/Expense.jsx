import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  addExpense,
  getExpense,
  deleteExpense,
  updateExpense,
} from "../services/expenseService";

import ExpenseForm from "../components/Expense/ExpenseForm";
import ExpenseList from "../components/Expense/ExpenseList";

const Expense = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const [expenseList, setExpenseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchExpense();
  }, []);

  const fetchExpense = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getExpense(token);

      setExpenseList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load expenses");
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
        res = await updateExpense(editingId, formData, token);
      } else {
        res = await addExpense(formData, token);
      }

      if (res.success) {
        toast.success(res.message);

        setFormData({
          description: "",
          amount: "",
          category: "",
          date: "",
        });

        setIsEditing(false);
        setEditingId(null);

        fetchExpense();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add expense"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;

    try {
      const token = localStorage.getItem("token");

      const res = await deleteExpense(id, token);

      if (res.success) {
        toast.success(res.message);
        fetchExpense();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed"
      );
    }
  };

  const handleEdit = (expense) => {
    setFormData({
      description: expense.description,
      amount: expense.amount,
      category: expense.category,
      date: expense.date.split("T")[0],
    });

    setEditingId(expense._id);
    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancel = () => {
    setFormData({
      description: "",
      amount: "",
      category: "",
      date: "",
    });

    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Expense
        </h1>

        <p className="text-gray-500 mt-2">
          Add and manage all your expenses.
        </p>
      </div>

      <ExpenseForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        isEditing={isEditing}
        handleCancel={handleCancel}
      />

      <ExpenseList
        expenseList={expenseList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

    </div>
  );
};

export default Expense;