import React, { useState } from 'react';
import up1 from '../Assets/img/ford-1.jpg';
import up2 from '../Assets/img/ford-2.jpeg';
import up3 from '../Assets/img/ford-3.jpg';
import aadhar from '../Assets/img/aadhar.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BookingDetailModal = ({ booking, onClose,  onSave  }) => {
  // Move useState hooks outside the conditional
  const [vehicleDetailsOpen, setVehicleDetailsOpen] = useState(true);
  const [journeyDetailsOpen, setJourneyDetailsOpen] = useState(true);
  const [customerDetailsOpen, setCustomerDetailsOpen] = useState(true);
  const [paymentDetailsOpen, setPaymentDetailsOpen] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editedBooking, setEditedBooking] = useState({ ...booking });


  if (!booking) return null;

  const data = { images: [up1, up2, up3],
    holderDocuments: {
      // drivingLicense: dl,
      aadharProof: aadhar,
    },
  };

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Call the onSave function passed from the parent component
    onSave(editedBooking);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white p-8 pt-0 rounded-lg shadow-lg w-4/5 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-0">
          <h2 className="text-2xl font-bold">Booking Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid">
          {/* Booking Details */}
          <div className='grid grid-cols-2 gap-5 gap-x-8'>
            <div>
              <label className="grid text-sm font-medium mb-1">Booking Type</label>
              <p>{booking.bookingType}</p>
            </div>
            <div>
              <label className="grid text-sm font-medium mb-1">Booked Date:</label>
              <p>{booking.bookedAt}</p>
            </div>
          </div>

          {/* Vehicle Details Drawer */}
          <div className='grid mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setVehicleDetailsOpen(!vehicleDetailsOpen)}>
              <h3 className="font-bold text-lg">Vehicle Details</h3>
              {vehicleDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            
            {vehicleDetailsOpen && (
              <div className='grid grid-cols-2 gap-5 gap-x-8 mt-4'>
                <div>
                  <label className="grid text-sm font-medium mb-1">Brand Name</label>
                  <p>Toyota</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
                  <p>SUV</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Vehicle Model</label>
                  <p>RAV4</p>
                </div>
                <div>
  <label className="grid text-sm font-medium mb-1">Registration No</label>
  {isEditing ? (
    <input 
      name="registrationNo"
      value={editedBooking.vehicleNo || booking.vehicleNo} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{booking.vehicleNo}</p>
  )}
</div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Fuel Type</label>
                  <p>Petrol</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Gear Type</label>
                  <p>Automatic</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Seater</label>
                  <p>5</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Range</label>
                  <p>300 km</p>
                </div>
                <div>
                  <label className="grid text-sm font-medium mb-1">Price Per day</label>
                  <p>Rs 4500</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Vehicle Images</label>
                  <div className="flex gap-3">
                    {data.images.map((image, index) => (
                      <div key={index} className="w-full h-auto mb-2 border border-gray-300 p-2 rounded-md">
                        <img src={image} alt={`Vehicle ${index + 1}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Journey Details Drawer */}
          <div className='grid mt-6'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setJourneyDetailsOpen(!journeyDetailsOpen)}>
              <h3 className="font-bold text-lg">Journey Details</h3>
              {journeyDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {journeyDetailsOpen && (
              <div className='grid grid-cols-2 gap-5 gap-x-8 mt-4'>
                <div>
  <label className="grid text-sm font-medium mb-1">Trip Type</label>
  {isEditing ? (
    <input 
      name="tripType"
      value={editedBooking.journeyType || booking.journeyType} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{booking.journeyType}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Trip Area</label>
  {isEditing ? (
    <input 
      name="tripArea"
      value={editedBooking.tripArea || "Hills station"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.tripArea || "Hills station"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Pickup Location</label>
  {isEditing ? (
    <input 
      name="pickupLocation"
      value={editedBooking.pickupLocation || "Main Street, City"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.pickupLocation || "Main Street, City"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Drop Location</label>
  {isEditing ? (
    <input 
      name="dropLocation"
      value={editedBooking.dropLocation || "Airport, City"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.dropLocation || "Airport, City"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Pickup Date and Time</label>
  {isEditing ? (
    <input 
      type="datetime-local" // Use datetime-local for date and time input
      name="pickupDateTime"
      value={editedBooking.pickupDateTime || "2024-10-05T10:00"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.pickupDateTime || "2024-10-05 10:00 AM"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Drop Date and Time</label>
  {isEditing ? (
    <input 
      type="datetime-local" // Use datetime-local for date and time input
      name="dropDateTime"
      value={editedBooking.dropDateTime || "2024-10-06T10:00"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.dropDateTime || "2024-10-06 10:00 AM"}</p>
  )}
</div>
                <div>
                  <label className="grid text-sm font-medium mb-1">No of Days</label>
                  <p>1</p>
                </div>
                <div>
  <label className="grid text-sm font-medium mb-1">Driver</label>
  {isEditing ? (
    <input 
      name="driver"
      value={editedBooking.driver || "Not Assigned"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.driver || "Not Assigned"}</p>
  )}
</div>
              </div>
            )}
          </div>

          {/* Customer Details */}
          <div className='grid mt-6'>
  <div className="flex justify-between items-center cursor-pointer" onClick={() => setCustomerDetailsOpen(!customerDetailsOpen)}>
    <h3 className="font-bold text-lg">Customer Details</h3>
    {customerDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
  </div>

  {customerDetailsOpen && (
              <div className='grid grid-cols-2 gap-5 gap-x-8 mt-4'>
                <div>
  <label className="grid text-sm font-medium mb-1">Name</label>
  {isEditing ? (
    <input 
      name="customerName"
      value={editedBooking.customerName || booking.customerName} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{booking.customerName}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">DOB</label>
  {isEditing ? (
    <input 
      type="date" // Use type "date" for date input
      name="dob"
      value={editedBooking.dob || "1990-01-01"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.dob || "1990-01-01"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Email</label>
  {isEditing ? (
    <input 
      type="email" // Use type "email" for email input
      name="email"
      value={editedBooking.email || "customer@example.com"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <p>{editedBooking.email || "customer@example.com"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Mobile No</label>
  {isEditing ? (
    <input 
      type="tel" // Use type "tel" for telephone input
      name="mobileNo"
      value={editedBooking.mobileNo || "123-456-7890"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      placeholder="123-456-7890" // Placeholder for better UX
      required // Makes the field required
    />
  ) : (
    <p>{editedBooking.mobileNo || "123-456-7890"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Alternate Mobile No</label>
  {isEditing ? (
    <input 
      type="tel" // Use type "tel" for telephone input
      name="alternateMobileNo"
      value={editedBooking.alternateMobileNo || "098-765-4321"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      placeholder="098-765-4321" // Placeholder for better UX
    />
  ) : (
    <p>{editedBooking.alternateMobileNo || "098-765-4321"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Address</label>
  {isEditing ? (
    <input 
      type="text" // Use type "text" for address input
      name="address"
      value={editedBooking.address || "123 Elm Street, City"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      placeholder="123 Elm Street, City" // Placeholder for better UX
    />
  ) : (
    <p>{editedBooking.address || "123 Elm Street, City"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">No of Persons</label>
  {isEditing ? (
    <input 
      type="number" // Use type "number" for numeric input
      name="noOfPersons"
      value={editedBooking.noOfPersons || booking.noOfPersons} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      min="1" // Minimum value to ensure at least one person
      required // Makes the field required
    />
  ) : (
    <p>{editedBooking.noOfPersons || booking.noOfPersons}</p>
  )}
</div>
<div>
  <label className="block text-sm font-medium mb-1">Proof</label>
  {isEditing ? (
    <input 
      type="file" // Use type "file" for uploading documents
      name="proof" 
      accept="image/*" // Accept only image files
      // onChange={handleFileChange} // Handle file changes
      className="border rounded px-2 py-1 w-2/3"
    />
  ) : (
    <div className="w-36 h-auto mb-2 border border-gray-300 p-2 rounded-md">
      <img 
        src={data.holderDocuments.aadharProof} 
        alt="Aadhar Card" 
        className="w-full h-auto object-cover" 
      />
    </div>
  )}
</div>


              </div>
            )}
          </div>

{/* Payment Details */}
<div className='grid mt-6'>
  <div className="flex justify-between items-center cursor-pointer" onClick={() => setPaymentDetailsOpen(!paymentDetailsOpen)}>
    <h3 className="font-bold text-lg">Payment Details</h3>
    {paymentDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
  </div>

  {paymentDetailsOpen && (
    <div className='grid grid-cols-2 gap-5 gap-x-8 mt-4'>
<div>
  <label className="grid text-sm font-medium mb-1">Advance</label>
  {isEditing ? (
    <input 
      type="number" // Use type "number" for numeric input
      name="advance"
      value={editedBooking.advance || 500} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      min="0" // Minimum value to ensure no negative advance
      required // Makes the field required
    />
  ) : (
    <p>{editedBooking.advance || "Rs 500"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Payment Method</label>
  {isEditing ? (
    <select 
      name="paymentMethod"
      value={editedBooking.paymentMethod || "Online"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    >
      <option value="Online">Online</option>
      <option value="Cash">Cash</option>
      <option value="Card">Card</option>
      <option value="UPI">UPI</option>
    </select>
  ) : (
    <p>{editedBooking.paymentMethod || "Online"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Balance</label>
  {isEditing ? (
    <input 
      type="number" // Use type "number" for numeric input
      name="balance"
      value={editedBooking.balance || 4185} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
      min="0" // Minimum value to ensure no negative balance
      required // Makes the field required
    />
  ) : (
    <p>{editedBooking.balance || "Rs 4185"}</p>
  )}
</div>
<div>
  <label className="grid text-sm font-medium mb-1">Payment Method</label>
  {isEditing ? (
    <select 
      name="paymentMethod"
      value={editedBooking.paymentMethod || "Offline"} 
      onChange={handleInputChange}
      className="border rounded px-2 py-1 w-2/3"
    >
      <option value="Online">Online</option>
      <option value="Cash">Cash</option>
      <option value="Card">Card</option>
      <option value="UPI">UPI</option>
    </select>
  ) : (
    <p>{editedBooking.paymentMethod || "Online"}</p>
  )}
</div>
    </div>
  )}
</div>

        </div>

        <div className="flex justify-end mt-4 gap-3">
        {isEditing ? (
            <>
              <button  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Not Verify
              </button>
            </>
          ) : (
            <button  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Verify
            </button>
          )}
          {isEditing ? (
            <>
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                Cancel
              </button>
            </>
          ) : (
            <>
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Edit
            </button>
             <button  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
             Cancel Trip
           </button>
           </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
