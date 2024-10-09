import React, { useState } from 'react';
import VehicleBook from '../Booking/VehicleBook'; // Import the VehicleBook component

const VehicleAvailability = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // For booking modal
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Track the selected vehicle for booking

  const handleCheckAvailability = () => {
    // Simulating vehicle data (could be fetched from an API in a real-world scenario)
    const vehiclesData = [
      {
        id: 1,
        model: "Tesla Model 3",
        image: "https://ev-database.org/img/auto/Tesla_Model_3/Tesla_Model_3-01@2x.jpg",
        fuelType: "Electric",
        transmission: "Auto Gear",
        seater: 5,
        range: "350 km",
        price: 2000,
        status: "Available",
      },
      {
        id: 2,
        model: "Toyota Camry",
        image: "https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2016/11/097A0935.jpg?fit=768%2C512&ssl=1",
        fuelType: "Petrol",
        transmission: "Auto Gear",
        seater: 5,
        range: "450 km",
        price: 1500,
        status: "Available",
      },
      {
        id: 3,
        model: "Ford Mustang",
        image: "https://www.vdm.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/_360/atlas-blue/mst_24_gtp_ext_360_atlas_blue_01.jpg",
        fuelType: "Gas",
        transmission: "Auto Gear",
        seater: 4,
        range: "300 km",
        price: 2500,
        status: "Available",
      },
      {
        id: 4,
        model: "Chevrolet Malibu",
        image: "https://cdn.motor1.com/images/mgl/g4MN9E/s1/chevrolet-malibu.webp",
        fuelType: "Gas",
        transmission: "Manual",
        seater: 5,
        range: "500 km",
        price: 1600,
        status: "Available",
      },
    ];

    setAvailableVehicles(vehiclesData);
    setFilteredVehicles(vehiclesData); // Assuming no filters applied yet
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleBookVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingModalOpen(true); // Open booking modal
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col w-full h-1/6 pl-4 pt-1'>
        <h2 className='text-lg font-bold text-gray-600'>Vehicle Availability</h2>
      </div>
      <div className='flex w-full h-1/6 items-center gap-3 px-4'>
        <select className='w-3/5 rounded-md border-2  p-1 text-xs'>
          <option value="all">All Vehicles</option>
          <option value="bike">Bike</option>
          <option value="car">Car</option>
          <option value="van">Van</option>
          <option value="bus">Bus</option>
          <option value="truck">Delivery Truck</option>
        </select>
        <input type='number' className='w-2/5 rounded-md border-2 p-1.5 text-xs placeholder-black' placeholder='Seater' />
      </div>
      <div className='flex flex-col w-full h-3/6 items-center px-4 gap-4'>
        <div className='flex flex-col h-1/2 w-full justify-center'>
          <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>Start Date</h2>
          </div>
          <div className='flex h-1/2 w-full gap-3'>
            <input type='date' className='w-3/5 rounded-md border-2  p-1 text-xs' />
            <input type='time' className='w-2/5 rounded-md border-2  p-1 text-xs' />
          </div>
        </div>
        <div className='flex flex-col h-1/2 w-full justify-center'>
          <div className='flex w-1/2'>
            <h2 className='text-sm font-bold text-gray-600'>End Date</h2>
          </div>
          <div className='flex h-1/2 w-full gap-3'>
            <input type='date' className='w-3/5 rounded-md border-2  p-1 text-xs' />
            <input type='time' className='w-2/5 rounded-md border-2  p-1 text-xs' />
          </div>
        </div>
      </div>
      <div className='flex w-full h-1/6 items-center px-3 gap-3 justify-center'>
        <button
          className='p-1 px-3 rounded-md bg-blue-500 shadow-sm text-sm text-white'
          onClick={handleCheckAvailability}
        >
          Check
        </button>
      </div>

      {/* Availability Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-56 py-12">
          <div className="bg-zinc-100 p-6 pt-0 rounded-xl shadow-lg w-full h-full overflow-auto">
            <div className="flex justify-between items-center sticky top-0 bg-zinc-100 z-10 p-4 px-1">
              <h2 className="text-2xl font-bold">Available Vehicles</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <span className="text-2xl ">&times;</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden p-2">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <div className="p-2 space-y-2">
                    <h2 className="text-sm font-semibold text-gray-800">{vehicle.model}</h2>
                    <div className="grid grid-cols-3 gap-1 mt-2">
                      <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">{vehicle.fuelType}</span>
                      <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">{vehicle.transmission}</span>
                      <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">Seater {vehicle.seater}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-500 text-xs">Range {vehicle.range}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm font-bold text-gray-900">
                        Rs {vehicle.price} <span className="text-xs text-gray-500">Per Day</span>
                      </div>
                      <button
                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
                        onClick={() => handleBookVehicle(vehicle)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-56 py-12">
          <div className="bg-white p-6 pt-0 rounded-xl shadow-lg w-full h-full overflow-auto">
            {/* Booking form */}
            <VehicleBook
              vehicle={selectedVehicle} // Pass the selected vehicle data if necessary
              closeModal={handleCloseBookingModal} // Pass close modal function
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleAvailability;
