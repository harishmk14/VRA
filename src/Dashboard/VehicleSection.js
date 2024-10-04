// VehicleSection.js
import React from 'react';
import twow from '../Assets/img/bike.png';
import truck from '../Assets/img/delivery-truck.png';
import sixw from '../Assets/img/bus.png';
import fourw from '../Assets/img/car.png';

const VehicleSection = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2  w-full h-full p-1 '>
      <div className='flex flex-col items-center justify-center border-r border-b'>
        <img src={twow} alt="bike" className="w-14 h-14" />
        <h2 className='text-sm font-bold text-gray-500 '>2 Wheeler</h2>
        <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>20</h2>
      </div>
      <div className='flex flex-col items-center justify-center border-b'>
        <img src={fourw} alt="car" className="w-14 h-14" />
        <h2 className='text-sm font-bold text-gray-500 '>4 Wheeler</h2>
        <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>15</h2>
      </div>
      <div className='flex flex-col items-center justify-center border-r'>
        <img src={sixw} alt="Bus" className="w-14 h-14" />
        <h2 className='text-sm font-bold text-gray-500 '>6 Wheeler</h2>
        <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>9</h2>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <img src={truck} alt="Delivery truck" className="w-14 h-14" />
        <h2 className='text-sm font-bold text-gray-500 '>Delivery Truck</h2>
        <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>12</h2>
      </div>
    </div>
  );
};

export default VehicleSection;
