// VehicleSection.js
import React from 'react';
import twow from '../Assets/img/bike.png';
import truck from '../Assets/img/delivery-truck.png';
import sixw from '../Assets/img/bus.png';
import fourw from '../Assets/img/car.png';
import TripCard from './TripCard';

const VehicleSection = () => {
  return (
    <div className='flex w-2/3 h-full gap-4'>
      <div className='flex flex-col w-1/2 h-full bg-white shadow-md rounded-2xl items-center'>
      <div className='flex w-full h-1/4'>
          <div className='flex w-1/2 h-full items-center justify-center'>
              <img src={twow} alt="bike" className="w-14 h-14"/>
          </div>
          <div className='flex flex-col w-1/2 h-full items-center justify-center'>
              <h2 className='text-sm font-bold text-gray-500 '>2 Wheeler</h2>
              <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>20</h2>
          </div>
      </div>
      <div className='flex w-full h-1/4'>
          <div className='flex w-1/2 h-full items-center justify-center'>
              <img src={fourw} alt="car" className="w-14 h-14" />
          </div>
          <div className='flex flex-col w-1/2 h-full items-center justify-center'>
              <h2 className='text-sm font-bold text-gray-500 '>4 Wheeler</h2>
              <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>15</h2>
          </div>
      </div>
      <div className='flex w-full h-1/4'>
          <div className='flex w-1/2 h-full items-center justify-center'>
              <img src={sixw} alt="Bus" className="w-14 h-14" />
          </div>
          <div className='flex flex-col w-1/2 h-full items-center justify-center'>
              <h2 className='text-sm font-bold text-gray-500 '>6 Wheeler</h2>
              <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>9</h2>
          </div>
      </div>
      <div className='flex w-full h-1/4'>
          <div className='flex w-1/2 h-full items-center justify-center'>
              <img src={truck} alt="Delivery truck" className="w-14 h-14" />
          </div>
          <div className='flex flex-col w-1/2 h-full items-center justify-center'>
              <h2 className='text-sm font-bold text-gray-500 '>Delivery Truck</h2>
              <h2 className='text-3xl font-bold text-blue-500 drop-shadow-md'>12</h2>
          </div>
      </div>
      </div>
      <div className='flex flex-col w-1/2 h-full gap-4'>
        <div className='flex w-full h-2/5 bg-white shadow-md rounded-2xl'>
        <div className='flex flex-col w-2/5 items-center justify-center'>
          <h2 className='text-xl font-bold text-gray-600 '>Total</h2>
          <h2 className='text-3xl font-bold   text-blue-500 drop-shadow-md'>78</h2>
        </div>
        <div className="flex w-[1.5px] max-w-xs h-full bg-gray-300"></div>
        <div className='flex flex-col w-3/5'>
          <div className='flex h-1/2 items-center px-5 justify-between bg-blue-50' style={{borderTopRightRadius:"15px"}}>
            <h2 className='text-xl font-bold text-gray-600 '>User</h2>
            <h2 className='text-2xl font-bold pl-4'>48</h2>
          </div>
          <div className="flex w-full max-w-xs h-[1.5px] bg-gray-300"></div>
          <div className='flex h-1/2 items-center px-5 justify-between bg-blue-50' style={{borderBottomRightRadius:"15px"}}>
            <h2 className='text-xl font-bold text-gray-600 '>Driver</h2>
            <h2 className='text-2xl font-bold pl-4 '>30</h2>
          </div>
        </div>
        </div>
       <TripCard />
      </div>
    </div>
  );
};

export default VehicleSection;
