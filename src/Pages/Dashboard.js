// Dashboard
import React from 'react';
import '../index.css';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-full gap-5'>
        <div className='flex flex-grow gap-5 w-full h-1/4'>
              <div className='Boxseperate shadow-md'></div>
              <div className='Boxseperate shadow-md'></div>
              <div className='Boxseperate shadow-md'></div>
              <div className='Boxseperate shadow-md'></div>
        </div>
        <div className='flex flex-grow w-full h-2/4 gap-5 '>
              <div className='flex w-3/5 h-full bg-white shadow-md rounded-2xl'></div>
              <div className='flex w-2/5 h-full bg-white shadow-md rounded-2xl'></div>
        </div>
        <div className='flex flex-grow w-full h-1/4 gap-5'>
              <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
              <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
              <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
        </div>
      
    </div>

  );
};

export default Dashboard;
