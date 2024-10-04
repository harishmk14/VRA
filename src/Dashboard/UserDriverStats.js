// src/Dashboard/UserDriverStats.js

import React from 'react';

const UserDriverStats = ({ title, total, active }) => {
  return (
    <div className={`flex flex-col pt-1 ${title === 'User' ? 'border-b-2' : ''}`}>
      <span className='text-lg font-bold text-gray-600 px-4'>{title}</span>
      <div className='flex justify-center items-center gap-7'>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>{total}</h2>
          <h2 className='text-2xl font-bold text-gray-600'>Total</h2>
        </div>
        <div className="flex w-[0.5px] h-20 bg-gray-300"></div>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>{active}</h2>
          <h2 className='text-2xl font-bold text-gray-600'>Active</h2>
        </div>
      </div>
    </div>
  );
};

export default UserDriverStats;
