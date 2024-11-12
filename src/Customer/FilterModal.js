// FilterModal.js
import React from 'react';

const FilterModal = ({ onClose, onApply }) => {
  const [filterValues, setFilterValues] = React.useState({
    gender: '', 
    registrationDate: '',
    customerIdPrefix: '',
    customerIdSuffix: '',
    performance: '',
    numberOfTrips: '',
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-3/6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold mb-4">Filter Bookings</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">


        <div>
            <label className="block mb-1">Registration Date</label>
            <input 
              type="date" 
              name="registrationDate" 
              onChange={handleChange} 
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required 
            />
          </div>
          
          <div>
            <label className="block mb-1">Gender</label>
            <select 
              name="gender" 
              onChange={handleChange} 
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Customer ID</label>
            <div className="flex space-x-2">
              <input 
                type="number" 
                name="customerIdPrefix" 
                onChange={handleChange} 
                className="border p-1 w-1/2 rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                placeholder="CUS From"
                maxLength={5} 
              />
              <input 
                type="number" 
                name="customerIdSuffix" 
                onChange={handleChange} 
                className="border p-1 w-1/2 rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                placeholder="CUS To"
                maxLength={5} 
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Performance</label>
            <select 
              name="performance" 
              onChange={handleChange} 
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select Performance</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Number of Trips Attended</label>
            <input 
              type="number" 
              name="numberOfTrips" 
              onChange={handleChange} 
              className="border p-1 w-full rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              min={0} 
              placeholder="Enter number of trips" 
              required 
            />
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <button type="submit" className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600">Apply</button>
            <button type="button" className="ml-2 bg-gray-300 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-400" onClick={() => setFilterValues({})}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
