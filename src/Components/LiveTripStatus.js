// LiveTripStatus.js
import React from 'react';

const LiveVehicleStatus = ({ trips }) => {
  return (
    <div className='Boxseperate shadow-md flex-col w-2/4'>
      <div className='flex w-full h-1/6 items-center justify-between px-5'>     
        <h2 className='text-lg font-bold text-gray-600 pl-1'>Live Trip Status</h2>
        <button className='text-gray-600 font-bold'><i className="bi bi-funnel px-1"></i>Filter</button>
      </div>
      <div className='flex flex-col w-full h-5/6 items-center'>
        <div className='flex w-full h-1/12 items-end pb-1'>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Trip No </div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Vehicle No</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Driver</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Persons</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Status</div>
        </div>
        <div className=" flex w-11/12 h-[0.5px] bg-gray-300"></div>
        <div className='flex flex-col w-full overflow-auto max-h-[30vh]'>
          {trips.map((trip, index) => (
            <React.Fragment key={index}>
              <div className='flex w-full  items-center py-3.5 '>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.tripNo}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.vehicleNo}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.driver}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.persons}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.status}</div>
                <div className='flex w-1/6 h-full justify-center'>
                  <button className='shadow-md text-xs px-1.5 py-1 rounded-full bg-blue-500 text-white'>Details</button>
                </div>
              </div>
              {index < trips.length - 1 && (
                <div className="flex w-full justify-center items-center ">
                  <div className="w-11/12 h-[0.5px] bg-gray-300"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveVehicleStatus;
