// src/components/IncomeExpenseCard.js
import React from 'react';
import Chart from 'react-apexcharts';

const IncomeExpenseCard = () => {
  const data = {
    series: [
      {
        name: 'Income',
        data: [40000, 5000, 15000, 2000, 30000, 4000, 25000], 
      },
      {
        name: 'Expense',
        data: [1800, 2150, 5000, 100, 5600, 80, 6000], 
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false, 
        },
      },
      stroke: {
        curve: 'smooth', 
      },
      colors: ['#60a5fa', '#86efac'], 
      xaxis: {
        labels: {
          show: false, 
        },
        axisBorder: {
          show: false, 
        },
        axisTicks: {
          show: false, 
        },
        categories: [
          '2023-09-19T00:00:00.000Z',
          '2023-09-19T01:30:00.000Z',
          '2023-09-19T02:30:00.000Z',
          '2023-09-19T03:30:00.000Z',
          '2023-09-19T04:30:00.000Z',
          '2023-09-19T05:30:00.000Z',
          '2023-09-19T06:30:00.000Z',
        ], 
      },
      yaxis: {
        show: false, 
      },
      dataLabels: {
        enabled: false, 
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val) => `₹${val}`, 
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.9, 
          opacityTo: 0.6,   
        },
      },
      markers: {
        size: 0, 
      },
      grid: {
        show: false, 
      },
      legend: {
        show: true, 
      },
    },
  };

  return (
    <div className="flex-col">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-lg font-bold text-gray-600">Income & Expense</h2>
        <select className="w-16 text-xs">
          <option>Month</option>
          <option>Year</option>
          <option>Today</option>
        </select>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="flex w-full gap-3 px-6 pt-3">
          <h3 className="text-2xl font-bold text-blue-500">
            <i className="bi bi-currency-rupee"></i>30000
          </h3>
          <span className="flex items-center text-sm text-blue-500">
            <i className="bi bi-arrow-up"></i>
            <span className="ml-1">0.48%</span>
          </span>
          <h3 className="text-2xl font-bold pl-5 text-green-500">
            <i className="bi bi-currency-rupee"></i>9000
          </h3>
          <span className="flex items-center text-sm text-green-500">
            <i className="bi bi-arrow-down"></i>
            <span className="ml-1">0.13%</span>
          </span>
        </div>
        <div className="w-full h-full pt-3">
          <Chart options={data.options} series={data.series} type="area" height="120%" />
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
