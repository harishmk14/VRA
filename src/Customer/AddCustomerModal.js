import React, { useState } from 'react';

const AddCustomerModal = ({ onClose, onAdd }) => {
  const [customerName, setCustomerName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  
  const handleAddCustomer = () => {
    if (customerName) {
      onAdd({ name: customerName, gender, dob, email, mobileNo, address });
      onClose();
    }
  };

  const handleReset = () => {
    setCustomerName('');
    setGender('');
    setDob('');
    setEmail('');
    setMobileNo('');
    setAddress('');
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36`}>
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">Add New Customer</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Customer Id */}
          <div>
            <label className="block text-sm font-medium mb-1">Customer Id <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value="CUS001"
              readOnly
            />
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender <span className="text-red-500">*</span></label>
            <select
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Date Of Birth */}
          <div>
            <label className="block text-sm font-medium mb-1">Date Of Birth <span className="text-red-500">*</span></label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No <span className="text-red-500">*</span></label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Alternate Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Alternate Mobile No <span className="text-red-500">*</span></label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              placeholder="Enter alternate mobile number"
              pattern="[0-9]{10}"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address <span className="text-red-500">*</span></label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Customer Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Customer Image <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Aadhar */}
          <div>
            <label className="block text-sm font-medium mb-1">Aadhar Card <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button onClick={handleAddCustomer} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
            Add
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-400 text-white rounded-lg ">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
