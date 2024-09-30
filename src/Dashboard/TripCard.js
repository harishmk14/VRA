// src/components/TripCard.js
import React from 'react';
import Chart from "react-apexcharts";

const TripCard = () => {
  const data = {
    series: [
      {
        name: "Trip",
        data: [220, 420, 20, 380, 100, 45, 250], // Sample data, replace with actual values
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
              color: "rgba(59, 130, 246, 0.5)", // Light blue with opacity
              opacity: 0.5,
            },
            {
              offset: 100,
              color: "rgba(59, 130, 246, 0.2)", // Light blue gradient
              opacity: 0.2,
            },
          ],
        },
      },
      stroke: {
        curve: "straight",
        width: 2,
        colors: ["#3b82f6"], // Line color (blue)
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
          formatter: (val) => `${val}`, // Format for y-axis tooltip
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
    <div className='flex flex-col w-full h-3/5 bg-white shadow-md rounded-2xl justify-center items-center pb-4'>
      <div className='flex h-1/4 w-full p-2 px-3 justify-between'>
        <h2 className="text-lg font-bold text-gray-600">Trips</h2>
        <select className='w-16 text-xs'>
          <option>Yearly</option>
          <option>Month</option>
          <option>Today</option>
        </select>
      </div>
      <div className='flex h-1/4 w-full pl-16'>
        <h2 className='text-5xl font-bold text-blue-500 drop-shadow-md'>1435</h2>
      </div>
      <div className='flex h-2/4 w-full'>
        <Chart options={data.options} series={data.series} type="area" height="100%" />
      </div>
    </div>
  );
};

export default TripCard;
