import React, { useState, useRef, useEffect } from 'react';
import VehicleAvailability from '../Dashboard/VehicleAvailabilitys';
import FilterModal from '../Booking/FilterModal'; 
import BookingDetailModal from '../Booking/BookingDetailModal';
import DriverListModal from '../Booking/DriverListModal';
import '../index.css';

const driversData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://imgcdn.stablediffusionweb.com/2024/10/14/b53d6677-8076-4e9e-a652-37d1995386f3.jpg",
    driverId: "D1",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://imgcdn.stablediffusionweb.com/2024/10/4/2d52a83c-0d15-4136-87a4-47e92d66b3b2.jpg",
    driverId: "D2",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://imgcdn.stablediffusionweb.com/2024/9/14/32126d8d-b1ea-4a60-9878-b2f729b566fa.jpg",
    driverId: "D3",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://imgcdn.stablediffusionweb.com/2024/9/8/04fdb256-b489-4571-972c-249a0cb35019.jpg",
    driverId: "D4",
  },
  {
    id: 5,
    name: "John Doe",
    image: "https://imgcdn.stablediffusionweb.com/2024/10/14/b53d6677-8076-4e9e-a652-37d1995386f3.jpg",
    driverId: "D1",
  },
  {
    id: 6,
    name: "Jane Smith",
    image: "https://imgcdn.stablediffusionweb.com/2024/10/4/2d52a83c-0d15-4136-87a4-47e92d66b3b2.jpg",
    driverId: "D2",
  },
  {
    id: 7,
    name: "Michael Johnson",
    image: "https://imgcdn.stablediffusionweb.com/2024/9/14/32126d8d-b1ea-4a60-9878-b2f729b566fa.jpg",
    driverId: "D3",
  },
  {
    id: 8,
    name: "Emily Davis",
    image: "https://imgcdn.stablediffusionweb.com/2024/9/8/04fdb256-b489-4571-972c-249a0cb35019.jpg",
    driverId: "D4",
  },
];

const Booking = () => {
  const bookingData = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    bookingType: index % 2 === 0 ? 'Online' : 'Offline',
    bookedAt: `2024-10-0${(index % 5) + 1}`,
    vehicleNo: `VEH${(index % 5) + 1}234`,
    customerName: `Customer ${index + 1}`,
    journeyType: index % 2 === 0 ? 'One-way' : 'Round-trip',
    noOfPersons: (index % 5) + 1,
    verified: Math.random() > 0.5,
  }));

  const statusOptions = ["Pending", "Completed", "Started", "Cancelled"];

  const [showDriverListModal, setShowDriverListModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); 
  const [selectedBooking, setSelectedBooking] = useState(null); 
  const [filters, setFilters] = useState({ bookingType: '', journeyType: '' });

  const entriesPerPage = 7;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const filteredEntries = bookingData.filter((booking) => {
    return (
      (filters.bookingType ? booking.bookingType === filters.bookingType : true) &&
      (filters.journeyType ? booking.journeyType === filters.journeyType : true)
    );
  });

  const handleAssignClick = (booking) => {
    setSelectedBooking(booking);
    setShowDriverListModal(true);
  };

  const handleAssignDriver = (driver) => {
    console.log(`Driver ${driver.name} assigned to booking ${selectedBooking.id}`);
    setShowDriverListModal(false);
  };


  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);

  const currentEntries = filteredEntries.slice(indexOfFirstEntry, indexOfLastEntry);

  const modalRef = useRef(null); 
  const filterModalRef = useRef(null); 

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleDetailsClick = (booking) => {
    setSelectedBooking(booking); 
    setShowDetailModal(true);
  };
  const toggleModal = () => setShowModal(!showModal);
  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

  const applyFilters = (filterValues) => {
    setFilters(filterValues);
  };

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
      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        <div className="relative w-full h-auto flex items-center justify-between py-3">
          <input
            type="search"
            placeholder="Search Booking"
            className="w-1/5 pl-10 py-[6px] bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleModal}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1"
            >
              <i class="bi bi-clipboard-plus-fill"></i>Book
            </button>
            <button onClick={toggleFilterModal} className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center gap-1">
              <i class="bi bi-funnel-fill"></i> Filter
            </button>
          </div>
        </div>


        {showDetailModal && (
          <BookingDetailModal
            booking={selectedBooking}
            onClose={() => setShowDetailModal(false)} 
          />
        )}

        {showDriverListModal && (
          <DriverListModal
            drivers={driversData}
            onClose={() => setShowDriverListModal(false)}
            onAssign={handleAssignDriver}
          />
        )}

        <div ref={modalRef} className={`absolute z-10 mt-14 mr-5 right-0 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-white p-5 rounded-md shadow-lg w-96">
            <VehicleAvailability />
          </div>
        </div>

        {showFilterModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-md shadow-lg w-96 z-10">
              <FilterModal onClose={toggleFilterModal} onApply={applyFilters} />
            </div>
          </div>
        )}

        <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="overflow-auto flex-grow">
              <table className="min-w-full border-collapse border-spacing-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-4 py-2 text-left">S. No</th>
                    <th className="px-4 py-2 text-left">Booked At</th>
                    <th className="px-4 py-2 text-left">Vehicle No</th>
                    <th className="px-4 py-2 text-left">Customer Name</th>
                    <th className="px-4 py-2 text-left">Journey Type</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Verification</th>
                    <th className="px-4 py-2 text-center">Driver</th>
                    <th className="px-4 py-2 text-center">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEntries.map((booking, index) => (
                    <tr key={booking.id} className="border-b border-gray-300 last:border-b-0 hover:bg-gray-100 transition-colors duration-150">
                      <td className="px-4 py-3">{index + 1 + indexOfFirstEntry}</td>
                      <td className="px-4 py-3">{booking.bookedAt}</td>
                      <td className="px-4 py-3">{booking.vehicleNo}</td>
                      <td className="px-4 py-3">{booking.customerName}</td>
                      <td className="px-4 py-3">{booking.journeyType}</td>
                      <td className="px-4 py-3">{statusOptions[index % statusOptions.length]}</td>
                      <td className="pr-8  py-3 text-center">{booking.verified ? <i class="bi bi-check-lg text-green-500 text-3xl"></i> : <i class="bi bi-x-lg text-red-500 text-xl"></i>}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          className="bg-blue-500  hover:bg-blue-400 text-white text-base px-2 py-1 rounded-lg"
                          onClick={() => handleAssignClick(booking)} 
                        >
                          Assign
                        </button>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <i className="bi bi-eye-fill text-blue-500 text-xl cursor-pointer p-2 py-1 hover:bg-gray-200 rounded-md "
                          onClick={() => handleDetailsClick(booking)}></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center px-4 py-2"> 
              <div className='text-gray-500 w-2/3'>
                Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, bookingData.length)} of {bookingData.length} entries
              </div>
              <div className="flex items-center  w-full">
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
  );
};

export default Booking;
