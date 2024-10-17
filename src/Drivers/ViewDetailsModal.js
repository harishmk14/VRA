import React, { useState } from 'react';

const ViewDriverModal = ({ isOpen, onClose }) => {
  // Hooks must be declared at the top level
  const defaultData = {
    driverId: 'D123',
    Name: 'John Doe',
    gender: 'Male',
    dateOfBirth: '1990-01-01',
    batchNo: 'B2024',
    experience: '5 years',
    driverType: 'Full-time',
    languageKnown: 'English, Hindi',
    email: 'john.doe@example.com',
    mobileNo: '1234567890',
    alternateMobileNo: '0987654321',
    shiftPreference: 'Day',
    drivingLicenseNo: 'DL123456',
    dlCategory: 'LMV',
    licenseExpiryDate: '2025-01-01',
    insuranceNo: 'INS123456',
    address: '123 Main St, City, State',
    criminalRecord: 'No',
    drivingHistory: 'Clean',
    accidentHistory: 'None',
    documents: {
      medicalCertificate: 'https://example.com/medical_certificate.pdf',
      pcc: 'https://example.com/pcc.pdf',
    },
    driverImage: 'https://imgcdn.stablediffusionweb.com/2024/9/14/32126d8d-b1ea-4a60-9878-b2f729b566fa.jpg',
    holderDocuments: {
      drivingLicense: 'https://rtoimage.rto.care/rto_application/live/news_headline/544201641286938.jpg',
      aadharProof: 'https://lawsisto.com/kkg_admin/images/categoryimages/1527952340Aadhar_format.png',
    },
  };

  // Hooks must be declared outside of conditionals
  const [data, setData] = useState(defaultData);
  const [isEdit, setIsEdit] = useState(false);

  // Early return if the modal is not open
  if (!isOpen) return null;

  // Function to handle update action
  const handleUpdate = () => {
    console.log("Update clicked", data);
    setIsEdit(false); // Exit edit mode
  };

  // Function to handle delete action
  const handleDelete = () => {
    console.log("Delete clicked");
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">View Driver Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Driver ID */}
          <div>
            <label className="grid text-sm font-medium mb-1">Driver ID</label>
            {isEdit ? (
              <input
                type="text"
                name="driverId"
                value={data.driverId}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
                readOnly
              />
            ) : (
              <p>{data.driverId}</p>
            )}
          </div>

          {/* Driver Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Driver Name</label>
            {isEdit ? (
              <input
                type="text"
                name="Name"
                value={data.Name}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.Name}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            {isEdit ? (
              <select
                name="gender"
                value={data.gender}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{data.gender}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            {isEdit ? (
              <input
                type="date"
                name="dateOfBirth"
                value={data.dateOfBirth}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.dateOfBirth}</p>
            )}
          </div>

          {/* Batch No */}
          <div>
            <label className="block text-sm font-medium mb-1">Batch No</label>
            {isEdit ? (
              <input
                type="text"
                name="batchNo"
                value={data.batchNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.batchNo}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            {isEdit ? (
              <input
                type="text"
                name="experience"
                value={data.experience}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.experience}</p>
            )}
          </div>

          {/* Driver Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Type</label>
            {isEdit ? (
              <input
                type="text"
                name="driverType"
                value={data.driverType}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.driverType}</p>
            )}
          </div>

          {/* Language Known */}
          <div>
            <label className="block text-sm font-medium mb-1">Language Known</label>
            {isEdit ? (
              <input
                type="text"
                name="languageKnown"
                value={data.languageKnown}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.languageKnown}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            {isEdit ? (
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.email}</p>
            )}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No</label>
            {isEdit ? (
              <input
                type="text"
                name="mobileNo"
                value={data.mobileNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.mobileNo}</p>
            )}
          </div>

          {/* Alternate Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Alternate Mobile No</label>
            {isEdit ? (
              <input
                type="text"
                name="alternateMobileNo"
                value={data.alternateMobileNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.alternateMobileNo}</p>
            )}
          </div>

          {/* Shift Preference */}
          <div>
            <label className="block text-sm font-medium mb-1">Shift Preference</label>
            {isEdit ? (
              <input
                type="text"
                name="shiftPreference"
                value={data.shiftPreference}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.shiftPreference}</p>
            )}
          </div>

          {/* Driving License No */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License No</label>
            {isEdit ? (
              <input
                type="text"
                name="drivingLicenseNo"
                value={data.drivingLicenseNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.drivingLicenseNo}</p>
            )}
          </div>

          {/* DL Category */}
          <div>
            <label className="block text-sm font-medium mb-1">DL Category</label>
            {isEdit ? (
              <input
                type="text"
                name="dlCategory"
                value={data.dlCategory}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.dlCategory}</p>
            )}
          </div>

          {/* License Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">License Expiry Date</label>
            {isEdit ? (
              <input
                type="date"
                name="licenseExpiryDate"
                value={data.licenseExpiryDate}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.licenseExpiryDate}</p>
            )}
          </div>

          {/* Insurance No */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance No</label>
            {isEdit ? (
              <input
                type="text"
                name="insuranceNo"
                value={data.insuranceNo}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.insuranceNo}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            {isEdit ? (
              <textarea
                name="address"
                value={data.address}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.address}</p>
            )}
          </div>

          {/* Criminal Record */}
          <div>
            <label className="block text-sm font-medium mb-1">Criminal Record</label>
            {isEdit ? (
              <input
                type="text"
                name="criminalRecord"
                value={data.criminalRecord}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.criminalRecord}</p>
            )}
          </div>

          {/* Driving History */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving History</label>
            {isEdit ? (
              <input
                type="text"
                name="drivingHistory"
                value={data.drivingHistory}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.drivingHistory}</p>
            )}
          </div>

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            {isEdit ? (
              <input
                type="text"
                name="accidentHistory"
                value={data.accidentHistory}
                onChange={handleInputChange}
                className="border border-gray-300 p-1 rounded"
              />
            ) : (
              <p>{data.accidentHistory}</p>
            )}
          </div>

          {/* Medical Certificate */}
          <div>
          <label className="block text-sm font-medium mb-1">Medical Certificate</label>
          <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <a
              href={data.documents.medicalCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Medical Certificate
            </a>
          </div>
          </div>

          {/* PCC */}
          <div>
          <label className="block text-sm font-medium mb-1">PCC</label>
          <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <a
              href={data.documents.pcc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View PCC Document
            </a>
          </div>
          </div>

          {/* Driver Image */}
          <div>
          <label className="block text-sm font-medium mb-1">Driver Image</label>
          <div className="w-40 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <img 
              src={data.driverImage} 
              alt="Driver"
              className="w-full h-auto object-cover"
            />
          </div>
          </div>

          {/* Driving License */}
          <div>
          <label className="block text-sm font-medium mb-1">Driving License</label>
          <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <img 
              src={data.holderDocuments.drivingLicense} 
              alt="Driving License" 
              className="w-full h-auto object-cover" 
            />
          </div>
          </div>

          {/* Aadhar */}
          <div>
          <label className="block text-sm font-medium mb-1">Aadhar Proof</label>
          <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <img 
              src={data.holderDocuments.aadharProof} 
              alt="Aadhar Proof" 
              className="w-full h-auto object-cover" 
            />
          </div>
          </div>
        </div>

        {/* Action Buttons */}
<div className="flex justify-end mt-4">
  {isEdit ? (
    <button
      onClick={handleUpdate}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600"
    >
      Update
    </button>
  ) : (
    <button
      onClick={() => setIsEdit(true)} // Set isEdit to true when Edit button is clicked
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600"
    >
      Edit
    </button>
  )}
  <button
    onClick={handleDelete}
    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
  >
    Delete
  </button>
</div>
      </div>
    </div>
  );
};

export default ViewDriverModal;
