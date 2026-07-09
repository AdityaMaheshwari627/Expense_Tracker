import React from "react";

const BalanceCard = ({
  title,
  amount,
  icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            {amount}
          </h2>

        </div>

        <div
          className={`${color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
};

export default BalanceCard;