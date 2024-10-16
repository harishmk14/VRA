import React, { useState } from 'react';
import '../index.css';
import FilterModal from '../Drivers/FilterModal'; // Import the FilterModal component
import AddDriverModal from '../Drivers/AddDriverModal'; // Import AddVehicleModal component
import ViewDetailModal from '../Drivers/ViewDetailsModal'; // Import the ViewVehicleModal component
import { GiSteeringWheel } from "react-icons/gi";

const Driver = () => {
  const driversData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://imgcdn.stablediffusionweb.com/2024/10/14/b53d6677-8076-4e9e-a652-37d1995386f3.jpg",
      driverId: "D1",
      experience: "10 years",
      starRating: 5,
      age: 56,
      vehicleCategory: "Car, Bus",
      status: "Available",
      shift: "Day",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://imgcdn.stablediffusionweb.com/2024/10/4/2d52a83c-0d15-4136-87a4-47e92d66b3b2.jpg",
      driverId: "D2",
      experience: "8 years",
      starRating: 4,
      age: 45,
      vehicleCategory: "Car, SUV",
      status: "Pending",
      shift: "Day / Night",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "https://imgcdn.stablediffusionweb.com/2024/9/14/32126d8d-b1ea-4a60-9878-b2f729b566fa.jpg",
      driverId: "D3",
      experience: "12 years",
      starRating: 4.5,
      age: 50,
      vehicleCategory: "Car",
      status: "In Journey",
      shift: "Day / Night",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://imgcdn.stablediffusionweb.com/2024/9/8/04fdb256-b489-4571-972c-249a0cb35019.jpg",
      driverId: "D4",
      experience: "5 years",
      starRating: 4,
      age: 40,
      vehicleCategory: "Bus",
      status: "Unavailable",
      shift: "Night", // Changed from "Service" to "Unavailable"
    },
  ];

  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false); // State for Add Vehicle Modal
  const [isViewVehicleModalOpen, setIsViewVehicleModalOpen] = useState(false); // State for View Vehicle Modal
  const [selectedDriver, setSelectedDriver] = useState(null); // State to hold the selected driver

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400"; // Yellow for Pending
      case "In Journey":
        return "bg-green-500"; // Green for In Journey
      case "Available":
        return "bg-blue-500"; // Blue for Available
      case "Unavailable":
        return "bg-red-600"; // Red for Unavailable
      default:
        return "bg-gray-300"; // Default gray if status is unknown
    }
  };

  const filteredDrivers = driversData.filter((driver) => {
    if (filter === "All") return true; // Show all drivers
    if (filter === "Active") return driver.status === "Pending" || driver.status === "In Journey"; // Show Pending & In Journey
    if (filter === "Available") return driver.status === "Available"; // Show Available
    if (filter === "Unavailable") return driver.status === "Unavailable"; // Show Unavailable
    return false;
  });

  const renderShiftIcon = (shift) => {
    if (shift.includes("Day") && shift.includes("Night")) {
      return (
        <>
          <i className="bi bi-brightness-high-fill mr-1"></i> {/* Add margin here */}
          <i className="bi bi-moon-stars-fill"></i>
        </>
      ); // Show both icons for Day/Night shift
    } else if (shift === "Day") {
      return <i className="bi bi-brightness-high-fill mr-1"></i>; // Add margin here for Day shift
    } else if (shift === "Night") {
      return <i className="bi bi-moon-stars-fill mr-1"></i>; // Add margin here for Night shift
    }
    return null; // Return null if no valid shift is found
  };

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
            onClick={() => setFilter("Unavailable")}
            className={`px-3 py-1 rounded-full ${filter === "Unavailable" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white active:bg-blue-500 active:ring-2 active:ring-blue-500"}`}
          >
            Unavailable
          </button>
        </div>
        <div className='flex gap-3'>
          <button
            onClick={() => setIsAddVehicleModalOpen(true)} // Open Add Driver Modal
            className="bg-blue-500 text-white px-1 py-0 rounded-lg flex items-center"
          >
            <i className="bi bi-person-plus-fill p-0.5 px-1 text-xl"></i>
          </button>
          <button
            onClick={() => setIsFilterModalOpen(true)} // Open Filter modal
            className="bg-blue-500 text-white px-2.5 py-0 rounded-lg flex items-center gap-1"
          >
            <i class="bi bi-funnel-fill"></i> Filter
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onFilterSelect={(selectedFilter) => setFilter(selectedFilter)}
      />

      {/* Add Driver Modal */}
      <AddDriverModal
        isOpen={isAddVehicleModalOpen}
        onClose={() => setIsAddVehicleModalOpen(false)} // Close Add Driver Modal
      />

      {/* View Driver Modal */}
      <ViewDetailModal
        isOpen={isViewVehicleModalOpen}
        onClose={() => setIsViewVehicleModalOpen(false)} // Close View Driver Modal
        driver={selectedDriver} // Pass the selected driver to the modal
      />

      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
          {filteredDrivers.map((driver) => (
            <div key={driver.id} className="bg-white rounded-lg shadow-md overflow-hidden p-2 grid grid-cols-[30%_70%]">
              <div className="w-40 h-40">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="object-cover rounded-md"
                />
              </div>

              <div className="px-2 space-y-2.5 relative">
                <span className={`absolute top-0 right-0 ${getStatusColor(driver.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
                  {driver.status}
                </span>
                <h2 className="text-lg font-semibold text-gray-800">
                  {driver.name} - {driver.driverId}
                </h2>

                <div className="grid grid-cols-3 gap-1">
                  <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                    Exp - {driver.experience}
                  </span>
                  <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                    Rating - {driver.starRating} ⭐
                  </span>
                  <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                    Age - {driver.age}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
  <span className="mr-1">{renderShiftIcon(driver.shift)}</span> {/* Add margin to the right of the icon */}
  {driver.shift}
</span>
                  <span className=" flex text-sm bg-blue-100 rounded-full px-1 py-1 text-center items-center justify-center">
                  <GiSteeringWheel className='flex mr-2'/> {driver.vehicleCategory}
                  </span>
                </div>

                <div className="flex justify-end items-center">
                  <button
                    className="px-2.5 py-1.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={() => {
                      setSelectedDriver(driver); // Set the selected driver
                      setIsViewVehicleModalOpen(true); // Open View Driver Modal
                    }}
                  >
                    <i class="bi bi-eye-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Driver;
