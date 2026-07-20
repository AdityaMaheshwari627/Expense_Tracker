import React from "react";
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
    icon: "bg-green-600",
    glow: "shadow-[0_0_40px_rgba(34,197,94,.25)]",
    text: "text-green-400",
    graph: "stroke-green-500",
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

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        p-7
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.02]
        ${style.glow}

        ${
          darkMode
            ? `bg-gradient-to-br ${style.gradient} border border-white/10`
            : "bg-white shadow-xl"
        }
      `}
    >
      {/* Content */}

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
            className={`mt-4 text-5xl font-extrabold ${
              darkMode
                ? style.text
                : "text-gray-900"
            }`}
          >
            {amount}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
            text-2xl
            text-white
            ${style.icon}
          `}
        >
          {icon}
        </div>

      </div>

      {/* Decorative Graph */}

      <svg
        className="absolute bottom-0 left-0 w-full h-20 opacity-40"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 70
             C40 50 60 65 90 55
             S150 25 190 45
             S250 80 300 55
             S360 30 400 60"
          fill="none"
          strokeWidth="3"
          className={style.graph}
        />
      </svg>

      {/* Blur Circle */}

      <div
        className="
        absolute
        -right-10
        -top-10
        w-36
        h-36
        rounded-full
        bg-white/5
        blur-3xl
      "
      />
    </div>
  );
};

export default BalanceCard;