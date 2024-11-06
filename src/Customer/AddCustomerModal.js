
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, getAllCustomers } from '../Slice/customerSlice';
import { uploadImg } from '../Slice/uploadImgSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCustomerModal = ({ onClose }) => {
  const [customerName, setCustomerName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [altMobileNo, setAltMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [pImg, setPImg] = useState(null);
  const [DL, setDL] = useState(null);
  const [proof, setProof] = useState(null);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.customer.error);

  const handleAddCustomer = async () => {
    if (customerName && mobileNo) {
      const newCustomer = {
        name: customerName,
        gender,
        DOB: dob,
        email,
        phoneNo: mobileNo,
        altNo: altMobileNo,
        address,
        pImg,
        DL,
        proof,
      };

      await dispatch(addCustomer(newCustomer)).then(() => {
        dispatch(getAllCustomers());
      });

      if (!error) {
        toast.success('Customer added successfully!'); // Success toast
        onClose();
        handleReset();
      } else {
        toast.error('Failed to add customer.'); // Error toast
      }
    } else {
      toast.warn('Please fill in required fields.'); // Warning toast for missing data
    }
  };

const handleFileUpload = async (file, setFile) => {
  const acceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  if (file) {
    if (!acceptedFileTypes.includes(file.type)) {
      toast.error('Invalid file format. Please upload a JPG or PNG image.');
      return;
    }

    const formData = new FormData();
    formData.append('logo', file);

    try {
      const response = await dispatch(uploadImg({ formData, variable: 'customer'}));

      if (response.payload && typeof response.payload.path === 'string') {
        setFile(response.payload.path);
        // toast.success('File uploaded successfully.');
      } else {
        console.error('Invalid response format:', response.payload);
        toast.error('Error uploading file. Please try again.');
      }
    } catch (error) {
      console.error('File upload failed:', error);
      toast.error('Error uploading file. Please try again.');
    }
  }
};

  
  

  const handleReset = () => {
    setCustomerName('');
    setGender('');
    setDob('');
    setEmail('');
    setMobileNo('');
    setAltMobileNo('');
    setAddress('');
    setPImg(null);
    setDL(null);
    setProof(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36`}
    >
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 id="modal-title" className="text-2xl font-bold">Add New Customer</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
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

          {/* Date of Birth */}
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
            <label className="block text-sm font-medium mb-1">Alternate Mobile No</label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={altMobileNo}
              onChange={(e) => setAltMobileNo(e.target.value)}
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
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setPImg)}
              required
            />
          </div>

          {/* DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setDL)}
              required
            />
          </div>

          {/* Proof */}
          <div>
            <label className="block text-sm font-medium mb-1">Proof <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => handleFileUpload(e.target.files[0], setProof)}
              required
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button onClick={handleAddCustomer} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
            Add
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
            Reset
          </button>
        </div>

        {/* Display Error Message */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AddCustomerModal;
