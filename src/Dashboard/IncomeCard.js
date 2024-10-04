// src/components/IncomeCard.js
import React from 'react';
import Chart from "react-apexcharts";

const IncomeCard = () => {
  const data = {
    series: [
      {
        name: "Income",
        data: [40000, 5000, 15000, 2000, 30000, 4000, 25000,], // Sample data, replace with actual values
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
              color: "rgba(144, 238, 144, 0.5)", // Light green with opacity
              opacity: 0.5,
            },
            {
              offset: 100,
              color: "rgba(144, 238, 144, 0.2)", // Light green gradient
              opacity: 0.2,
            },
          ],
        },
      },
      stroke: {
        curve: "straight",
        width: 2,
        colors: ["rgba(144, 238, 144, 1)"], // Line color (light green)
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
        enabled: true, // Enable tooltips
        shared: true, // Show all series in the tooltip
        intersect: false, // Allow tooltip to show for all data points
        x: {
          format: 'dd/MM/yy', // Format for x-axis tooltip
        },
        y: {
          formatter: (val) => `₹${val}`, // Format for y-axis tooltip
        },
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
    <div className="flex-col w-full h-1/2 pt-1z">
      <div className="flex w-full h-1/10 items-center justify-between px-3">
        <h2 className="text-lg font-bold text-gray-600">Income</h2>
        <select className='w-16 text-xs'>
            <option>Month</option>
            <option>Today</option>
            <option>Yearly</option>
          </select>
      </div>
      <div className="flex-col w-full h-9/10 items-center justify-center">
        <div className="flex w-full justify-between px-2 mt">
          <h3 className="text-xl font-bold "><i className="bi bi-currency-rupee"></i>30000</h3>
          <span className="flex items-center text-sm text-green-500">
            <i className="bi bi-arrow-up"></i>
            <span className="ml-1">0.48%</span>
          </span>
        </div>
        <div className="w-full h-16">
          <Chart options={data.options} series={data.series} type="area" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
