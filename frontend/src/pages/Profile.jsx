import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";
import {
  getCurrentUser,
  updateProfile,
} from "../services/authService";

const Profile = () => {
  const { darkMode } = useTheme();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] =useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getCurrentUser();

      if (res.success) {
        setUser(res.user);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to load profile");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await updateProfile(user);

      if (res.success) {
        toast.success("Profile Updated");

        localStorage.setItem(
          "user",
          JSON.stringify(res.user)
        );

        setUser(res.user);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Profile Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <div
        className={`rounded-3xl shadow-xl p-8 ${
          darkMode
            ? "bg-[#111827] border border-gray-800"
            : "bg-white"
        }`}
      >

        <h1
          className={`text-4xl font-bold mb-8 ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          My Profile
        </h1>

        <div className="flex justify-center mb-8">

          <div className="w-28 h-28 rounded-full bg-teal-600 flex items-center justify-center text-white text-5xl font-bold">

            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label
              className={`block mb-2 font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                darkMode
                  ? "bg-[#1E293B] border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-teal-500"
              }`}
            />

          </div>

          <div>

            <label
              className={`block mb-2 font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                darkMode
                  ? "bg-[#1E293B] border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-teal-500"
              }`}
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading
              ? "Updating..."
              : "Save Changes"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Profile;