import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useTheme } from "../context/ThemeContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(formData);

      if (res.success) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        toast.success("Login Successful");

        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-all duration-300
      ${
        darkMode
          ? "bg-[#0B1120]"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-100"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-3xl p-6 sm:p-8 transition-all duration-300
        ${
          darkMode
            ? "bg-[#111827] border border-gray-800 shadow-[0_0_40px_rgba(20,184,166,0.12)]"
            : "bg-white shadow-2xl border border-gray-200"
        }`}
      >
        <h1 className="text-4xl font-bold text-center">
          <span className={darkMode ? "text-white" : "text-gray-900"}>
            Fin
          </span>
          <span className="text-teal-500">Track</span>
        </h1>

        <p
          className={`text-center mt-2 ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Track Every Rupee, Smarter.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              className={`block mb-2 font-medium ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full rounded-xl px-4 py-3 outline-none border transition
              ${
                darkMode
                  ? "bg-[#1E293B] border-gray-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500"
                  : "border-gray-300 focus:ring-2 focus:ring-teal-500"
              }`}
            />
          </div>

          <div>
            <label
              className={`block mb-2 font-medium ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 pr-12 outline-none border transition
                ${
                  darkMode
                    ? "bg-[#1E293B] border-gray-700 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500"
                    : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-slate-400" : "text-gray-500"
                }`}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-70 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          className={`text-center mt-6 ${
            darkMode ? "text-slate-300" : "text-gray-600"
          }`}
        >
          Don't have an account?

          <Link
            to="/register"
            className="text-teal-500 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;