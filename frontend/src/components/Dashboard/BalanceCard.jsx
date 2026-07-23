import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTheme } from "../../context/ThemeContext";

const variants = {
  balance: {
    gradient: "from-violet-600/20 to-violet-900/10",
    icon: "bg-violet-600",
    glow: "shadow-[0_0_40px_rgba(139,92,246,.25)]",
    text: "text-violet-400",
    graph: "stroke-violet-500",
  },

  income: {
    gradient: "from-emerald-600/20 to-emerald-900/10",
    icon: "bg-emerald-600",
    glow: "shadow-[0_0_40px_rgba(34,197,94,.25)]",
    text: "text-emerald-400",
    graph: "stroke-emerald-500",
  },

  expense: {
    gradient: "from-orange-600/20 to-orange-900/10",
    icon: "bg-orange-600",
    glow: "shadow-[0_0_40px_rgba(249,115,22,.25)]",
    text: "text-orange-400",
    graph: "stroke-orange-500",
  },
};

const BalanceCard = ({
  title,
  amount,
  icon,
  variant = "balance",
}) => {
  const { darkMode } = useTheme();

  const style = variants[variant];

  const value =
    Number(String(amount).replace(/[₹,\s]/g, "")) || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        p-7
        transition-all
        duration-300
        ${style.glow}

        ${
          darkMode
            ? `bg-gradient-to-br ${style.gradient} border border-white/10`
            : "bg-white border border-gray-200 shadow-xl"
        }
      `}
    >
      <div className="flex justify-between items-start">

        <div>

          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            {title}
          </p>

          <h2
            className={`mt-4 text-4xl lg:text-5xl font-extrabold ${
              darkMode ? style.text : "text-gray-900"
            }`}
          >
            ₹{value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            text-white
            ${style.icon}
            shadow-lg
          `}
        >
          {icon}
        </div>

      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-20 opacity-40"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 70
            C40 50 60 65 90 55
            S150 25 190 45
            S250 80 300 55
            S360 30 400 60
          "
          fill="none"
          strokeWidth="3"
          className={style.graph}
        />
      </svg>

      <div
        className="
          absolute
          -right-10
          -top-10
          w-40
          h-40
          rounded-full
          bg-white/5
          blur-3xl
        "
      />
    </motion.div>
  );
};

export default BalanceCard;