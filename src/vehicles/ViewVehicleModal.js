// vehicles/ViewVehicleModal.js
import React from 'react';

const ViewVehicleModal = ({ isOpen, onClose, vehicle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-md p-5 z-10">
        <h2 className="text-lg font-bold mb-4">{vehicle ? vehicle.model : "No vehicle selected."}</h2>
        {/* Placeholder for vehicle details */}
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
