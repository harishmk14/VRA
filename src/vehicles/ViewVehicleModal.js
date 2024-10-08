import React from 'react';
import up1 from '../Assets/img/ford-1.jpg';
import up2 from '../Assets/img/ford-2.jpeg';
import up3 from '../Assets/img/ford-3.jpg';
import aadhar from '../Assets/img/aadhar.jpg';
import dl from '../Assets/img/DL.jpg';
import docs from '../Assets/img/Harishdocs.pdf';

const ViewVehicleModal = ({ isOpen, onClose, vehicleData }) => {
  if (!isOpen) return null;

  // Separate data into a variable
  const data = {
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
      'Collision Avoidance System'
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

    // Function to handle update action
    const handleUpdate = () => {
      // Update logic here
      console.log("Update clicked");
    };
  
    // Function to handle delete action
    const handleDelete = () => {
      // Delete logic here
      console.log("Delete clicked");
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">View Vehicle Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Vehicle Type */}
          <div>
            <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
            <p>{data.vehicleType}</p>
          </div>

          {/* Brand Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Brand Name</label>
            <p>{data.brandName}</p>
          </div>

          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Model</label>
            <p>{data.vehicleModel}</p>
          </div>

          {/* Registration No */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration No</label>
            <p>{data.registrationNo}</p>
          </div>

          {/* Registration Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration Type</label>
            <p>{data.registrationType}</p>
          </div>

          {/* Seater */}
          <div>
            <label className="block text-sm font-medium mb-1">Seater</label>
            <p>{data.seater}</p>
          </div>

          {/* AC/Non-AC */}
          {data.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">AC/Non-AC</label>
              <p>{data.acType}</p>
            </div>
          )}

          {/* Gear Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Gear Type</label>
            <p>{data.gearType}</p>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            <p>{data.fuelType}</p>
          </div>

          {/* Toll Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Toll Type</label>
            <p>{data.tollType}</p>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <p>{data.color}</p>
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Range (in km)</label>
            <p>{data.range}</p>
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Per Day</label>
            <p>{data.pricePerDay}</p>
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters)</label>
            <p>{data.fuelCapacity}</p>
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage (per liter)</label>
            <p>{data.mileage}</p>
          </div>

          {/* Engine CC */}
          <div>
            <label className="block text-sm font-medium mb-1">Engine CC</label>
            <p>{data.engineCC}</p>
          </div>

          {/* Sunroof */}
          {data.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Sunroof</label>
              <p>{data.sunroof ? 'Yes' : 'No'}</p>
            </div>
          )}

          {/* GPS Tracking */}
          {data.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">GPS Tracking</label>
              <p>{data.gpsTracking ? 'Yes' : 'No'}</p>
            </div>
          )}

          {/* Insurance ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance ID</label>
            <p>{data.insuranceID}</p>
          </div>

          {/* Insurance Renewal Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Renewal Date</label>
            <p>{data.insuranceRenewalDate}</p>
          </div>

          {/* Insurance Expire Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Expire Date</label>
            <p>{data.insuranceExpireDate}</p>
          </div>

          {/* Last Serviced Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Serviced Date</label>
            <p>{data.lastServicedDate}</p>
          </div>

          {/* Next Service Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Next Service Date</label>
            <p>{data.nextServiceDate}</p>
          </div>

          {/* Holder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Name</label>
            <p>{data.holderName}</p>
          </div>

          {/* Holder Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Mobile</label>
            <p>{data.holderMobile}</p>
          </div>

          {/* Holder Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Email</label>
            <p>{data.holderEmail}</p>
          </div>

          {/* Airbags */}
          {data.vehicleType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Airbags</label>
              <p>{data.airbags}</p>
            </div>
          )}

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            <p>{data.accidentHistory}</p>
          </div>

          {/* Vehicle Features */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Features</label>
            <ul>
              {data.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  - {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vehicle Images */}
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

        {/* Registration Document */}
        <div>
          <label className="block text-sm font-medium mb-1">Registration Doc</label>
          <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <a href={data.documents.registrationDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Registration Doc
            </a>
          </div>
        </div>

        {/* Insurance Document */}
        <div>
          <label className="block text-sm font-medium mb-1">Insurance Doc</label>
          <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <a href={data.documents.insuranceDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Insurance Doc
            </a>
          </div>
        </div>

        {/* Holder Driving License */}
        <div>
          <label className="block text-sm font-medium mb-1">Holder DL</label>
          <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <img src={data.holderDocuments.drivingLicense} alt="Driving License" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Holder Proof */}
        <div>
          <label className="block text-sm font-medium mb-1">Holder Proof</label>
          <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
            <img src={data.holderDocuments.aadharProof} alt="Aadhar Card" className="w-full h-auto object-cover" />
          </div>
        </div>
        </div>
                {/* Action Buttons */}
                <div className="flex justify-end mt-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600"
          >
            Update
          </button>
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

export default ViewVehicleModal;
