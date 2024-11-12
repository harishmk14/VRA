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
    tripArea: '',
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
    console.log(formData);
  };

  const handleCancel = () => {
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
      tripArea: '',
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
    closeModal();
  };

  return (
    <div className="p-5 pb-0">
      <h2 className="text-2xl font-semibold mb-6">Book a Vehicle</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

        <div>
          <label className="block mb-1">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div >
          <label className="block mb-1">Special Requirement:</label>
          <textarea
            name="specialRequirement"
            value={formData.specialRequirement}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Upload Aadhar:</label>
          <input
            type="file"
            name="aadhar"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

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
        <div>
          <label className="block mb-1">Trip Type:</label>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            <option value="One Way">One Way</option>
            <option value="Round Trip">Round Trip</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Trip Area:</label>
          <select
            name="tripArea"
            value={formData.tripArea}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            <option value="Hill Station">Hill Station</option>
            <option value="Adventure Travel">Adventure Travel</option>
            <option value="Business Travel">Business Travel</option>
            <option value="Others">Others</option>
          </select>
        </div>
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
        <div className="col-span-2 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600"
          >
            <i class="bi bi-caret-right-fill"></i> Continue
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-2 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleBook;
