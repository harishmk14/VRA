// AddPaymentModal.js
import React, { useState } from 'react';

const AddPaymentModal = ({ isOpen, onClose, onAddPayment }) => {
  const [formData, setFormData] = useState({
    amount: '',
    customerName: '',
    mobile: '',
    paymentType: '',
    paymentMode: '',
    bookingId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPayment(formData); // Call the parent function to handle adding payment
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-lg font-semibold mb-4">Add Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 gap-x-5">
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium mb-1">Amount <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="amount"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Customer Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Customer Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="customerName"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium mb-1">Mobile <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="mobile"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
              />
            </div>

            {/* Payment Type */}
            <div>
              <label className="block text-sm font-medium mb-1">Payment Type <span className="text-red-500">*</span></label>
              <select
                name="paymentType"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.paymentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Payment Type</option>
                <option value="Advance">Advance</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Payment Mode */}
            <div>
              <label className="block text-sm font-medium mb-1">Payment Mode <span className="text-red-500">*</span></label>
              <select
                name="paymentMode"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.paymentMode}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Payment Mode</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
              </select>
            </div>

            {/* Booking ID */}
            <div>
              <label className="block text-sm font-medium mb-1">Booking ID <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="bookingId"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                value={formData.bookingId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
          <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1.5 rounded mr-2"
            >
              Add Payment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-3 py-1.5 rounded "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPaymentModal;
