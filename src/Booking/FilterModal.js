// FilterModal.js
import React from 'react';

const FilterModal = ({ onClose, onApply }) => {
  const [filterValues, setFilterValues] = React.useState({
    bookingType: '',
    vehicleType: '',
    driveMode: '',
    verification: '',
    tripStartDate: '',
    tripEndDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filterValues);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-1/3 relative">

        {/* X Button in the top-right corner */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold mb-4">Filter Bookings</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <div>
            <label className="block mb-1">Booking Type:</label>
            <select name="bookingType" onChange={handleChange} className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300">
              <option value="">All</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Vehicle Type:</label>
            <select name="vehicleType" onChange={handleChange} className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300">
              <option value="">All</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Van">Van</option>
              <option value="Bus">Bus</option>
              <option value="Delivery Truck">Delivery Truck</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Drive Mode:</label>
            <select name="driveMode" onChange={handleChange} className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300">
              <option value="">All</option>
              <option value="Driver">Driver</option>
              <option value="Self Drive">Self Drive</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Verification:</label>
            <select name="verification" onChange={handleChange} className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300">
              <option value="">All</option>
              <option value="Verified">Verified</option>
              <option value="Not Verified">Not Verified</option>
            </select>
          </div>

          {/* Removed Booked Date input field */}

          <div>
            <label className="block mb-1">Trip Start Date:</label>
            <input
              type="date"
              name="tripStartDate"
              onChange={handleChange}
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block mb-1">Trip End Date:</label>
            <input
              type="date"
              name="tripEndDate"
              onChange={handleChange}
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply</button>
            <button type="button" onClick={onClose} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
