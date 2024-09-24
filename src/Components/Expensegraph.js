import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ExpenseGraph = () => {
  const data = {
    labels: Array(12).fill(""), // Add appropriate labels if needed
    datasets: [
      {
        label: "Expense",
        data: [18, 12, 9, 8, 7, 10, 9, 8, 12, 10, 9, 15], // Sample data
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Red gradient fill
        borderColor: "rgba(255, 99, 132, 1)", // Red line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, // Hide y-axis
      },
      x: {
        display: false, // Hide x-axis
      },
    },
    elements: {
      point: {
        radius: 0, // Hide points
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <div className="w-full h-16 rounded-2xl">
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenseGraph;
