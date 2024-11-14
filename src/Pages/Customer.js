import React, { useState, useRef, useEffect } from 'react';
import FilterModal from '../Customer/FilterModal';
import CustomerDetailModal from '../Customer/CustomerDetailModal';
import AddCustomerModal from '../Customer/AddCustomerModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomers, resetError } from '../Slice/customerSlice'
import Toggle from "react-toggle";
import "react-toggle/style.css";
import '../index.css';
import '../styles/toogle.css';

const Customer = () => {
  const dispatch = useDispatch();
  const { customers, status, error } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getAllCustomers());

    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const [showTrip, setShowTrip] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filters, setFilters] = useState({ bookingType: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const entriesPerPage = 7;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const allCustomers = Array.isArray(customers.data) ? customers.data : [];


  const currentEntries = allCustomers.slice(indexOfFirstEntry, indexOfLastEntry);


  const totalPages = Math.ceil((Array.isArray(customers.data) ? customers.data.length : 0) / entriesPerPage);

  const handleAssignClick = (booking) => {
    setSelectedBooking(booking);
    setShowTrip(true);
  };

  const handleAssignDriver = (driver) => {
    console.log(`Driver ${driver.name} assigned to booking ${selectedBooking.id}`);
    setShowTrip(false);
  };

  const filterModalRef = useRef(null);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDetailsClick = (booking) => {
    setSelectedBooking(booking);
    setShowDetailModal(true);
  };

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

  const applyFilters = (filterValues) => {
    setFilters(filterValues);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterModalRef.current && !filterModalRef.current.contains(event.target)) {
        setShowFilterModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-0.5 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-2 py-0.5 rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          1
        </button>
      );
      if (currentPage > 4) pageNumbers.push(<span key="dots-start">...</span>);
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-0.5 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
          >
            {i}
          </button>
        );
      }
      if (currentPage < totalPages - 3) pageNumbers.push(<span key="dots-end">...</span>);
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-2 py-0.5 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };



  return (
    <div className="p-5 pt-2 h-full w-full">
      <div></div>
      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        <div className="relative w-full h-auto flex items-center justify-between py-3 flex-wrap gap-3">
          <div className="relative flex-grow md:w-1/5 w-full">
            <input
              type="search"
              placeholder="Search Customer"
              className="pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
            />
            <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-person-plus-fill"></i> Add
            </button>
            <button
              onClick={toggleFilterModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-funnel-fill"></i> Filter
            </button>
          </div>
        </div>


        {showDetailModal && (
          <CustomerDetailModal
            customer={selectedBooking}
            onClose={() => setShowDetailModal(false)}
          />
        )}

        {showAddModal && (
          <AddCustomerModal onClose={() => setShowAddModal(false)} />
        )}


        {showFilterModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md shadow-lg w-96 z-10">
              <FilterModal onClose={toggleFilterModal} onApply={applyFilters} />
            </div>
          </div>
        )}


        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 h-full">
          <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="overflow-auto flex-grow">
                <table className="min-w-full border-collapse border-spacing-0">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-4 py-2 text-left">S. No</th>
                      <th className="px-4 py-2 text-left">Reg Date</th>
                      <th className="px-4 py-2 text-left">ID</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-center">Status</th>
                      <th className="px-4 py-2 text-center">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(currentEntries) && currentEntries?.length > 0 ? (
                      currentEntries.map((customer, index) => (
                        <tr key={customer.id || index} className="border-b border-gray-300 last:border-b-0">
                          <td className="px-4 py-3">{indexOfFirstEntry + index + 1}</td>
                          <td className="px-4 py-3">
                            {customer.createAt ? new Date(customer.createAt).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}
                          </td>
                          <td className="px-4 py-3">{customer.uniqId || 'N/A'}</td>
                          <td className="px-4 py-3 flex items-center">
                            <img
                              src={customer.pImg}
                              alt="customer img"
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            {customer.name || 'Unnamed'}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <label className="custom-toggle">
                              <Toggle
                                defaultChecked={true}
                                icons={false}
                                onChange={() => handleAssignClick(customer)}
                              />
                            </label>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <i
                              className="bi bi-eye-fill text-blue-500 text-xl cursor-pointer"
                              onClick={() => handleDetailsClick(customer)}
                            ></i>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">No customers available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center px-4 py-2">
                <div className='text-gray-500 w-2/3'>
                  Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, customers.data?.length)} of {customers.data?.length} entries
                </div>
                <div className="flex items-center w-full">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`text-xl text-blue-500 px-2 py-0.5 rounded mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                  >
                    {'<'}
                  </button>
                  {renderPageNumbers()}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`text-xl text-blue-500 px-2 py-0.5 rounded ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                  >
                    {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden py-3 ">
            <div className="flex justify-between items-center mb-4 px-4">
              <h2 className="text-blue-500 text-xl font-semibold">Trip Details</h2>
              <i
                className="bi bi-arrows-angle-expand text-blue-400 text-lg cursor-pointer"
              ></i>

              {showReviewModal && (
                <div className="fixed inset-0 z-50">
                  {/* <ReviewModal
                    reviews={reviews}
                    onClose={() => setShowReviewModal(false)}
                  /> */}
                </div>
              )}
            </div>

            <div className="flex flex-col h-[27.5rem] overflow-y-auto px-4">
            </div>
          </div>


        </div>
      </div>
    </div>
  );

};

export default Customer;