import React from 'react';

const DriverListModal = ({ drivers, onClose, onAssign }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-32">
      <div className="bg-zinc-100 p-6 py-0 rounded-xl shadow-lg overflow-auto w-1/3 h-full">
        <div className="flex justify-between items-center sticky top-0 bg-zinc-100 z-10 p-4 px-1">
          <h2 className="text-2xl font-bold">Available Drivers</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <ul className="overflow-y-auto">
          {drivers.map((driver) => (
            <li key={driver.id} className="flex items-center justify-between mb-2 p-2 border-b">
              <div className="flex items-center">
                <img
                  src={driver.image}
                  alt={`${driver.name}'s profile`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium">{driver.name}</span>
              </div>
              <div className="flex space-x-2"> {/* Added a flex container for buttons */}
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => onAssign(driver)}
                >
                <i class="bi bi-eye-fill"></i>
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => onAssign(driver)}
                >
                  <i class="bi bi-check-lg"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverListModal;
