import incomeModel from "../models/incomeModel.js";
import expenseModel from "../models/expenseModel.js";

export async function getDashboardData(req, res) {
  try {
    const userId = req.user._id;

    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // ==========================
    // Fetch Income & Expense
    // ==========================

    const incomes = await incomeModel.find({
      userId,
      date: {
        $gte: startOfYear,
        $lte: now,
      },
    }).lean();

    const expenses = await expenseModel.find({
      userId,
      date: {
        $gte: startOfYear,
        $lte: now,
      },
    }).lean();

    // ==========================
    // Summary
    // ==========================

    const monthlyIncome = incomes.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

    const monthlyExpense = expenses.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

    const savings = monthlyIncome - monthlyExpense;

    const savingsRate =
      monthlyIncome === 0
        ? 0
        : Math.round((savings / monthlyIncome) * 100);

    // ==========================
    // Recent Transactions
    // ==========================

    const recentTransactions = [
      ...incomes.map((item) => ({
        ...item,
        type: "income",
      })),
      ...expenses.map((item) => ({
        ...item,
        type: "expense",
      })),
    ]
      .sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      )
      .slice(0, 5);

    // ==========================
    // Expense Category
    // ==========================

    const spendByCategory = {};

    expenses.forEach((expense) => {
      const category = expense.category || "Other";

      spendByCategory[category] =
        (spendByCategory[category] || 0) +
        Number(expense.amount || 0);
    });

    const expenseDistribution = Object.entries(
      spendByCategory
    ).map(([category, amount]) => ({
      category,
      amount,
      percent:
        monthlyExpense === 0
          ? 0
          : Math.round((amount / monthlyExpense) * 100),
    }));

    // ==========================
    // Monthly Analytics
    // ==========================

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyData = months.map((month, index) => {
      const income = incomes
        .filter(
          (item) =>
            new Date(item.date).getMonth() === index
        )
        .reduce(
          (sum, item) =>
            sum + Number(item.amount || 0),
          0
        );

      const expense = expenses
        .filter(
          (item) =>
            new Date(item.date).getMonth() === index
        )
        .reduce(
          (sum, item) =>
            sum + Number(item.amount || 0),
          0
        );

      return {
        month,
        income,
        expense,
      };
    });

    // ==========================
    // Response
    // ==========================

    return res.status(200).json({
      success: true,
      data: {
        monthlyIncome,
        monthlyExpense,
        savings,
        savingsRate,

        monthlyData,

        expenseDistribution,

        recentTransactions,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Dashboard Fetch Failed",
    });
  }
}