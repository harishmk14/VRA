import React, { useState } from 'react';

const FilterPopup = ({ onApply, onClose }) => {
  const [date, setDate] = useState('');
  const [starRating, setStarRating] = useState('');

  const handleApply = () => {
    onApply({ date, starRating });
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center inset-0 bg-black bg-opacity-20 z-30">
      <div className="bg-white p-5 rounded-md shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Filter Reviews</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Star Rating</label>
          <input
            type="number"
            value={starRating}
            onChange={(e) => setStarRating(e.target.value)}
            className="border rounded-md w-full p-2"
            min="1"
            max="5"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleApply}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="ml-2 text-gray-600 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
