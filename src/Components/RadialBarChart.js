import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const RadialBarChart = () => {
  useEffect(() => {
    const options = {
      series: [44, 55, 67, 83], // Actual values
      chart: {
        height: 270, // Adjusted height to fit the box
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '20px', // Adjust font size
            },
            value: {
              fontSize: '16px',
              show: true,
              formatter: function (val) {
                return val; // Display the actual value
              },
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                return 249; // Total value
              },
            },
          },
        },
      },
      labels: ['Completed', 'In Progress', 'Pending', 'Cancelled'], // Categories
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    return () => {
      chart.destroy(); // Cleanup chart when component unmounts
    };
  }, []);

  return (
    <div className='Boxseperate shadow-md flex-col w-1/4'>
      <div className='flex w-full h-1/5 items-center justify-center p-2'>     
        <h2 className='text-lg font-bold text-gray-600'>Trip Overview</h2>
      </div>
      <div className='flex w-full h-full items-center justify-center'>
        <div id="chart"></div> {/* Chart will render here */}
      </div>
    </div>
  );
};

export default RadialBarChart;
