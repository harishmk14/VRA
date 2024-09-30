import React, { useState } from 'react';

const VehicleAvailability = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableVehicles, setAvailableVehicles] = useState([]);

  const handleCheckAvailability = () => {
    // Simulating vehicle data (could be fetched from an API in real-world scenario)
    const mockVehicles = [
      { id: 1, type: 'Bike', number: 'TN-01-1234', status: 'Available' },
      { id: 2, type: 'Car', number: 'TN-02-5678', status: 'Available' },
      { id: 3, type: 'Van', number: 'TN-03-9876', status: 'Unavailable' },
    ];

    // Set the available vehicles and open the modal
    setAvailableVehicles(mockVehicles);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAvailableVehicles([]);
  };

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
        <input type='number' className='w-2/6 rounded-md border-2 bg-gray-50 py-2 text-xs' placeholder='Persons' />
      </div>
      <div className='flex flex-col w-full h-3/6 items-center px-4'>
        <div className='flex flex-col h-1/2 w-full justify-center'>
          <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>Start Date</h2>
          </div>
          <div className='flex h-1/2 w-full gap-3'>
            <input type='date' className='w-3/5 rounded-md border-2 bg-gray-50 p-1 text-xs' />
            <input type='time' className='w-2/5 rounded-md border-2 bg-gray-50 p-1 text-xs' />
          </div>
        </div>
        <div className='flex flex-col h-1/2 w-full justify-center'>
          <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>End Date</h2>
          </div>
          <div className='flex h-1/2 w-full gap-3'>
            <input type='date' className='w-3/5 rounded-md border-2 bg-gray-50 p-1 text-xs' />
            <input type='time' className='w-2/5 rounded-md border-2 bg-gray-50 p-1 text-xs' />
          </div>
        </div>
      </div>
      <div className='flex w-full h-1/6 items-center px-3 gap-3 justify-center'>
        <button
          className='p-1 px-3 rounded-md bg-blue-500 shadow-sm text-sm text-white'
          onClick={handleCheckAvailability}
        >
          Check
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Available Vehicles</h2>
            <div className='flex flex-col'>
              {availableVehicles.length > 0 ? (
                availableVehicles.map((vehicle) => (
                  <div key={vehicle.id} className='flex justify-between items-center mb-2'>
                    <span>{vehicle.type} - {vehicle.number}</span>
                    <span className={`text-xs p-1 rounded-full ${vehicle.status === 'Available' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
                      {vehicle.status}
                    </span>
                  </div>
                ))
              ) : (
                <p>No vehicles available</p>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleAvailability;
