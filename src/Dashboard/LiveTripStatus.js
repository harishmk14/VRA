import React, { useState } from 'react';

const statusColor = {
  'Ongoing': 'bg-blue-500',
  'Cancelled': 'bg-red-500',
  'Completed': 'bg-green-500',
};

const LiveVehicleStatus = ({ trips }) => {
  const [selectedTrip, setSelectedTrip] = useState(null); // To track selected trip
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Filter modal visibility
  const [filters, setFilters] = useState({
    vehicleType: 'all',
    status: 'all',
    driveOption: 'all',
  });

  // Function to open modal with trip details
  const handleOpenModal = (trip) => {
    setSelectedTrip(trip);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrip(null);
  };

  // Function to open filter popup
  const handleOpenFilter = () => {
    setIsFilterOpen(true);
  };

  // Function to close filter popup
  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApplyFilters = () => {
    console.log('Applied Filters:', filters);
    setIsFilterOpen(false);
  };

  return (
    <div className='flex-col'>
      <div className='flex w-full h-1/6 items-center justify-between px-5 py-3'>
        <h2 className='text-lg font-bold text-gray-600 '>Live Trip Status</h2>
        <button 
          className='text-gray-600 font-bold'
          onClick={handleOpenFilter} // Open filter popup on click
        >
          <i className="bi bi-funnel px-1"></i>Filter
        </button>
      </div>
      <div className='flex flex-col w-full h-5/6 items-center'>
        <div className='flex w-full h-1/12 items-end pb-1'>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Trip No</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Vehicle No</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Driver</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Persons</div>
          <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Status</div>
        </div>
        <div className="flex w-full justify-center items-center px-5">
                  <div className=" w-full h-[0.5px] bg-gray-300"></div>
                </div>
        <div className='flex flex-col w-full overflow-auto max-h-[30vh]'>
          {trips.map((trip, index) => (
            <React.Fragment key={index}>
              <div className='flex w-full items-center py-3.5'>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.tripNo}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.vehicleNo}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.driver}</div>
                <div className='flex w-1/6 h-full justify-center font-bold text-gray-600 text-sm'>{trip.persons}</div>
                <div className='flex w-1/6 h-full items-center font-bold text-gray-600 text-sm'>
                  <span className={`w-2.5 h-2.5 rounded-full mr-2 ${statusColor[trip.status]}`}></span>
                  {trip.status}
                </div>
                <div className='flex w-1/6 h-full justify-center'>
                  <button 
                    className='shadow-md text-xs px-1.5 py-1 rounded-full bg-blue-500 text-white'
                    onClick={() => handleOpenModal(trip)} // Open modal on button click
                  >
                    Details
                  </button>
                </div>
              </div>
              {index < trips.length - 1 && (
                <div className="flex w-full justify-center items-center px-5">
                  <div className=" w-full h-[0.5px] bg-gray-300"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Modal for trip details */}
      {isModalOpen && selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Trip Details</h2>
            <p><strong>Trip No:</strong> {selectedTrip.tripNo}</p>
            <p><strong>Vehicle No:</strong> {selectedTrip.vehicleNo}</p>
            <p><strong>Driver:</strong> {selectedTrip.driver}</p>
            <p><strong>Persons:</strong> {selectedTrip.persons}</p>
            <p><strong>Status:</strong> {selectedTrip.status}</p>
            <div className="flex justify-end mt-4">
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleCloseModal} // Close modal on click
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter trip */}
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">

            {/* X Button in the top-right corner */}
            <button 
              onClick={handleCloseFilter} 
              className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Filter Trips</h2>

            <div className='px-2 py-3'>
              <label className="block text-sm font-medium mb-1">Vehicle Type</label>
              <select 
                className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
                name="vehicleType"
                value={filters.vehicleType}
                onChange={handleFilterChange}
              >
                <option value="all" className="text-gray-400">All Vehicles</option> 
                <option value="bike" className="text-gray-600">Bike</option> 
                <option value="car" className="text-gray-600">Car</option>
                <option value="van" className="text-gray-600">Van</option> 
                <option value="bus" className="text-gray-600">Bus</option> 
                <option value="truck" className="text-gray-600">Truck</option>
              </select>
            </div>

            <div className='px-2 py-3'>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select 
                className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="all" className="text-gray-400">All</option>
                <option value="Ongoing" className="text-gray-600">Ongoing</option>
                <option value="Completed" className="text-gray-600">Completed</option>
                <option value="Cancelled" className="text-gray-600">Cancelled</option>
              </select>
            </div>

            <div className='px-2 py-3'>
              <label className="block text-sm font-medium mb-1">Driver / Self-Drive</label>
              <select 
                className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
                name="driveOption"
                value={filters.driveOption}
                onChange={handleFilterChange}
              >
                <option value="all" className="text-gray-400">All</option>
                <option value="driver" className="text-gray-600">Driver</option>
                <option value="self-drive" className="text-gray-600">Self-Drive</option>
              </select>
            </div>

            {/* Apply and Reset buttons */}
            <div className="flex justify-center space-x-3 px-1 pt-2">
              <button 
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
              <button 
                className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setFilters({ vehicleType: 'all', status: 'all', driveOption: 'all' })} // Reset filters
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveVehicleStatus;