// vehicles/Vehicles.js
import React, { useState, useEffect } from 'react';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVehicles } from '../Slice/vehicleSlice';
import FilterModal from '../vehicles/FilterModal';
import AddVehicleModal from '../vehicles/AddVehicleModal';
import ViewVehicleModal from '../vehicles/ViewVehicleModal';
import ConfirmationModal from '../Components/ConfirmationModal';
import { deleteVehicle } from '../Slice/vehicleDelete';
import { PiSeatFill } from "react-icons/pi";

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const status = useSelector((state) => state.vehicles.status);

  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [isViewVehicleModalOpen, setIsViewVehicleModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [vehicleToDelete, setVehicleToDelete] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllVehicles());
    }
  }, [status, dispatch]);

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

  const filteredVehicles = vehicles?.data ? vehicles.data.filter((vehicle) => {
    if (filter === "All") return true;
    if (filter === "Active") return vehicle.status === "Pending" || vehicle.status === "In Journey";
    if (filter === "Available") return vehicle.status === "Available";
    if (filter === "Maintenance") return vehicle.status === "Service";
    return false;
  }) : [];


  const handleDelete = (vehicleId) => {
    dispatch(deleteVehicle(vehicleId)).then(() => {
      dispatch(fetchAllVehicles());
    });
    setIsConfirmationModalOpen(false);
  };

  const openConfirmationModal = (vehicleId) => {
    setVehicleToDelete(vehicleId);
    setIsConfirmationModalOpen(true);
  };

  return (
    <div className="h-full flex flex-col p-5 py-3 pb-0">
      <div className="flex justify-between items-center pb-2 sticky top-0 z-10 px-3">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter("All")}
            className={`px-3 py-1 rounded-full ${filter === "All" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white "}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Active")}
            className={`px-3 py-1 rounded-full ${filter === "Active" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white "}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Available")}
            className={`px-3 py-1 rounded-full ${filter === "Available" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white "}`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter("Maintenance")}
            className={`px-3 py-1 rounded-full ${filter === "Maintenance" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white "}`}
          >
            Maintenance
          </button>
        </div>
        <div className="flex gap-3">
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
      // onFilterSelect={(selectedFilter) => setFilter(selectedFilter)}
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

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={() => handleDelete(vehicleToDelete)}
        message="Are you sure you want to delete this vehicle?"
      />

      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredVehicles.length > 0 ? (
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

                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <span className="flex items-center justify-center text-xs bg-blue-100 rounded-full px-2 py-1 text-center">
                      <i className="bi bi-fuel-pump-fill mr-1"></i>
                      {vehicle.fuel}
                    </span>
                    <span className="flex items-center justify-center text-xs bg-blue-100 rounded-full px-2 py-1 text-center">
                      <i className="bi bi-gear-wide-connected mr-1"></i>
                      {vehicle.gear}
                    </span>
                    <span className="flex items-center justify-center text-xs bg-blue-100 rounded-full px-2 py-1 text-center">
                      <PiSeatFill className="mr-1" />
                      Seat {vehicle.seatCnt}
                    </span>
                  </div>


                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-xs">Range {vehicle.rangeKm}</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="text-sm font-bold text-gray-900">
                      Rs {vehicle.priceDay} <span className="text-xs text-gray-500">Per Day</span>
                    </div>
                    <div className='space-x-1'>
                      <button
                        className="text-blue-500 rounded-lg text-xl"
                        onClick={() => {
                          setSelectedVehicle(vehicle);
                          setIsViewVehicleModalOpen(true);
                        }}
                      >
                        <i className="bi bi-eye-fill hover:bg-blue-50 p-2 py-1 rounded-md"></i>
                      </button>
                      <button
                        className="text-xl"
                        onClick={() => openConfirmationModal(vehicle.uniqId)}
                      >
                        <i className="bi bi-trash3-fill text-red-400 hover:bg-red-50 p-2 py-1 rounded-md"></i>
                      </button>
                    </div>
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
