import React, { useState, useEffect } from 'react';
import '../index.css';
import FilterModal from '../Drivers/FilterModal'; // Import the FilterModal component
import AddDriverModal from '../Drivers/AddDriverModal'; // Import AddVehicleModal component
import ViewDetailModal from '../Drivers/ViewDetailsModal'; // Import the ViewVehicleModal component
import ReviewModal from '../Drivers/ReviewModal';
import { fetchLicenseCategory } from '../Slice/licenseCategorySlice';
import { GiSteeringWheel } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from '../Slice/driverSlice';

const Driver = () => {
  const dispatch = useDispatch();
  const { drivers, loading, error } = useSelector((state) => state.drivers);
  const { data: licenseCategories, loading: licenseLoading, error: licenseError } = useSelector((state) => state.licenseCategory);
  // Fetch drivers when the component mounts
  useEffect(() => {
    dispatch(fetchDrivers());
    dispatch(fetchLicenseCategory());
  }, [dispatch]);

  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false); // State for Add Vehicle Modal
  const [isViewVehicleModalOpen, setIsViewVehicleModalOpen] = useState(false); // State for View Vehicle Modal
  const [selectedDriver, setSelectedDriver] = useState(null); // State to hold the selected driver
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // State for Review Modal


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

  const filteredDrivers = drivers.filter((driver) => {
    if (filter === "All") return true; // Show all drivers
    if (filter === "Active") return driver.status === "Pending" || driver.status === "In Journey"; // Show Pending & In Journey
    if (filter === "Available") return driver.status === "Available"; // Show Available
    if (filter === "Unavailable") return driver.status === "Unavailable"; // Show Unavailable
    return false;
  });

  const renderShiftIcon = (shift) => {
    if (shift === "Remote") {
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

  const calculateAge = (dob) => {
    const birthDate = new Date(dob); // The ISO 8601 string should work directly
    if (isNaN(birthDate.getTime())) {
      console.error(`Invalid date format for DOB: ${dob}`);
      return 'Invalid Date';
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--; // Adjust if birthday hasn't occurred yet this year
    }
    return age;
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
            <i className="bi bi-person-plus-fill p-1 px-1.5 text-xl"></i>
          </button>
          <button
            onClick={() => setIsFilterModalOpen(true)} // Open Filter modal
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

      {/* Add Driver Modal */}
      <AddDriverModal
        isOpen={isAddVehicleModalOpen}
        onClose={() => setIsAddVehicleModalOpen(false)} // Close Add Driver Modal
      />

      {/* View Driver Modal */}
      <ViewDetailModal
        isOpen={isViewVehicleModalOpen}
        onClose={() => setIsViewVehicleModalOpen(false)} // Close View Driver Modal
        driver={selectedDriver}
        dlc={licenseCategories} // Pass the selected driver to the modal
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)} // Close Review Modal
        driver={selectedDriver} // Pass the selected driver to the review modal
      />


      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => (
              <div key={driver.id} className="bg-white rounded-lg shadow-md overflow-hidden p-2 grid grid-cols-[30%_70%]">
                <div className="w-40 h-40">
                  <img
                    src={driver.dImg}
                    alt={driver.dName}
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="px-2 space-y-2.5 relative">
                  <span className={`absolute top-0 right-0 ${getStatusColor(driver.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
                    {driver.status}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {driver.dName} - {driver.uniqId}
                  </h2>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                      Exp - {driver.expe}
                    </span>
                    <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                      Rating - {driver.starRating} <i className="bi bi-star-fill text-yellow-500 ml-1"></i>
                    </span>
                    <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                      Age - {calculateAge(driver.DOB)}
                    </span>
                  </div>
                  <div className="grid grid-cols-[40%_60%] gap-1">
                    <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                      <span className="mr-1">{renderShiftIcon(driver.shift)}</span>
                      {driver.shift}
                    </span>
                    <span className="flex text-sm bg-blue-100 rounded-full px-1 py-1 text-center items-center justify-center">
                      <GiSteeringWheel className="flex mr-2" />
                      {licenseCategories
                        .filter(category => driver.DLcategory.includes(category.uniqId))
                        .map((category, index, arr) => (
                          <label key={category.uniqId} className="text-black">{category.ABB}{index < arr.length - 1 && " /  "}</label>
                        ))}
                    </span>
                  </div>


                  <div className="flex justify-end items-center space-x-5">
                    <i
                      className="bi bi-card-text text-blue-500 text-2xl mt-1 cursor-pointer"
                      onClick={() => {
                        setSelectedDriver(driver);
                        setIsReviewModalOpen(true);
                      }}
                    ></i>
                    <i
                      className="bi bi-eye-fill text-blue-500 text-2xl mr-3 mt-1 cursor-pointer"
                      onClick={() => {
                        setSelectedDriver(driver);
                        setIsViewVehicleModalOpen(true);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-96 col-span-full text-center text-gray-500">
              No driver available
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Driver;
