import React from 'react';

const ViewVehicleModal = ({ isOpen, onClose, vehicle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-md p-5 z-10 overflow-auto max-h-[90vh] w-4/5">
        <h2 className="text-lg font-bold mb-4">
          {vehicle ? vehicle.model : "No vehicle selected."}
        </h2>
        {vehicle ? (
          <div className="grid grid-cols-2 gap-4">
            <div><strong>Brand Name:</strong> {vehicle.brandName}</div>
            <div><strong>Vehicle Type:</strong> {vehicle.vehicleType}</div>
            <div><strong>Model:</strong> {vehicle.model}</div>
            <div><strong>Registration No:</strong> {vehicle.registrationNo}</div>
            <div><strong>Registration Type:</strong> {vehicle.registrationType}</div>
            <div><strong>Seater:</strong> {vehicle.seater}</div>
            <div><strong>AC/Non-AC:</strong> {vehicle.acType}</div>
            <div><strong>Gear Type:</strong> {vehicle.gearType}</div>
            <div><strong>Fuel Type:</strong> {vehicle.fuelType}</div>
            <div><strong>Toll Type:</strong> {vehicle.tollType}</div>
            <div><strong>Color:</strong> {vehicle.color}</div>
            <div><strong>Range (km):</strong> {vehicle.range}</div>
            <div><strong>Price Per Day:</strong> {vehicle.pricePerDay}</div>
            <div><strong>Fuel Capacity (L):</strong> {vehicle.fuelCapacity}</div>
            <div><strong>Mileage (per liter):</strong> {vehicle.mileage}</div>
            <div><strong>Engine CC:</strong> {vehicle.engineCc}</div>
            <div><strong>Sunroof:</strong> {vehicle.sunroof ? 'Yes' : 'No'}</div>
            <div><strong>GPS Tracking:</strong> {vehicle.gpsTracking ? 'Yes' : 'No'}</div>
            <div><strong>Insurance ID:</strong> {vehicle.insuranceId}</div>
            <div><strong>Insurance Renewal Date:</strong> {vehicle.insuranceRenewalDate}</div>
            <div><strong>Insurance Expiry Date:</strong> {vehicle.insuranceExpireDate}</div>
            <div><strong>Last Serviced Date:</strong> {vehicle.lastServicedDate}</div>
            <div><strong>Next Service Date:</strong> {vehicle.nextServiceDate}</div>
            <div><strong>Holder Name:</strong> {vehicle.holderName}</div>
            <div><strong>Holder Mobile:</strong> {vehicle.holderMobile}</div>
            <div><strong>Holder Email:</strong> {vehicle.holderEmail}</div>
            <div><strong>Airbags:</strong> {vehicle.airbags}</div>
            <div><strong>Accident History:</strong> {vehicle.accidentHistory}</div>
            <div><strong>Vehicle Features:</strong> {vehicle.features?.join(', ')}</div>
            <div><strong>Upload Vehicle Image 1:</strong> <a href={vehicle.vehicleImage1}>View</a></div>
            <div><strong>Upload Vehicle Image 2:</strong> <a href={vehicle.vehicleImage2}>View</a></div>
            <div><strong>Upload Vehicle Image 3:</strong> <a href={vehicle.vehicleImage3}>View</a></div>
            <div><strong>Upload Registration Doc:</strong> <a href={vehicle.registrationDoc}>View</a></div>
            <div><strong>Upload Insurance Doc:</strong> <a href={vehicle.insuranceDoc}>View</a></div>
            <div><strong>Upload Holder DL:</strong> <a href={vehicle.holderDl}>View</a></div>
            <div><strong>Upload Holder Proof:</strong> <a href={vehicle.holderProof}>View</a></div>
          </div>
        ) : (
          <p>No vehicle details available.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewVehicleModal;
