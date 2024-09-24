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

const IncomeGraph = () => {
  const data = {
    labels: Array(12).fill(""), // Add appropriate labels if needed
    datasets: [
      {
        label: "Income",
        data: [15, 9, 12, 10, 8, 7, 10, 12, 9, 8, 12, 18], // Sample data, replace with actual values
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4, // Smooths the line
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
        radius: 0, // Hide data points
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

export default IncomeGraph;
