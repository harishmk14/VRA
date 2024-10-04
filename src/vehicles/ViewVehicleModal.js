import React from 'react';
import up1 from '../Assets/img/ford-1.jpg'
import up2 from '../Assets/img/ford-2.jpeg'
import up3 from '../Assets/img/ford-3.jpg'
import aadhar from '../Assets/img/aadhar.jpg'
import dl from '../Assets/img/DL.jpg'
import docs from '../Assets/img/Harishdocs.pdf';
const ViewVehicleModal = ({ isOpen, onClose, vehicleData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">View Vehicle Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl ">&times;</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Vehicle Type */}
          <div>
            <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
            {/* <p>{vehicleData?.vehicleType || 'N/A'}</p> */}
            <p>Car</p>
          </div>

          {/* Brand Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Brand Name</label>
            {/* <p>{vehicleData?.brandName || 'N/A'}</p> */}
            <p>Ford</p>
          </div>

          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Model</label>
            {/* <p>{vehicleData?.vehicleModel || 'N/A'}</p> */}
            <p>Mustang</p>
          </div>

          {/* Registration No */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration No</label>
            {/* <p>{vehicleData?.registrationNo || 'N/A'}</p> */}
            <p>ABC-1234</p>
          </div>

          {/* Registration Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration Type</label>
            {/* <p>{vehicleData?.registrationType || 'N/A'}</p> */}
            <p>Commercial</p>
          </div>

          {/* Seater */}
          <div>
            <label className="block text-sm font-medium mb-1">Seater</label>
            {/* <p>{vehicleData?.seater || 'N/A'}</p> */}
            <p>4</p>
          </div>

          {/* AC/Non-AC */}
          {vehicleData?.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">AC/Non-AC</label>
              {/* <p>{vehicleData?.acType || 'N/A'}</p> */}
              <p>AC</p>
            </div>
          )}

          {/* Gear Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Gear Type</label>
            {/* <p>{vehicleData?.gearType || 'N/A'}</p> */}
            <p>Manual</p>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            {/* <p>{vehicleData?.fuelType || 'N/A'}</p> */}
            <p>Petrol</p>
          </div>

          {/* Toll Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Toll Type</label>
            {/* <p>{vehicleData?.tollType || 'N/A'}</p> */}
            <p>Toll</p>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            {/* <p>{vehicleData?.color || 'N/A'}</p> */}
            <p>White</p>
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Range (in km)</label>
            {/* <p>{vehicleData?.range || 'N/A'}</p> */}
            <p>120</p>
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Per Day</label>
            {/* <p>{vehicleData?.pricePerDay || 'N/A'}</p> */}
            <p>7500</p>
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters)</label>
            {/* <p>{vehicleData?.fuelCapacity || 'N/A'}</p> */}
            <p>45</p>
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage (per liter)</label>
            {/* <p>{vehicleData?.mileage || 'N/A'}</p> */}
            <p>12</p>
          </div>

          {/* Engine CC */}
          <div>
            <label className="block text-sm font-medium mb-1">Engine CC</label>
            {/* <p>{vehicleData?.engineCC || 'N/A'}</p> */}
            <p>4400</p>
          </div>

          {/* Sunroof */}
          {vehicleData?.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Sunroof</label>
              {/* <p>{vehicleData?.sunroof ? 'Yes' : 'No'}</p> */}
              <p>Yes</p>
            </div>
          )}

          {/* GPS Tracking */}
          {vehicleData?.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">GPS Tracking</label>
              {/* <p>{vehicleData?.gpsTracking ? 'Yes' : 'No'}</p> */}
              <p>Yes</p>
            </div>
          )}

          {/* Insurance ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance ID</label>
            {/* <p>{vehicleData?.insuranceID || 'N/A'}</p> */}
            <p>INS-2023-5678</p>
          </div>

          {/* Insurance Renewal Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Renewal Date</label>
            {/* <p>{vehicleData?.insuranceRenewalDate || 'N/A'}</p> */}
            <p>2025-01-15</p>
          </div>

          {/* Insurance Expire Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Expire Date</label>
            {/* <p>{vehicleData?.insuranceExpireDate || 'N/A'}</p> */}
            <p>2025-07-15</p>
          </div>

          {/* Last Serviced Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Serviced Date</label>
            {/* <p>{vehicleData?.lastServicedDate || 'N/A'}</p> */}
            <p>2024-06-20</p>
          </div>

          {/* Next Service Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Next Service Date</label>
            {/* <p>{vehicleData?.nextServiceDate || 'N/A'}</p> */}
            <p>2025-06-20</p>
          </div>

          {/* Holder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Name</label>
            {/* <p>{vehicleData?.holderName || 'N/A'}</p> */}
            <p>Jaime Lannister</p>
          </div>

          {/* Holder Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Mobile</label>
            {/* <p>{vehicleData?.holderMobile || 'N/A'}</p> */}
            <p>+91 9345450700</p>
          </div>

          {/* Holder Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Email</label>
            {/* <p>{vehicleData?.holderEmail || 'N/A'}</p> */}
            <p>JaimeLannister@gmail.com</p>
          </div>

          {/* Airbags */}
          {vehicleData?.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Airbags</label>
              {/* <p>{vehicleData?.airbags || 'N/A'}</p> */}
              <p>6</p>
            </div>
          )}

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            {/* <p>{vehicleData?.accidentHistory || 'N/A'}</p> */}
            <p>No</p>
          </div>

          {/* Vehicle Features */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Features</label>
            {/* <p>{vehicleData?.features?.join(', ') || 'N/A'}</p> */}
            <p>Anti-lock Braking System, Lane Departure Warning, Adaptive Cruise Control, 360-Degree Camera System, Collision Avoidance System</p>
          </div>

{/* Vehicle Images */}
<div>
  <label className="block text-sm font-medium mb-1">Vehicle Images</label>
  <div className="flex gap-3">
    {[up1, up2, up3].map((images, index) => (
      <div key={index} className="w-full h-auto mb-2 border border-gray-300 p-2 rounded-md">
        <img src={images} alt={`Vehicle ${index + 1}`} className="w-full h-auto object-cover" />
      </div>
    ))}
  </div>
</div>


{/* Registration Document */}
<div>
  <label className="block text-sm font-medium mb-1">Registration Doc</label>
  <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
    <a href={docs} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      View Registration Doc
    </a>
  </div>
</div>

{/* Insurance Document */}
<div>
  <label className="block text-sm font-medium mb-1">Insurance Doc</label>
  <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
    <a href={docs} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      View Insurance Doc
    </a>
  </div>
</div>

{/* Holder Driving License */}
<div>
  <label className="block text-sm font-medium mb-1">Holder DL</label>
  <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
    <img src={dl} alt="Driving License" className="w-full h-auto object-cover" />
  </div>
</div>

{/* Holder Proof */}
<div>
  <label className="block text-sm font-medium mb-1">Holder Proof</label>
  <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
    <img src={aadhar} alt="Aadhar Card" className="w-full h-auto object-cover" />
  </div>
</div>
        </div>

{/* Delete and Update Buttons */}
<div className="flex justify-center mt-4 space-x-2">
<button onClick={() => console.log("Update clicked")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Update
  </button>
  <button onClick={() => console.log("Delete clicked")} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
    Delete
  </button>
</div>
      </div>
    </div>
  );
};

export default ViewVehicleModal;
