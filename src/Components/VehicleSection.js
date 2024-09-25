// src/components/VehicleSection.js
import React from 'react';
import twow from '../Assets/img/bike.png';
import truck from '../Assets/img/delivery-truck.png';
import sixw from '../Assets/img/bus.png';
import fourw from '../Assets/img/car.png';

const VehicleSection = () => {
  return (
    <div className='flex w-3/5 h-full gap-4'>
      <div className='flex flex-col w-1/2 h-full gap-4'>
        <div className='flex w-full h-2/5 bg-red-200 shadow-md rounded-2xl'>
          <div className='flex h-full w-1/2 justify-center items-center'>
            <img src={twow} alt="bike" className="w-20 h-20" />
          </div>
          <div className='flex flex-col h-full w-1/2'>
            <div className='flex h-2/5 w-full justify-center items-center'>
              <h2 className='text-sm font-bold text-red-700 '>2 Wheeler</h2>
            </div>
            <div className='flex w-full justify-center items-center'>
              <h2 className='text-5xl font-bold text-red-700'>20</h2>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full h-3/5 bg-yellow-200 shadow-md rounded-2xl pt-10'>
          <div className='flex w-full'>
            <div className='flex h-full w-1/2 justify-center items-center'>
              <img src={truck} alt="Delivery truck" className="w-20 h-20" />
            </div>
            <div className='flex flex-col h-full w-1/2'>
              <div className='flex h-2/5 w-full justify-center items-center'>
                <h2 className='text-sm font-bold text-yellow-700 '>Deliver Truck</h2>
              </div>
              <div className='flex w-full justify-center items-center'>
                <h2 className='text-5xl font-bold text-yellow-700'>9</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-1/2 h-full gap-4'>
        <div className='flex flex-col w-full h-3/5 bg-blue-200 shadow-md rounded-2xl pt-10'>
          <div className='flex w-full'>
            <div className='flex h-full w-1/2 justify-center items-center'>
              <img src={sixw} alt="Bus" className="w-20 h-20" />
            </div>
            <div className='flex flex-col h-full w-1/2'>
              <div className='flex h-2/5 w-full justify-center items-center'>
                <h2 className='text-sm font-bold text-blue-700 '>6 Wheeler</h2>
              </div>
              <div className='flex w-full justify-center items-center'>
                <h2 className='text-5xl font-bold text-blue-700'>7</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full h-2/5 bg-violet-200 shadow-md rounded-2xl'>
          <div className='flex h-full w-1/2 justify-center items-center'>
            <img src={fourw} alt="car" className="w-20 h-20" />
          </div>
          <div className='flex flex-col h-full w-1/2'>
            <div className='flex h-2/5 w-full justify-center items-center'>
              <h2 className='text-sm font-bold text-violet-700 '>4 Wheeler</h2>
            </div>
            <div className='flex w-full justify-center items-center'>
              <h2 className='text-5xl font-bold text-violet-700'>16</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSection;
