// FilterModal.js
import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = { date, amount, paymentMode, status };
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setDate('');
    setAmount('');
    setPaymentMode('');
    setStatus('');
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
          <button
            className="absolute top-4 right-5 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Filter Payments</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
            </div>

            {/* Payment Mode */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Payment Mode <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                required
              >
                <option value="">Select Payment Mode</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cash">Cash</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-3 py-1.5 rounded mr-2">
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
    )
  );
};

export default FilterModal;
