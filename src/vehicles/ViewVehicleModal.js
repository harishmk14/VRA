import React, { useState } from 'react';
import up1 from '../Assets/img/ford-1.jpg';
import up2 from '../Assets/img/ford-2.jpeg';
import up3 from '../Assets/img/ford-3.jpg';
import aadhar from '../Assets/img/aadhar.jpg';
import dl from '../Assets/img/DL.jpg';
import docs from '../Assets/img/Harishdocs.pdf';

const ViewVehicleModal = ({ isOpen, onClose, vehicleData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedVehicle, setEditedVehicle] = useState(vehicleData || {});

  if (!isOpen) return null;

  // Example vehicle data (can be replaced with props)
  const data = vehicleData || {
    vehicleType: 'Car',
    brandName: 'Ford',
    vehicleModel: 'Mustang',
    registrationNo: 'ABC-1234',
    registrationType: 'Commercial',
    seater: 4,
    acType: 'AC',
    gearType: 'Manual',
    fuelType: 'Petrol',
    tollType: 'Toll',
    color: 'White',
    range: 120,
    pricePerDay: 7500,
    fuelCapacity: 45,
    mileage: 12,
    engineCC: 4400,
    sunroof: true,
    gpsTracking: true,
    insuranceID: 'INS-2023-5678',
    insuranceRenewalDate: '2025-01-15',
    insuranceExpireDate: '2025-07-15',
    lastServicedDate: '2024-06-20',
    nextServiceDate: '2025-06-20',
    holderName: 'Jaime Lannister',
    holderMobile: '+91 9345450700',
    holderEmail: 'JaimeLannister@gmail.com',
    airbags: 6,
    accidentHistory: 'No',
    features: [
      'Anti-lock Braking System',
      'Lane Departure Warning',
      'Adaptive Cruise Control',
      '360-Degree Camera System',
      'Collision Avoidance System',
    ],
    images: [up1, up2, up3],
    documents: {
      registrationDoc: docs,
      insuranceDoc: docs,
    },
    holderDocuments: {
      drivingLicense: dl,
      aadharProof: aadhar,
    },
  };

  // Handle input change for editable fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedVehicle({
      ...editedVehicle,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    // Logic to handle image change
    console.log("Image changed:", e.target.files);
  };
  
  const handleDocumentChange = (e) => {
    // Logic to handle document change
    console.log("Document changed:", e.target.files);
  };
  
  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle save action
  const handleSave = () => {
    console.log('Save clicked', editedVehicle);
    setIsEditing(false); // Exit edit mode after saving
  };

  // Handle delete action
  const handleDelete = () => {
    console.log('Delete clicked');
  };
  
  const commonFeatures = [
    'Anti-lock Braking System', 'Electronic Stability Control', 'Traction Control',
    'Forward Collision Warning', 'Automatic Emergency Braking', 'Blind Spot Detection',
    'Lane Departure Warning', 'Lane Keeping Assist', 'Adaptive Cruise Control',
    'Driver Monitoring System', 'Adaptive Headlights', 'Seatbelts',
    'Crumple Zones', 'Head Restraints', 'Side-Impact Protection',
    'Collision Safety Features', '360-Degree Camera System',
    'Traffic Sign Recognition', 'Cross-Traffic Alert', 'Collision Avoidance System'
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">
            {isEditing ? 'Edit Vehicle Details' : 'View Vehicle Details'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Vehicle Type */}
          <div>
            <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
            {isEditing ? (
            <select 
            className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
            value={editedVehicle.vehicleType || data.vehicleType || ""}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="bus">Bus</option>
            <option value="truck">Delivery Truck</option>
          </select>
            ) : (
              <p>{data.vehicleType}</p>
            )}
          </div>

          {/* Brand Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Brand Name</label>
            {isEditing ? (
              <input
                name="brandName"
                value={editedVehicle.brandName || ""}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <p>{data.brandName}</p>
            )}
          </div>
          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Model</label>
            {isEditing ? (
              <input
                name="vehicleModel"
                value={editedVehicle.vehicleModel || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{data.vehicleModel}</p>
            )}
          </div>

{/* Registration No */}
<div>
  <label className="block text-sm font-medium mb-1">Registration No</label>
  {isEditing ? (
    <input
      name="registrationNo"
      value={editedVehicle.registrationNo || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.registrationNo}</p>
  )}
</div>

{/* Registration Type */}
<div>
  <label className="block text-sm font-medium mb-1">Registration Type</label>
  {isEditing ? (
            <input
            type="text"
            className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            value="Commercial"
            readOnly
          />
  ) : (
    <p>{data.registrationType}</p>
  )}
</div>

{/* Seater */}
<div>
  <label className="block text-sm font-medium mb-1">Seater</label>
  {isEditing ? (
    <input
    type='number'
      name="seater"
      value={editedVehicle.seater || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.seater}</p>
  )}
</div>

{/* AC/Non-AC */}
{data.vehicleType !== 'bike' && (
  <div>
    <label className="block text-sm font-medium mb-1">AC/Non-AC</label>
    {isEditing ? (
          <select
          className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
          name="acType"
          value={editedVehicle.acType || ""}
          onChange={handleInputChange}
        >
          <option>Select </option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
    ) : (
      <p>{data.acType}</p>
    )}
  </div>
)}

{/* Gear Type */}
<div>
  <label className="block text-sm font-medium mb-1">Gear Type</label>
  {isEditing ? (
                <select className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
                name="gearType"
                value={editedVehicle.gearType || ""}
                onChange={handleInputChange}
                >
                <option>Select Gear Type</option>
                  <option value="manual">Manual</option>
                  <option value="auto">Automatic</option>
                </select>
  ) : (
    <p>{data.gearType}</p>
  )}
</div>

{/* Fuel Type */}
<div>
  <label className="block text-sm font-medium mb-1">Fuel Type</label>
  {isEditing ? (
                <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                name="fuelType"
                value={editedVehicle.fuelType || ""}
                onChange={handleInputChange}
              >
                <option>Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="gas">Gas</option>
                <option value="electric">Electric</option>
              </select>
  ) : (
    <p>{data.fuelType}</p>
  )}
</div>

{/* Toll Type */}
<div>
  <label className="block text-sm font-medium mb-1">Toll Type</label>
  {isEditing ? (
                <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                name="tollType"
                value={editedVehicle.tollType || ""}
                onChange={handleInputChange}
              >
                <option>Select Toll Type</option>
                <option value="Toll Free">Toll Free</option>
                <option value="Toll">Toll</option>
              </select>
  ) : (
    <p>{data.tollType}</p>
  )}
</div>

{/* Color */}
<div>
  <label className="block text-sm font-medium mb-1">Color</label>
  {isEditing ? (
                <input
                type="text"
                name="color"
                value={editedVehicle.color || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
  ) : (
    <p>{data.color}</p>
  )}
</div>

{/* Range */}
<div>
  <label className="block text-sm font-medium mb-1">Range (in km)</label>
  {isEditing ? (
    <input
      name="range"
      value={editedVehicle.range || ""}
      onChange={handleInputChange}
            type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.range}</p>
  )}
</div>

{/* Price Per Day */}
<div>
  <label className="block text-sm font-medium mb-1">Price Per Day</label>
  {isEditing ? (
    <input
      name="pricePerDay"
      value={editedVehicle.pricePerDay || ""}
      onChange={handleInputChange}
            type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.pricePerDay}</p>
  )}
</div>

{/* Fuel Capacity */}
<div>
  <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters)</label>
  {isEditing ? (
    <input
      name="fuelCapacity"
      value={editedVehicle.fuelCapacity || ""}
      onChange={handleInputChange}
            type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.fuelCapacity}</p>
  )}
</div>

{/* Mileage */}
<div>
  <label className="block text-sm font-medium mb-1">Mileage (per liter)</label>
  {isEditing ? (
    <input
      name="mileage"
      value={editedVehicle.mileage || ""}
      onChange={handleInputChange}
            type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.mileage}</p>
  )}
</div>

{/* Engine CC */}
<div>
  <label className="block text-sm font-medium mb-1">Engine CC</label>
  {isEditing ? (
    <input
      name="engineCC"
      value={editedVehicle.engineCC || ""}
      onChange={handleInputChange}
            type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.engineCC}</p>
  )}
</div>

  {/* Sunroof */}
  <div>
  {data.vehicleType !== 'bike' && (
    <div className="mb-2">
      <label className="text-sm font-medium mb-1">Sunroof</label>
      {isEditing ? (
        <input
          type="checkbox"
          name="sunroof"
          checked={editedVehicle.sunroof || false}
          onChange={handleInputChange}
          className="border rounded ml-20"
        />
      ) : (
        <p>{data.sunroof ? 'Yes' : 'No'}</p>
      )}
    </div>
  )}
  </div>

  {/* GPS Tracking */}
  <div>
  {data.vehicleType !== 'bike' && (
    <div>
      <label className="text-sm font-medium mb-1">GPS Tracking</label>
      {isEditing ? (
        <input
          type="checkbox"
          name="gpsTracking"
          checked={editedVehicle.gpsTracking || false}
          onChange={handleInputChange}
          className="border rounded ml-11"
        />
      ) : (
        <p>{data.gpsTracking ? 'Yes' : 'No'}</p>
      )}
    </div>
  )}
