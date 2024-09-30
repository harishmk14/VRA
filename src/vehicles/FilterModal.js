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
  const [priceRange, setPriceRange] = useState([0, 50000]); // Slider range from 0 to 50000
  const [minPrice, maxPrice] = priceRange;

  // Update available categories based on vehicle type
  useEffect(() => {
    if (selectedVehicleType) {
      setAvailableCategories(vehicleCategoriesMap[selectedVehicleType]);
      setSelectedCategory(''); // Reset the selected category when vehicle type changes
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

  if (!isOpen) return null; // Do not render the modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Filter Vehicles</h2>

        {/* Vehicle Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vehicle Type</label>
          <select
            value={selectedVehicleType}
            onChange={(e) => setSelectedVehicleType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
            <option value="Delivery Truck">Delivery Truck</option>
          </select>
        </div>

        {/* Vehicle Categories */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vehicle Categories</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={!availableCategories.length}
          >
            <option value="">Select Category</option>
            {availableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-4">
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
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleFilterClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
