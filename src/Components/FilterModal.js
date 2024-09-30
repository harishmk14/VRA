import React from 'react';

const FilterModal = ({ isOpen, onClose, onFilterSelect }) => {
  const handleFilterClick = (filter) => {
    onFilterSelect(filter);
    onClose();
  };

  if (!isOpen) return null; // Do not render the modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Select Filter</h2>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleFilterClick("All")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            All
          </button>
          <button
            onClick={() => handleFilterClick("Active")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Active
          </button>
          <button
            onClick={() => handleFilterClick("Available")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Available
          </button>
          <button
            onClick={() => handleFilterClick("Maintenance")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Maintenance
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
