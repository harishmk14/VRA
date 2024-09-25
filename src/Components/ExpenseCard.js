// src/components/ExpenseCard.js
import React from 'react';
import Chart from "react-apexcharts";

const ExpenseCard = () => {
  const data = {
    series: [
      {
        name: "Expense",
        data: [1800, 2150, 5000, 100, 5600, 80, 6000], // Sample data
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 160,
        toolbar: {
          show: false, // Hide the toolbar
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 99, 132, 0.5)", // Light red with opacity
              opacity: 0.5,
            },
            {
              offset: 100,
              color: "rgba(255, 99, 132, 0.2)", // Light red gradient
              opacity: 0.2,
            },
          ],
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["rgba(255, 99, 132, 1)"], // Line color (red)
      },
      xaxis: {
        labels: {
          show: false, // Hide x-axis labels
        },
        axisBorder: {
          show: false, // Hide x-axis border
        },
        axisTicks: {
          show: false, // Hide x-axis ticks
        },
      },
      yaxis: {
        show: false, // Hide y-axis
      },
      grid: {
        show: false, // Remove grid lines
      },
      markers: {
        size: 0, // Hide markers (data points)
      },
      tooltip: {
        enabled: false, // Hide tooltips
      },
      legend: {
        show: false, // Hide legend
      },
      dataLabels: {
        enabled: false, // Disable numbers on the graph
      },
    },
  };

  return (
    <div className="flex-col w-full h-1/2 bg-white shadow-md rounded-2xl pt-2">
      <div className="flex w-full h-1/10 items-center justify-center">
        <h2 className="text-lg font-bold text-gray-600">Expense</h2>
      </div>
      <div className="flex-col w-full h-9/10 items-center justify-center mt-1">
        <div className="flex w-full justify-between mt-1 px-2">
          <h3 className="text-xl font-bold "><i className="bi bi-currency-rupee"></i>9000</h3>
          <span className="flex items-center text-sm text-red-500">
            <i className="bi bi-arrow-down"></i>
            <span className="ml-1">0.13%</span>
          </span>
        </div>
        <div className="w-full h-16">
          <Chart options={data.options} series={data.series} type="area" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
