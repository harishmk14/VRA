// vehicles/Vehicles.js
import React, { useState , useEffect } from 'react';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVehicles } from '../Slice/vehicleSlice';
import FilterModal from '../vehicles/FilterModal'; 
import AddVehicleModal from '../vehicles/AddVehicleModal'; 
import ViewVehicleModal from '../vehicles/ViewVehicleModal'; 

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const status = useSelector((state) => state.vehicles.status);
  const error = useSelector((state) => state.vehicles.error);

  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [isViewVehicleModalOpen, setIsViewVehicleModalOpen] = useState(false); 
  const [selectedVehicle, setSelectedVehicle] = useState(null); 


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllVehicles());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading vehicles...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }



  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400"; 
      case "In Journey":
        return "bg-green-500"; 
      case "Available":
        return "bg-blue-500"; 
      case "Service":
        return "bg-red-600"; 
      default:
        return "bg-gray-300"; 
    }
  };

  const filteredVehicles = vehicles.data.filter((vehicle) => {
    if (filter === "All") return true;
    if (filter === "Active") return vehicle.status === "Pending" || vehicle.status === "In Journey"; 
    if (filter === "Available") return vehicle.status === "Available"; 
    if (filter === "Maintenance") return vehicle.status === "Service"; 
    return false;
  });

  return (
    <div className="h-full flex flex-col p-5 py-3 pb-0">
      <div className="flex justify-between items-center pb-2 sticky top-0 z-10 px-3">

        <div className="flex space-x-4">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-full ${filter === "All" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white active:bg-blue-500 active:ring-2 active:ring-blue-500"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Active")}
            className={`px-3 py-1 rounded-full ${filter === "Active" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white active:bg-blue-500 active:ring-2 active:ring-blue-500"}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Available")}
            className={`px-3 py-1 rounded-full ${filter === "Available" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white active:bg-blue-500 active:ring-2 active:ring-blue-500"}`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter("Maintenance")}
            className={`px-3 py-1 rounded-full ${filter === "Maintenance" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white active:bg-blue-500 active:ring-2 active:ring-blue-500"}`}
          >
            Maintenance
          </button>
        </div>
        <div  className='flex gap-3'>
        <button 
          onClick={() => setIsAddVehicleModalOpen(true)} 
          className="bg-blue-500 text-white px-1 py-0 rounded-lg flex items-center"
        >
          <i className="bi bi-plus text-3xl"></i>
        </button>
        <button
          onClick={() => setIsFilterModalOpen(true)} 
          className="bg-blue-500 text-white px-2.5 py-0 rounded-lg flex items-center gap-1"
        >
          <i className="bi bi-funnel-fill"></i> Filter
        </button>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onFilterSelect={(selectedFilter) => setFilter(selectedFilter)}
      />

      {/* Add Vehicle Modal */}
      <AddVehicleModal
        isOpen={isAddVehicleModalOpen}
        onClose={() => setIsAddVehicleModalOpen(false)} 
      />

      {/* View Vehicle Modal */}
      <ViewVehicleModal
        isOpen={isViewVehicleModalOpen}
        onClose={() => setIsViewVehicleModalOpen(false)} 
        vehicle={selectedVehicle} 
      />

      <div className="flex-grow overflow-auto hide-scroll p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {filteredVehicles && filteredVehicles.length > 0 ? (
    filteredVehicles.map((vehicle) => (
      <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden p-2">
        <div className="relative">
          <img
            src={vehicle.vImg[1]}
            alt={vehicle.vModel}
            className="w-full h-44 object-cover rounded-md"
          />
          <span className={`absolute top-2 right-2 ${getStatusColor(vehicle.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
            {vehicle.status}
          </span>
        </div>

        <div className="p-2 space-y-2">
          <h2 className="text-sm font-semibold text-gray-800">
            {vehicle.brand}
          </h2>

          <div className="grid grid-cols-3 gap-1 mt-2">
            <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
              {vehicle.fuel}
            </span>
            <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
              {vehicle.gear}
            </span>
            <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
              Seater {vehicle.seatCnt}
            </span>
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500 text-xs">Range {vehicle.rangeKm}</span>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="text-sm font-bold text-gray-900">
              Rs {vehicle.priceDay} <span className="text-xs text-gray-500">Per Day</span>
            </div>
            <button
              className="text-blue-500 rounded-lg text-xl"
              onClick={() => {
                setSelectedVehicle(vehicle);
                setIsViewVehicleModalOpen(true);
              }}
            >
              <i className="bi bi-eye-fill"></i>
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
<div className="flex items-center justify-center h-96 col-span-full text-center text-gray-500">
  No vehicle available
</div>
  )}
</div>

      </div>
    </div>
  );
};

export default Vehicles;
