import React, { useState } from 'react';

const VehicleBook = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    mobileNo: '',
    alternateMobileNo: '',
    address: '',
    aadhar: null,
    noOfPersons: '',
    vehicleType: '',
    vehicleModel: '',
    registrationNo: '',
    tripType: '',
    pickUpLocation: '',
    dropLocation: '',
    pickUpDateTime: '',
    dropDateTime: '',
    numberOfDays: '',
    driverMode: '',
    specialRequirement: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(formData);
  };

  const handleCancel = () => {
    // Reset form data
    setFormData({
      name: '',
      dob: '',
      email: '',
      mobileNo: '',
      alternateMobileNo: '',
      address: '',
      aadhar: null,
      noOfPersons: '',
      vehicleType: '',
      vehicleModel: '',
      registrationNo: '',
      tripType: '',
      pickUpLocation: '',
      dropLocation: '',
      pickUpDateTime: '',
      dropDateTime: '',
      numberOfDays: '',
      driverMode: '',
      specialRequirement: '',
      agreement: false,
    });
    console.log('Form canceled');
    closeModal(); // Close the modal
  };

  return (
    <div className="p-5 pb-0">
      <h2 className="text-2xl font-semibold mb-6">Book a Vehicle</h2>
<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block mb-1">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-1">DOB:</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Mobile No */}
        <div>
          <label className="block mb-1">Mobile No:</label>
          <input 
            type="text" 
            name="mobileNo" 
            value={formData.mobileNo} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Alternate Mobile No */}
        <div>
          <label className="block mb-1">Alternate Mobile No:</label>
          <input 
            type="text" 
            name="alternateMobileNo" 
            value={formData.alternateMobileNo} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1">Address:</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Upload Aadhar */}
        <div>
          <label className="block mb-1">Upload Aadhar:</label>
          <input 
            type="file" 
            name="aadhar" 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* No of Persons */}
        <div>
          <label className="block mb-1">No. of Persons:</label>
          <input 
            type="number" 
            name="noOfPersons" 
            value={formData.noOfPersons} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block mb-1">Vehicle Type:</label>
          <select 
            name="vehicleType" 
            value={formData.vehicleType} 
            onChange={handleChange} 
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
            <option value="Delivery Truck">Delivery Truck</option>
          </select>
        </div>

        {/* Vehicle Model */}
        <div>
          <label className="block mb-1">Vehicle Model:</label>
          <input 
            type="text" 
            name="vehicleModel" 
            value={formData.vehicleModel} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Registration No */}
        <div>
          <label className="block mb-1">Registration No:</label>
          <input 
            type="text" 
            name="registrationNo" 
            value={formData.registrationNo} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Trip Type */}
        <div>
          <label className="block mb-1">Trip Type:</label>
          <input 
            type="text" 
            name="tripType" 
            value={formData.tripType} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Pick Up Location */}
        <div>
          <label className="block mb-1">Pick Up Location:</label>
          <input 
            type="text" 
            name="pickUpLocation" 
            value={formData.pickUpLocation} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Drop Location */}
        <div>
          <label className="block mb-1">Drop Location:</label>
          <input 
            type="text" 
            name="dropLocation" 
            value={formData.dropLocation} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Pickup Date and Time */}
        <div>
          <label className="block mb-1">Pick Up Date and Time:</label>
          <input 
            type="datetime-local" 
            name="pickUpDateTime" 
            value={formData.pickUpDateTime} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Drop Date and Time */}
        <div>
          <label className="block mb-1">Drop Date and Time:</label>
          <input 
            type="datetime-local" 
            name="dropDateTime" 
            value={formData.dropDateTime} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Number of Days */}
        <div>
          <label className="block mb-1">Number of Days:</label>
          <input 
            type="number" 
            name="numberOfDays" 
            value={formData.numberOfDays} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Driver Mode */}
        <div>
          <label className="block mb-1">Driver Mode:</label>
          <select 
            name="driverMode" 
            value={formData.driverMode} 
            onChange={handleChange} 
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            <option value="Driver">Driver</option>
            <option value="Self Drive">Self Drive</option>
          </select>
        </div>

        {/* Special Requirement */}
        <div className="col-span-2">
          <label className="block mb-1">Special Requirement:</label>
          <textarea 
            name="specialRequirement" 
            value={formData.specialRequirement} 
            onChange={handleChange} 
            className="border p-2 w-full rounded" 
          />
        </div>

        {/* Agreement Checkbox */}
        <div className="col-span-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="agreement" 
              checked={formData.agreement} 
              onChange={handleChange} 
              className="mr-2" 
            />
            I agree to the terms and conditions.
          </label>
        </div>

{/* Continue and Cancel Buttons */}
<div className="col-span-2 flex justify-end space-x-4">
<button 
            type="submit" 
            className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600"
          >
            <i class="bi bi-caret-right-fill"></i> Continue
          </button>
          <button 
            type="button" 
            onClick={handleCancel}
            className="bg-gray-500 text-white px-2 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleBook;
