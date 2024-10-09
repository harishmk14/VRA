import React from 'react';

const BookingDetailModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5">
          <h2 className="text-2xl font-bold">Booking Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Booking Details */}
          <div>
            <h3 className="font-bold text-lg">Booking Details</h3>
            <p><strong>Booking Type:</strong> {booking.bookingType}</p>
            <p><strong>Booked Date:</strong> {booking.bookedAt}</p>
          </div>

          {/* Vehicle Details */}
          <div>
            <h3 className="font-bold text-lg">Vehicle Details</h3>
            <img src="path_to_vehicle_image.jpg" alt="Vehicle" className="w-full h-32 object-cover mb-2" />
            <p><strong>Brand Name:</strong> Toyota</p>
            <p><strong>Vehicle Type:</strong> SUV</p>
            <p><strong>Vehicle Model:</strong> RAV4</p>
            <p><strong>Registration No:</strong> {booking.vehicleNo}</p>
            <p><strong>Fuel Type:</strong> Petrol</p>
            <p><strong>Gear Type:</strong> Automatic</p>
            <p><strong>Seater:</strong> 5</p>
            <p><strong>Range:</strong> 300 km</p>
            <p><strong>Price per Day:</strong> $50</p>
          </div>

          {/* Journey Details */}
          <div>
            <h3 className="font-bold text-lg">Journey Details</h3>
            <p><strong>Trip Type:</strong> {booking.journeyType}</p>
            <p><strong>Pickup Location:</strong> Main Street, City</p>
            <p><strong>Drop Location:</strong> Airport, City</p>
            <p><strong>Pickup Date and Time:</strong> 2024-10-05 10:00 AM</p>
            <p><strong>Drop Date and Time:</strong> 2024-10-06 10:00 AM</p>
            <p><strong>No of Days:</strong> 1</p>
          </div>

          {/* Driver Details */}
          <div>
            <h3 className="font-bold text-lg">Driver Details</h3>
            <p><strong>Self Drive:</strong> {booking.driverId === 'Self' ? 'Yes' : 'No'}</p>
          </div>

          {/* Customer Details */}
          <div>
            <h3 className="font-bold text-lg">Customer Details</h3>
            <p><strong>Name:</strong> {booking.customerName}</p>
            <p><strong>DOB:</strong> 1990-01-01</p>
            <p><strong>Email:</strong> customer@example.com</p>
            <p><strong>Mobile No:</strong> 123-456-7890</p>
            <p><strong>Alternate Mobile No:</strong> 098-765-4321</p>
            <p><strong>Address:</strong> 123 Elm Street, City</p>
            <p><strong>No of Persons:</strong> {booking.noOfPersons}</p>
            <p><strong>Aadhar Image:</strong> <img src="path_to_aadhar_image.jpg" alt="Aadhar" className="w-20 h-10" /></p>
          </div>

          {/* Payment Details */}
          <div>
            <h3 className="font-bold text-lg">Payment Details</h3>
            <p><strong>Advance:</strong> $100</p>
            <p><strong>Advance Mode:</strong> Online</p>
            <p><strong>Balance:</strong> $150</p>
            <p><strong>Balance Mode:</strong> Offline</p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
