import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onFilterSelect }) => {
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [driverType, setDriverType] = useState('');
  const [shift, setShift] = useState('');
  const [dlCategory, setDlCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]); 
  const [minPrice, maxPrice] = priceRange;

  const handleFilterClick = () => {
    const filterData = {
      status,
      gender,
      driverType,
      shift,
      dlCategory,
      priceRange,
    };
    onFilterSelect(filterData);
    onClose();
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const handleReset = () => {
    setStatus('');
    setGender('');
    setDriverType('');
    setShift('');
    setDlCategory('');
    setPriceRange([0, 50000]);
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-1/3 relative">
        
        <button 
          onClick={onClose} 
          className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-gray-900">
          &times;
        </button>
        
        <h2 className="text-xl font-semibold mb-4">Filter Drivers</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Gender */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="" className="text-gray-400">Select Gender</option>
              <option value="Male" className="text-gray-600">Male</option>
              <option value="Female" className="text-gray-600">Female</option>
              <option value="Others" className="text-gray-600">Others</option>
            </select>
          </div>

          {/* Driver Type */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Driver Type</label>
            <select
              value={driverType}
              onChange={(e) => setDriverType(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="" className="text-gray-400">Select Driver Type</option>
              <option value="Permanent" className="text-gray-600">Permanent</option>
              <option value="Acting" className="text-gray-600">Acting</option>
            </select>
          </div>

          {/* Shift */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Shift</label>
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="" className="text-gray-400">Select Shift</option>
              <option value="Day" className="text-gray-600">Day</option>
              <option value="Night" className="text-gray-600">Night</option>
              <option value="Both" className="text-gray-600">Both</option>
            </select>
          </div>

          {/* DL Category */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">DL Category</label>
            <select
              value={dlCategory}
              onChange={(e) => setDlCategory(e.target.value)}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            >
              <option value="" className="text-gray-400">Select DL Category</option>
              <option value="Light Motor Vehicle" className="text-gray-600">Light Motor Vehicle</option>
              <option value="Heavy Motor Vehicle" className="text-gray-600">Heavy Motor Vehicle</option>
              <option value="Commercial Vehicle" className="text-gray-600">Commercial Vehicle</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Salary Range: {minPrice} - {maxPrice}</label>
          <div className="flex space-x-4">
            <input
              type="range"
              min="0"
              max="50000"
              step="100"
              value={minPrice}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="50000"
              step="100"
              value={maxPrice}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex justify-end mt-4">
          <button
            onClick={handleFilterClick}
            className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600"
          >
            Apply
          </button>
          <button
            onClick={handleReset}
            className="ml-2 bg-gray-300 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
