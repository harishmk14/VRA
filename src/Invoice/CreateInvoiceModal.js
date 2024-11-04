// CreateInvoiceModal.js
import React, { useState } from 'react';

const CreateInvoiceModal = ({ isOpen, onClose, onAddInvoice }) => {
  const [invoiceData, setInvoiceData] = useState({
    date: '',
    invoiceId: '',
    amount: '',
    customerName: '',
    mobile: '',
    paymentMode: '',
    tripId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddInvoice(invoiceData); // Pass the new invoice data to the parent component
    onClose(); // Close the modal after adding the invoice
    setInvoiceData({ date: '', invoiceId: '', amount: '', customerName: '', mobile: '', paymentMode: '', tripId: '' }); // Reset form
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-5 w-1/3">
          <h2 className="text-lg font-bold mb-4">Create Invoice</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={invoiceData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Invoice ID</label>
              <input
                type="text"
                name="invoiceId"
                value={invoiceData.invoiceId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Amount</label>
              <input
                type="number"
                name="amount"
                value={invoiceData.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={invoiceData.customerName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={invoiceData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Payment Mode</label>
              <input
                type="text"
                name="paymentMode"
                value={invoiceData.paymentMode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Trip ID</label>
              <input
                type="text"
                name="tripId"
                value={invoiceData.tripId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Create Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceModal;
