import React, { useState, useEffect } from 'react';

const vehicleCategoriesMap = {
  Bike: [
    'Scooters', 'Commuter Bikes', 'Sportbikes', 'Cruiser Bikes',
    'Touring Bikes', 'Adventure Bikes', 'Dirt Bikes', 'Electric Bikes'
  ],
  Car: [
    'Economy Hatchbacks', 'Sedans', 'Crossovers', 'Full-Size SUVs',
    'Luxury Cars', 'MUVs / MPVs', 'Electric Cars'
  ],
  Van: ['Normal', 'Mini Van'],
  Bus: ['Normal', 'Mini Bus'],
  'Delivery Truck': [
    'Mini Trucks', 'Pickup Trucks', 'Intermediate Commercial Vehicles (ICVs)',
    'Heavy Commercial Vehicles (HCVs)', 'Multi-Axle Trucks', 'Container Trucks',
    'Tipper Trucks'
  ],
};

const FilterModal = ({ isOpen, onClose, onFilterSelect }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [availableCategories, setAvailableCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]); 
  const [minPrice, maxPrice] = priceRange;

  useEffect(() => {
    if (selectedVehicleType) {
      setAvailableCategories(vehicleCategoriesMap[selectedVehicleType]);
      setSelectedCategory(''); 
    }
  }, [selectedVehicleType]);

  const handleFilterClick = () => {
    const filterData = {
      vehicleType: selectedVehicleType,
      category: selectedCategory,
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
    setSelectedVehicleType('');
    setAvailableCategories([]);
    setSelectedCategory('');
    setPriceRange([0, 50000]);
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
        
        <button 
          onClick={onClose} 
          className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-gray-900">
          &times;
        </button>
        
        <h2 className="text-xl font-semibold mb-4">Filter Vehicles</h2>

        {/* Vehicle Type */}
        <div className="px-2 py-3">
          <label className="block text-sm font-medium mb-1">Vehicle Type</label>
          <select
            value={selectedVehicleType}
            onChange={(e) => setSelectedVehicleType(e.target.value)}
            className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
          >
            <option value="" className="text-gray-400">Select Vehicle Type</option>
            <option value="Bike" className="text-gray-600">Bike</option>
            <option value="Car" className="text-gray-600">Car</option>
            <option value="Van" className="text-gray-600">Van</option>
            <option value="Bus" className="text-gray-600">Bus</option>
            <option value="Delivery Truck" className="text-gray-600">Delivery Truck</option>
          </select>
        </div>

        {/* Vehicle Categories */}
        <div className="px-2 py-3">
          <label className="block text-sm font-medium mb-1">Vehicle Categories</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            disabled={!availableCategories.length}
          >
            <option value="" className="text-gray-400">Select Category</option>
            {availableCategories.map((category) => (
              <option key={category} value={category} className="text-gray-600">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="px-2 py-3">
          <label className="block text-sm font-medium mb-1">Price Range: {minPrice} - {maxPrice}</label>
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
            <button type="submit" onClick={handleFilterClick} className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600">Apply</button>
            <button type="button" onClick={handleReset} className="ml-2 bg-gray-300 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-400">Reset</button>
          </div>
      </div>
    </div>
  );
};

export default FilterModal;
