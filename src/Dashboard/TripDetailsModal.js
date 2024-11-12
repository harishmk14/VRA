import React from 'react';

const TripDetailsModal = ({ selectedTrip, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Trip Details</h2>
        <p><strong>Trip No:</strong> {selectedTrip.tripNo}</p>
        <p><strong>Vehicle No:</strong> {selectedTrip.vehicleNo}</p>
        <p><strong>Driver:</strong> {selectedTrip.driver}</p>
        <p><strong>Persons:</strong> {selectedTrip.persons}</p>
        <p><strong>Status:</strong> {selectedTrip.status}</p>
        <div className="flex justify-end mt-4">
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose} 
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;
