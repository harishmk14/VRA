// FilterModal.js
import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters(filters); // Pass the filters back to the parent
    onClose(); // Close the modal after applying filters
  };

  const handleReset = () => {
    setFilters({ date: '' }); // Reset filters
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-5 w-1/3 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-lg font-bold mb-4">Filter Invoices</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={filters.date}
                  onChange={handleChange}
                  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
            </div>
            {/* Buttons */}
            <div className="col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1.5 rounded mr-2"
              >
                Apply
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-3 py-1.5 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
