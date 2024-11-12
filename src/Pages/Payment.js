// Payment.js
import React, { useState } from 'react';
import AddPaymentModal from '../Payment/AddPaymentModal'; 
import FilterModal from '../Payment/FilterModal'; 

const Payment = () => {
  const [currentEntries] = useState([]);
  const [indexOfFirstEntry] = useState(0);
  const [indexOfLastEntry] = useState(0);
  const [paymentData, setPaymentData] = useState([]);
  const [currentPage] = useState(1);
  const [totalPages] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openFilterModal = () => setIsFilterModalOpen(true); 
  const closeFilterModal = () => setIsFilterModalOpen(false); 

  const handleAddPayment = (newPayment) => {
    setPaymentData((prevData) => [...prevData, newPayment]); 
    console.log("New payment added:", newPayment); 
  };

  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters); 
    closeFilterModal(); 
  };

  const renderPageNumbers = () => {
    return <span className="text-blue-500 text-sm mx-2">1</span>; 
  };

  return (
    <div className="p-5 pt-2 h-full w-full">
      <AddPaymentModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onAddPayment={handleAddPayment}
      />
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
        onApplyFilters={handleApplyFilters} 
      />

      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        <div className="relative w-full h-auto flex items-center justify-between py-3">
          <input
            type="search"
            placeholder="Search Payment"
            className="w-1/5 pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          <div className="flex items-center gap-3">
            <button
              onClick={openAddModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-wallet-fill"></i> Add
            </button>
            <button
              onClick={openFilterModal} 
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-funnel-fill"></i> Filter
            </button>
          </div>
        </div>

        <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="overflow-auto flex-grow">
              <table className="min-w-full border-collapse border-spacing-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-4 py-2 text-left">SI. No</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Transaction ID</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Customer</th>
                    <th className="px-4 py-2 text-left">Mobile</th>
                    <th className="px-4 py-2 text-left">Payment Mode</th>
                    <th className="px-4 py-2 text-center">Trip ID</th>
                    <th className="px-4 py-2 text-center">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.map((payment, index) => (
                    <tr key={index} className="border-b border-gray-300 last:border-b-0">
                      <td className="px-4 py-3">{index + 1 + indexOfFirstEntry}</td>
                      <td className="px-4 py-3">{payment.date}</td>
                      <td className="px-4 py-3">{payment.transactionId}</td>
                      <td className="px-4 py-3">{payment.amount}</td>
                      <td className="px-4 py-3">{payment.customerName}</td>
                      <td className="px-4 py-3">{payment.mobile}</td>
                      <td className="px-4 py-3">{payment.paymentMode}</td>
                      <td className="px-4 py-3 text-center">{payment.tripId}</td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-blue-500">
                          <i className="bi bi-file-earmark-text"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-3 flex justify-between items-center">
              <div className="text-sm text-gray-500">Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of {currentEntries.length} entries</div>
              <div className="flex gap-3">{renderPageNumbers()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
