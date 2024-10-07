import React, { useState } from 'react';

const Booking = () => {
  // Sample booking data with 25 entries
  const bookingData = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    bookingType: index % 2 === 0 ? 'Online' : 'Offline',
    bookedAt: `2024-10-0${(index % 5) + 1}`,
    vehicleNo: `VEH${(index % 5) + 1}234`,
    driverId: `D00${(index % 5) + 1}`,
    customerName: `Customer ${index + 1}`,
    journeyType: index % 2 === 0 ? 'One-way' : 'Round-trip',
    noOfPersons: (index % 5) + 1,
    verified: Math.random() > 0.5, // Randomly assign verified status
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 7;

  // Calculate total pages
  const totalPages = Math.ceil(bookingData.length / entriesPerPage);

  // Get current entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = bookingData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle detail button click
  const handleDetailsClick = (bookingId) => {
    alert(`Details for Booking ID: ${bookingId}`);
  };

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
      // Show first page
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-2 py-0.5 rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
        >
          1
        </button>
      );

      // Add ellipsis if necessary
      if (currentPage > 4) {
        pageNumbers.push(<span key="dots-start">...</span>);
      }

      // Middle page numbers
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

      // Add ellipsis if necessary
      if (currentPage < totalPages - 3) {
        pageNumbers.push(<span key="dots-end">...</span>);
      }

      // Show last page
      if (totalPages > 1) {
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
    }
    return pageNumbers;
  };

  return (
    <div className="p-5 pt-2 h-full w-full">
      <div className="h-full w-full grid grid-rows-[auto_1fr]">
        {/* First row with heading and filter button */}
        <div className="w-full h-auto flex items-center justify-end py-3 gap-3">
          <button className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
            <i className="bi bi-clipboard-plus"></i> Book
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
            <i className="bi bi-funnel"></i> Filter
          </button>
        </div>

        {/* Second row with booking details table */}
        <div className="w-full h-full bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="overflow-auto flex-grow">
              <table className="min-w-full border-collapse border-spacing-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-4 py-2 text-left">S. No</th>
                    <th className="px-4 py-2 text-left">Booking Type</th>
                    <th className="px-4 py-2 text-left">Booked At</th>
                    <th className="px-4 py-2 text-left">Vehicle No</th>
                    <th className="px-4 py-2 text-left">Driver ID</th>
                    <th className="px-4 py-2 text-left">Customer Name</th>
                    <th className="px-4 py-2 text-left">Journey Type</th>
                    <th className="px-4 py-2">Persons</th>
                    <th className="px-4 py-2 text-left">Verification</th>
                    <th className="px-4 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Mapping through current booking data to render rows */}
                  {currentEntries.map((booking, index) => (
                    <tr key={booking.id} className="border-b border-gray-300 last:border-b-0">
                      <td className="px-4 py-3">{index + 1 + indexOfFirstEntry}</td>
                      <td className="px-4 py-3">{booking.bookingType}</td>
                      <td className="px-4 py-3">{booking.bookedAt}</td>
                      <td className="px-4 py-3">{booking.vehicleNo}</td>
                      <td className="px-4 py-3">{booking.driverId}</td>
                      <td className="px-4 py-3">{booking.customerName}</td>
                      <td className="px-4 py-3">{booking.journeyType}</td>
                      <td className="px-4 py-3 text-center">{booking.noOfPersons}</td>
                      <td className="px-4 py-3 text-center"> {/* Added text-center class */}
  {booking.verified ? (
    <span className="text-green-600">
      <i className="bi bi-check2-square"></i> {/* Green check icon */}
    </span>
  ) : (
    <span className="text-red-600">
      <i className="bi bi-x-square"></i> {/* Red cross icon */}
    </span>
  )}
</td>
                      <td className="px-4 py-3">
                        <button
                          className="bg-blue-500 text-white text-sm  px-2 py-1 rounded-full flex items-center gap-1"
                          onClick={() => handleDetailsClick(booking.id)}
                        > Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fixed Pagination controls at the bottom */}
            <div className="flex justify-center items-center py-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`text-xl text-blue-500 px-2 py-0.5 rounded mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
              >
                {'<'} {/* Left arrow */}
              </button>
              {renderPageNumbers()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`text-xl text-blue-500 px-2 py-0.5 rounded ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === totalPages}
              >
                {'>'} {/* Right arrow */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
