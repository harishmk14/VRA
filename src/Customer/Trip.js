import React from 'react';

const Trip = ({ Trip, onClose, onAssign }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-32">
      <div className="bg-zinc-100 p-6 py-0 rounded-xl shadow-lg overflow-auto w-1/3 h-full">
        <div className="flex justify-between items-center sticky top-0 bg-zinc-100 z-10 p-4 px-1">
          <h2 className="text-2xl font-bold">Trips</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <ul className="overflow-y-auto">
          {Trip.map((Trip) => (
            <li key={Trip.id} className="flex items-center justify-between mb-2 p-2 border-b">
<div className="flex items-center">
  <span className="text-lg">
    {Trip.tripArea} <span className='text-base text-gray-500'>({Trip.tripType})</span>
  </span>
</div>
              <div className="flex space-x-2"> 
                  <i className="bi bi-eye-fill text-blue-500 text-lg cursor-pointer" onClick={() => onAssign(Trip)}></i>
                <div
    className={` flex px-2 py-1 w-28 justify-center rounded-lg ${
      Trip.status === 'Completed' ? 'text-blue-500' : 
      Trip.status === 'Pending' ? 'text-yellow-500' : 
      Trip.status === 'In Journey' ? 'text-green-500' : 
      Trip.status === 'Cancelled' ? 'text-red-500' : 
      'text-gray-500' 
    }`}
  >
    {Trip.status}
  </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trip;
