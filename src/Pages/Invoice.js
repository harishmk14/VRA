import React, { useState} from 'react';
import AddInvoiceModal from '../Invoice/CreateInvoiceModal';
import FilterModal from '../Invoice/FilterModal';
import LeftSection from '../Invoice/LeftSection';
import RightSection from '../Invoice/RightSection';

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);


  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  const handleAddInvoice = (newInvoice) => {
    setInvoiceData((prevData) => [...prevData, newInvoice]);
    console.log("New invoice added:", newInvoice);
  };

  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters);
    closeFilterModal();
  };

  const data = [
    {
      id: 1,
      name: "Aron John",
      details: "Details",
      invoice: "INV-001",
      date: "09-10-2024",
      status: "Pending",
    },
    {
      id: 2,
      name: "Emily Smith",
      details: "Details",
      invoice: "INV-002",
      date: "10-10-2024",
      status: "Completed",
    },
    {
      id: 3,
      name: "Aron John",
      details: "Details",
      invoice: "INV-001",
      date: "09-10-2024",
      status: "Pending",
    },
    {
      id: 4,
      name: "Emily Smith",
      details: "Details",
      invoice: "INV-002",
      date: "10-10-2024",
      status: "Completed",
    },
    {
      id: 5,
      name: "Aron John",
      details: "Details",
      invoice: "INV-001",
      date: "09-10-2024",
      status: "Pending",
    },
    {
      id: 6,
      name: "Emily Smith",
      details: "Details",
      invoice: "INV-002",
      date: "10-10-2024",
      status: "Completed",
    },
    {
      id: 7,
      name: "Aron John",
      details: "Details",
      invoice: "INV-001",
      date: "09-10-2024",
      status: "Pending",
    },
    {
      id: 8,
      name: "Emily Smith",
      details: "Details",
      invoice: "INV-002",
      date: "10-10-2024",
      status: "Completed",
    },
  ];

  return (
    <div className="p-5 pt-2 h-full w-full">
      <AddInvoiceModal isOpen={isAddModalOpen} onClose={closeAddModal} onAddInvoice={handleAddInvoice} />
      <FilterModal isOpen={isFilterModalOpen} onClose={closeFilterModal} onApplyFilters={handleApplyFilters} />

      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        <div className="relative w-full h-auto flex items-center justify-between py-3 flex-wrap gap-3">
          <div className="relative flex-grow md:w-1/5 w-full">
            <input
              type="search"
              placeholder="Search Invoice"
              className="pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
            />
            <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={openAddModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-file-earmark-plus"></i> Create
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 h-full">
        <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
          <LeftSection data={data} />
        </div>
        <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
          <RightSection/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Invoice;
