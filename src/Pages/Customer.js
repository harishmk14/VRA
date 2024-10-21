import React, { useState, useRef, useEffect } from 'react';
import VehicleAvailability from '../Dashboard/VehicleAvailabilitys';
import FilterModal from '../Booking/FilterModal'; // Import the filter modal
import BookingDetailModal from '../Booking/BookingDetailModal';
import Trip from '../Customer/Trip';
import '../index.css';

// Updated bookingsData with random statuses
const bookingsData = [
  { bookingId: "BOOK1", tripArea: "Delhi", tripDate: "2024-10-21", status: 'Completed', tripType: 'Round' },
  { bookingId: "BOOK2", tripArea: "Mumbai", tripDate: "2024-10-21", status: "Cancelled", tripType: "One-way" },
  { bookingId: "BOOK3", tripArea: "Bengaluru", tripDate: "2024-10-21", status: "Completed", tripType: "Round" },
  { bookingId: "BOOK4", tripArea: "Chennai", tripDate: "2024-10-21", status: "Pending", tripType: "One-way" },
  { bookingId: "BOOK5", tripArea: "Kolkata", tripDate: "2024-10-21", status: "Pending", tripType: "Round" },
  { bookingId: "BOOK6", tripArea: "Hyderabad", tripDate: "2024-10-21", status: "Pending", tripType: "One-way" },
  { bookingId: "BOOK7", tripArea: "Pune", tripDate: "2024-10-21", status: "In Journey", tripType: "Round" },
  { bookingId: "BOOK8", tripArea: "Ahmedabad", tripDate: "2024-10-21", status: "Cancelled", tripType: "One-way" },
];


const Customer = () => {
  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis'];

  const CustomerData = Array.from({ length: 25 }, (_, index) => ({
    id: 'CUS' + String(index + 1).padStart(3, '0'),
    regdate: new Date(2024, 9, (index % 5) + 1).toLocaleDateString(), // Converts to "MM/DD/YYYY"
    name: names[index % names.length], // Converts vehicleNo to Name
  }));

  const [showTrip, setShowTrip] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); // State for booking detail modal
  const [selectedBooking, setSelectedBooking] = useState(null); // State for selected booking
  const [filters, setFilters] = useState({ bookingType: '' }); // Removed journeyType filter

  const entriesPerPage = 7;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  // Filter the booking data based on the selected filters
  const filteredEntries = CustomerData.filter((booking) => {
    return (
      (filters.bookingType ? booking.bookingType === filters.bookingType : true)
      // Removed journeyType filter condition
    );
  });

  const handleAssignClick = (booking) => {
    setSelectedBooking(booking);
    setShowTrip(true);
  };

  const handleAssignDriver = (driver) => {
    console.log(`Driver ${driver.name} assigned to booking ${selectedBooking.id}`);
    setShowTrip(false);
  };

  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);
  
  // Update currentEntries based on filtered data
  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  const modalRef = useRef(null); // Create a ref for the booking modal
  const filterModalRef = useRef(null); // Create a ref for the filter modal

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleDetailsClick = (booking) => {
    setSelectedBooking(booking); // Set the selected booking
    setShowDetailModal(true); // Open the detail modal
  };
  const toggleModal = () => setShowModal(!showModal);
  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

  const applyFilters = (filterValues) => {
    setFilters(filterValues);
  };

  // Close modals if the user clicks outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
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
        <div className="relative w-full h-auto flex items-center justify-between py-3">
          <input
            type="search"
            placeholder="Search Customer"
            className="w-1/5 pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i className="bi bi-person-plus-fill"></i> Add
            </button>
            <button onClick={toggleFilterModal} className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1">
              <i className="bi bi-funnel-fill"></i> Filter
            </button>
          </div>
        </div>

        {/* Booking Detail Modal */}
        {showDetailModal && (
          <BookingDetailModal
            booking={selectedBooking}
            onClose={() => setShowDetailModal(false)} // Close modal handler
          />
        )}

        {showTrip && (
          <Trip
            Trip={bookingsData}
            onClose={() => setShowTrip(false)}
            onAssign={handleAssignDriver}
          />
        )}

        {/* Modal for Booking */}
        <div ref={modalRef} className={`absolute z-10 mt-14 mr-5 right-0 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-white p-5 rounded-md shadow-lg w-96">
            <VehicleAvailability />
          </div>
        </div>

        {/* Filter Modal */}
        {showFilterModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md shadow-lg w-96 z-10">
              <FilterModal onClose={toggleFilterModal} onApply={applyFilters} />
            </div>
          </div>
        )}
        <div className="grid grid-cols-[1fr_2fr] gap-4 h-full">
  <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden"></div>
  <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
    <div className="flex flex-col h-full">
    <div className="overflow-auto flex-grow">
  <table className="min-w-full border-collapse border-spacing-0">
    <thead>
      <tr className="bg-blue-100">
        <th className="px-4 py-2 text-left">S. No</th>
        <th className="px-4 py-2 text-left">Reg Date</th> {/* Registration Date */}
        <th className="px-4 py-2 text-left">ID</th> {/* Added Id Column */}
        <th className="px-4 py-2 text-left">Name</th> {/* Name Column */}
        <th className="px-4 py-2 text-center">Trips</th>
        <th className="px-4 py-2 text-center">Details</th>
      </tr>
    </thead>
    <tbody>
      {currentEntries.map((customer, index) => (
        <tr key={customer.id} className="border-b border-gray-300 last:border-b-0">
          <td className="px-4 py-3">{index + 1 + indexOfFirstEntry}</td> {/* Serial Number */}
          <td className="px-4 py-3">{customer.regdate}</td> {/* Registration Date */}
          <td className="px-4 py-3">{customer.id}</td> {/* Display Customer Id */}
          <td className="px-4 py-3 flex items-center">
  <img 
    src='https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4394.jpg' // Use the actual URL for the profile picture
    alt={`${customer.name}'s profile`} 
    className="w-8 h-8 rounded-full mr-2" // Adjust size and rounding
  />
  {customer.name}
</td> {/* Display Customer Name */}
          <td className="px-4 py-3 text-center">
            <button
              className="bg-blue-500 text-white text-base px-2 py-1 rounded-lg"
              onClick={() => handleAssignClick(customer)}
            >
              Trip {index}
            </button>
          </td>
          <td className="px-4 py-3 text-center">
            <button
              className="bg-blue-500 text-white text-base px-2 py-1 rounded-lg"
              onClick={() => handleDetailsClick(customer)}
            >
              <i className="bi bi-eye-fill"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      <div className="flex justify-between items-center px-4 py-2">
        <div className='text-gray-500 w-2/3'>
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, CustomerData.length)} of {CustomerData.length} entries
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
</div>

      </div>
    </div>
  );
};

export default Customer;