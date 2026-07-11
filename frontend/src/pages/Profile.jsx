import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getCurrentUser,
  updateProfile,
} from "../services/authService";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getCurrentUser();

      if (res.success) {
        setUser(res.user);
      }
    } catch (error) {
      console.log(error);
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
        toast.success("Profile Updated Successfully");

        localStorage.setItem(
          "user",
          JSON.stringify(res.user)
        );

        setUser(res.user);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Profile update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Profile
        </h1>

        <div className="flex justify-center mb-8">

          <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center text-white text-4xl font-bold">
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

            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Profile;