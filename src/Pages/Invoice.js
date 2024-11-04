// Invoice.js
import React, { useState } from 'react';
import AddInvoiceModal from '../Invoice/CreateInvoiceModal'; // Import the modal component (create this if not existing)
import FilterModal from '../Invoice/FilterModal'; // Import the filter modal component (create this if not existing)

const Invoice = () => {
  const [currentEntries] = useState([]); // Placeholder for current entries
  const [indexOfFirstEntry] = useState(0);
  const [indexOfLastEntry] = useState(0);
  const [invoiceData, setInvoiceData] = useState([]); // State to hold invoice data
  const [currentPage] = useState(1);
  const [totalPages] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // State for filter modal

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openFilterModal = () => setIsFilterModalOpen(true); // Open filter modal
  const closeFilterModal = () => setIsFilterModalOpen(false); // Close filter modal

  const handleAddInvoice = (newInvoice) => {
    setInvoiceData((prevData) => [...prevData, newInvoice]); // Add new invoice to the list
    console.log("New invoice added:", newInvoice); // Handle adding invoice logic here
  };

  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters); // Handle filter logic here
    // Implement filter logic here
    closeFilterModal(); // Close the modal after applying filters
  };

  const renderPageNumbers = () => {
    return <span className="text-blue-500 text-sm mx-2">1</span>; // Example page number
  };

  return (
    <div className="p-5 pt-2 h-full w-full">
      <AddInvoiceModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onAddInvoice={handleAddInvoice} // Pass the handler to the add invoice modal
      />
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
        onApplyFilters={handleApplyFilters} // Pass the handler to filter modal
      />

      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        <div className="relative w-full h-auto flex items-center justify-between py-3">
          <input
            type="search"
            placeholder="Search Invoice"
            className="w-1/5 pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          <div className="flex items-center gap-3">
            <button
              onClick={openAddModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-file-earmark-plus"></i> Create
            </button>
            <button
              onClick={openFilterModal} // Open filter modal
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
                    <th className="px-4 py-2 text-left">Invoice ID</th>
                    <th className="px-4 py-2 text-left">Trip Details</th>
                    <th className="px-4 py-2 text-left">Customer Details</th>
                    <th className="px-4 py-2 text-left">Payment Details</th>
                    <th className="px-4 py-2 text-left">View</th>
                    <th className="px-4 py-2 text-center">Share</th>
                    <th className="px-4 py-2 text-center">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.map((invoice, index) => (
                    <tr key={index} className="border-b border-gray-300 last:border-b-0">
                      <td className="px-4 py-3">{index + 1 + indexOfFirstEntry}</td>
                      <td className="px-4 py-3">{invoice.date}</td>
                      <td className="px-4 py-3">{invoice.invoiceId}</td>
                      <td className="px-4 py-3">{invoice.amount}</td>
                      <td className="px-4 py-3">{invoice.customerName}</td>
                      <td className="px-4 py-3">{invoice.mobile}</td>
                      <td className="px-4 py-3">{invoice.paymentMode}</td>
                      <td className="px-4 py-3 text-center">{invoice.tripId}</td>
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

export default Invoice;