</div>

{/* Insurance ID */}
<div>
  <label className="block text-sm font-medium mb-1">Insurance ID</label>
  {isEditing ? (
    <input
      name="insuranceID"
      value={editedVehicle.insuranceID || ""}
      onChange={handleInputChange}
                    type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.insuranceID}</p>
  )}
</div>

{/* Insurance Renewal Date */}
<div>
  <label className="block text-sm font-medium mb-1">Insurance Renewal Date</label>
  {isEditing ? (
    <input
      type="date"
      name="insuranceRenewalDate"
      value={editedVehicle.insuranceRenewalDate || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.insuranceRenewalDate}</p>
  )}
</div>

{/* Insurance Expire Date */}
<div>
  <label className="block text-sm font-medium mb-1">Insurance Expire Date</label>
  {isEditing ? (
    <input
      type="date"
      name="insuranceExpireDate"
      value={editedVehicle.insuranceExpireDate || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.insuranceExpireDate}</p>
  )}
</div>

{/* Last Serviced Date */}
<div>
  <label className="block text-sm font-medium mb-1">Last Serviced Date</label>
  {isEditing ? (
    <input
      type="date"
      name="lastServicedDate"
      value={editedVehicle.lastServicedDate || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.lastServicedDate}</p>
  )}
</div>

{/* Next Service Date */}
<div>
  <label className="block text-sm font-medium mb-1">Next Service Date</label>
  {isEditing ? (
    <input
      type="date"
      name="nextServiceDate"
      value={editedVehicle.nextServiceDate || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.nextServiceDate}</p>
  )}
</div>

{/* Holder Name */}
<div>
  <label className="block text-sm font-medium mb-1">Holder Name</label>
  {isEditing ? (
    <input
      name="holderName"
      value={editedVehicle.holderName || ""}
      onChange={handleInputChange}
      type='text'
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.holderName}</p>
  )}
</div>

{/* Holder Mobile */}
<div>
  <label className="block text-sm font-medium mb-1">Holder Mobile</label>
  {isEditing ? (
    <input
      name="holderMobile"
      value={editedVehicle.holderMobile || ""}
      onChange={handleInputChange}
      type="tel"
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.holderMobile}</p>
  )}
</div>

{/* Holder Email */}
<div>
  <label className="block text-sm font-medium mb-1">Holder Email</label>
  {isEditing ? (
    <input
      name="holderEmail"
      value={editedVehicle.holderEmail || ""}
      onChange={handleInputChange}
      type="email"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.holderEmail}</p>
  )}
