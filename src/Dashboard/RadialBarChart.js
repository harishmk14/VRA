import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const RadialBarChart = () => {
  useEffect(() => {
    const options = {
      series: [44, 55, 67, 83],
      chart: {
        height: 270,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '20px',
            },
            value: {
              fontSize: '16px',
              show: true,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                return 249;
              },
            },
          },
        },
      },
      labels: ['Completed', 'Ongoing', 'Pending', 'Cancelled'],
      colors: ['#16a34a', '#007bff', '#facc15', '#dc2626'],
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div className='flex w-full h-1/5 items-center justify-between px-3 pt-1'>
        <h2 className='text-lg font-bold text-gray-600 pl-1'>Trip Overview</h2>
        <select className='w-16 text-xs pl-1'>
            <option>Today</option>
            <option>Month</option>
            <option>Yearly</option>
          </select>
      </div>
      <div className='flex w-full h-full items-center justify-center'>
        <div id="chart"></div>
      </div>
    </div>
  );
};

export default RadialBarChart;
