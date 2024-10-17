import React, { useState } from 'react';

const AddDriverModal = ({ isOpen, onClose }) => {
  // State variables
  const [driverName, setDriverName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [experience, setExperience] = useState('');
  const [vehicleType, setVehicleType] = useState(''); // Assume you manage vehicleType somehow
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [alternateMobileNo, setAlternateMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [dlNo, setDlNo] = useState('');
  const [dlCategory, setDlCategory] = useState('');
  const [licenseExpiryDate, setLicenseExpiryDate] = useState('');
  const [insuranceNo, setInsuranceNo] = useState('');
  const [shiftPreference, setShiftPreference] = useState('');
  const [criminalRecord, setCriminalRecord] = useState('');
  const [drivingHistory, setDrivingHistory] = useState('');
  const [accidentHistory, setAccidentHistory] = useState('');
  const [medicalCertificate, setMedicalCertificate] = useState(null);
  const [pcc, setPcc] = useState(null);
  const [driverImage, setDriverImage] = useState(null);
  const [dl, setDl] = useState(null);
  const [aadhar, setAadhar] = useState(null);

  // Handle reset functionality
  const handleReset = () => {
    setDriverName('');
    setGender('');
    setDob('');
    setBatchNo('');
    setExperience('');
    setEmail('');
    setMobileNo('');
    setAlternateMobileNo('');
    setAddress('');
    setDlNo('');
    setDlCategory('');
    setLicenseExpiryDate('');
    setInsuranceNo('');
    setShiftPreference('');
    setCriminalRecord('');
    setDrivingHistory('');
    setAccidentHistory('');
    setMedicalCertificate(null);
    setPcc(null);
    setDriverImage(null);
    setDl(null);
    setAadhar(null);
  };

  // Handle add functionality (implement this)
  const handleAdd = () => {
    // Implement add functionality here
  };

  const [languagesKnown, setLanguagesKnown] = useState([]);

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setLanguagesKnown((prev) =>
      prev.includes(value) ? prev.filter((lang) => lang !== value) : [...prev, value]
    );
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">Add Driver</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Driver Id */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Id <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value="D001"
              readOnly
            />
          </div>

          {/* Driver Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
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

          {/* Dob */}
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

          {/* Batch No */}
          <div>
            <label className="block text-sm font-medium mb-1">Batch No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={batchNo}
              onChange={(e) => setBatchNo(e.target.value)}
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience <span className="text-red-500">*</span></label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          {/* Driver Type */}
          {vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Driver Type <span className="text-red-500">*</span></label>
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                required
              >
                <option value="">Select Type</option>
                <option value="Permanent">Permanent</option>
                <option value="Acting">Acting</option>
              </select>
            </div>
          )}

          {/* Language Known */}
<div>
  <label className="block text-sm font-medium mb-1">
    Language Known <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-wrap gap-5"> {/* Updated flex and added gap */}
    {[
      "Tamil", "English", "Hindi", "Bengali", 
      "Telugu", "Marathi", "Urdu", "Gujarati", 
      "Malayalam", "Kannada"
    ].map((language) => (
      <label key={language} className="flex items-center">
        <input
          type="checkbox"
          value={language}
          checked={languagesKnown.includes(language)}
          onChange={handleLanguageChange}
          className="mr-2"
        />
        {language}
      </label>
    ))}
  </div>
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
              value={alternateMobileNo}
              onChange={(e) => setAlternateMobileNo(e.target.value)}
              placeholder="Enter alternate mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

                    {/* Shift Preference */}
                    <div>
            <label className="block text-sm font-medium mb-1">Shift Preference <span className="text-red-500">*</span></label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={shiftPreference}
              onChange={(e) => setShiftPreference(e.target.value)}
              required
            >
              <option value="">Select Preference</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* DL No */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={dlNo}
              onChange={(e) => setDlNo(e.target.value)}
              required
            />
          </div>

{/* DL Category */}
<div>
  <label className="block text-sm font-medium mb-1">
    DL Category <span className="text-red-500">*</span>
  </label>
  <select
    className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    value={dlCategory}
    onChange={(e) => setDlCategory(e.target.value)}
    required
  >
    <option value="">Select Category</option>
    <option value="LMV">LMV (Light Motor Vehicle)</option>
    <option value="HMV">HMV (Heavy Motor Vehicle)</option>
    <option value="MCWG">MCWG (Motorcycle Without Gear)</option>
    <option value="MCWOG">MCWOG (Motorcycle With Gear)</option>
    <option value="TAXI">Taxi</option>
    <option value="OTR">OTR (Off-Road Vehicle)</option>
    <option value="E-RICKSHAW">E-Rickshaw</option>
    <option value="LGV">LGV (Light Goods Vehicle)</option>
    <option value="HGV">HGV (Heavy Goods Vehicle)</option>
  </select>
</div>


          {/* License Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">License Expiry Date <span className="text-red-500">*</span></label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={licenseExpiryDate}
              onChange={(e) => setLicenseExpiryDate(e.target.value)}
              required
            />
          </div>

          {/* Insurance No */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance No <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={insuranceNo}
              onChange={(e) => setInsuranceNo(e.target.value)}
              required
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

{/* Criminal Record */}
<div>
  <label className="block text-sm font-medium mb-1">
    Criminal Record <span className="text-red-500">*</span>
  </label>
  <textarea
    className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    value={criminalRecord}
    onChange={(e) => setCriminalRecord(e.target.value)}
    required
    rows={3} // Adjust the number of rows as needed
    placeholder="Provide details about any criminal record..."
  />
</div>

{/* Driving History */}
<div>
  <label className="block text-sm font-medium mb-1">
    Driving History <span className="text-red-500">*</span>
  </label>
  <textarea
    className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    value={drivingHistory}
    onChange={(e) => setDrivingHistory(e.target.value)}
    required
    rows={3} // Adjust the number of rows as needed
    placeholder="Provide details about your driving history..."
  />
</div>

{/* Accident History */}
<div>
  <label className="block text-sm font-medium mb-1">
    Accident History <span className="text-red-500">*</span>
  </label>
  <textarea
    className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    value={accidentHistory}
    onChange={(e) => setAccidentHistory(e.target.value)}
    required
    rows={3} // Adjust the number of rows as needed
    placeholder="Provide details about your accident history..."
  />
</div>

          {/* Medical Certificate */}
          <div>
            <label className="block text-sm font-medium mb-1">Medical Certificate <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="application/pdf"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => setMedicalCertificate(e.target.files[0])}
              required
            />
          </div>

          {/* PCC */}
          <div>
            <label className="block text-sm font-medium mb-1">PCC <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="application/pdf"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => setPcc(e.target.files[0])}
              required
            />
          </div>

          {/* Driver Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Image <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => setDriverImage(e.target.files[0])}
              required
            />
          </div>

          {/* DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License Document <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => setDl(e.target.files[0])}
              required
            />
          </div>

          {/* Aadhar */}
          <div>
            <label className="block text-sm font-medium mb-1">Aadhar Document <span className="text-red-500">*</span></label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              onChange={(e) => setAadhar(e.target.files[0])}
              required
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
            Add Driver
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-red-500 text-white rounded-lg ">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDriverModal;