</div>

{/* Airbags */}
{data.vehicleType !== 'bike' && (
  <div>
    <label className="block text-sm font-medium mb-1">Airbags</label>
    {isEditing ? (
      <input
        name="airbags"
        value={editedVehicle.airbags || ""}
        onChange={handleInputChange}
        type="number"
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
      />
    ) : (
      <p>{data.airbags}</p>
    )}
  </div>
)}

{/* Accident History */}
<div>
  <label className="block text-sm font-medium mb-1">Accident History</label>
  {isEditing ? (
    <textarea
      name="accidentHistory"
      value={editedVehicle.accidentHistory || ""}
      onChange={handleInputChange}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <p>{data.accidentHistory}</p>
  )}
</div>
{/* Vehicle Features */}
<div>
  <label className="block text-sm font-medium mb-1">Vehicle Features</label>
  {isEditing ? (
          <div className="flex flex-wrap gap-2">
            {commonFeatures.map(feature => (
              <div key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  value={feature}
                  // onChange={handleFeatureChange}
                  className="mr-2"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
  ) : (
    <ul>
      {data.features.map((feature, index) => (
        <li key={index} className="text-gray-600">
          - {feature}
        </li>
      ))}
    </ul>
  )}
</div>

{/* Vehicle Images */}
<div className='space-y-3'>
  <label className="block text-sm font-medium mb-1">Vehicle Images</label>
  {isEditing ? (
    <>
    <input
      type="file"
      accept="image/*"
      multiple
      onChange={(e) => handleImageChange(e.target.files)}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
    <input
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => handleImageChange(e.target.files)}
    className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
  />
  <input
  type="file"
  accept="image/*"
  multiple
  onChange={(e) => handleImageChange(e.target.files)}
  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
/>
</>
  ) : (
    <div className="flex gap-3">
      {data.images.map((image, index) => (
        <div key={index} className="w-full h-auto mb-2 border border-gray-300 p-2 rounded-md">
          <img src={image} alt={`Vehicle ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  )}
</div>

{/* Registration Document */}
<div>
  <label className="block text-sm font-medium mb-1">Registration Doc</label>
  {isEditing ? (
    <input
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={(e) => handleDocumentChange('registrationDoc', e.target.files[0])}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
      <a href={data.documents.registrationDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        View Registration Doc
      </a>
    </div>
  )}
</div>

{/* Insurance Document */}
<div>
  <label className="block text-sm font-medium mb-1">Insurance Doc</label>
  {isEditing ? (
    <input
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={(e) => handleDocumentChange('insuranceDoc', e.target.files[0])}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
      <a href={data.documents.insuranceDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        View Insurance Doc
      </a>
    </div>
  )}
</div>

{/* Holder Driving License */}
<div>
  <label className="block text-sm font-medium mb-1">Holder DL</label>
  {isEditing ? (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleDocumentChange('drivingLicense', e.target.files[0])}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
      <img src={data.holderDocuments.drivingLicense} alt="Driving License" className="w-full h-auto object-cover" />
    </div>
  )}
</div>

{/* Holder Proof */}
<div>
  <label className="block text-sm font-medium mb-1">Holder Proof</label>
  {isEditing ? (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleDocumentChange('aadharProof', e.target.files[0])}
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
    />
  ) : (
    <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
      <img src={data.holderDocuments.aadharProof} alt="Aadhar Card" className="w-full h-auto object-cover" />
    </div>
  )}
</div>
</div>


        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-blue-600"
            >
              Save
            </button>
            <button
            onClick={handleSave}
            className="bg-gray-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-gray-600"
          >
            Cancel
          </button>
          </>
          ) : (
            <>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-blue-600"
            >
              Edit
            </button>
                      <button
                      onClick={handleDelete}
                      className="bg-red-500 text-white font-bold py-1.5 px-3 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                    </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewVehicleModal;
