// TotalSection.js

import React from 'react';

const TotalAndVehicleAvailability = () => {
  return (
    <div className='flex flex-col w-1/4 h-full bg-white shadow-md rounded-2xl'>
              <div className='flex flex-col w-full h-1/6 items-center justify-center'>
        <h2 className='text-lg font-bold text-gray-600'>Vehicle Availability</h2>
        </div>
        <div className='flex w-full h-1/6 items-center gap-3 px-4'>
                <select className='w-4/6 rounded-md border-2 bg-gray-50 p-1.5 text-xs'>
                    <option value="all">All Vehicles</option>
                    <option value="bike">Bike</option> 
                    <option value="car">Car</option>
                    <option value="van">Van</option> 
                    <option value="bus">Bus</option> 
                    <option value="truck">Delivery Truck</option> 
                </select>
                <input type='number' className='w-2/6 rounded-md border-2 bg-gray-50 py-2 text-xs'/>
        </div>
          <div className='flex flex-col w-full h-3/6 items-center px-4'>
          <div className='flex flex-col h-1/2 w-full justify-center'>
            <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>Start Date</h2>
            </div>
            <div className='flex h-1/2 w-full gap-3'>
                  <input type='date' className='w-3/5 rounded-md border-2 bg-gray-50 p-1 text-xs'/>
                  <input type='time' className='w-2/5 rounded-md border-2 bg-gray-50 p-1 text-xs'/>
            </div>
          </div>
          <div className='flex flex-col h-1/2 w-full justify-center'>
            <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>End Date</h2>
            </div>
            <div className='flex h-1/2 w-full gap-3'>
                  <input type='date' className='w-3/5 rounded-md border-2 bg-gray-50 p-1 text-xs'/>
                  <input type='time' className='w-2/5 rounded-md border-2 bg-gray-50 p-1 text-xs'/>
            </div>
          </div>
        </div>
        <div className='flex w-full h-1/6 items-center px-3 gap-3 justify-center'>
          <button className=' p-1 px-3 rounded-md bg-blue-500 shadow-sm text-sm text-white'>Check</button>
        </div>
    </div>
  );
};

export default TotalAndVehicleAvailability;
