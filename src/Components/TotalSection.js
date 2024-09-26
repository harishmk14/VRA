// TotalSection.js

import React from 'react';

const TotalAndVehicleAvailability = () => {
  return (
    <div className='flex flex-col w-1/4 h-full gap-4'>
      <div className='flex w-full h-2/5 bg-white shadow-md rounded-2xl'>
        <div className='flex flex-col w-2/5 items-center justify-center'>
          <h2 className='text-3xl font-bold text-gray-500 '>Total</h2>
          <h2 className='text-4xl font-bold  drop-shadow-md '>78</h2>
        </div>
        <div className="flex w-[1px] max-w-xs h-full bg-gray-300"></div>
        <div className='flex flex-col w-3/5'>
          <div className='flex h-1/2 items-center px-5 justify-between'>
            <h2 className='text-xl font-bold text-gray-600 '>User</h2>
            <h2 className='text-2xl font-bold pl-4'>48</h2>
          </div>
          <div className="flex w-full max-w-xs h-[1px] bg-gray-300"></div>
          <div className='flex h-1/2 items-center px-5 justify-between'>
            <h2 className='text-xl font-bold text-gray-600 '>Driver</h2>
            <h2 className='text-2xl font-bold pl-4 '>30</h2>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full h-3/5 bg-white shadow-md rounded-2xl'>
        <div className='flex w-full h-1/3 items-center pt-1 justify-center'>
          <h2 className='text-lg font-bold text-gray-600 '>Vehicle Availability</h2>
        </div>
        <div className='flex w-full h-1/3 items-center px-5'>
          <select className='w-full rounded-md border-2 bg-gray-50 p-1'>
            <option>Select a Vehicle</option>
          </select>
        </div>
        <div className='flex w-full h-1/3 items-center px-3 gap-3 justify-center'>
          <button className='w-1/3 p-1 rounded-md border-2 shadow-sm'>Check</button>
        </div>
      </div>
    </div>
  );
};

export default TotalAndVehicleAvailability;
