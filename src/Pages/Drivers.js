import React, { useState, useEffect } from 'react';
import '../index.css';
import FilterModal from '../Drivers/FilterModal';
import AddDriverModal from '../Drivers/AddDriverModal';
import ViewDetailModal from '../Drivers/ViewDetailsModal';
import ReviewModal from '../Drivers/ReviewModal';
import { fetchLicenseCategory } from '../Slice/licenseCategorySlice';
import { GiSteeringWheel } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from '../Slice/driverSlice';

const Driver = () => {
  const dispatch = useDispatch();
  const { drivers, loading, error } = useSelector((state) => state.drivers);
  const { data: licenseCategories, loading: licenseLoading, error: licenseError } = useSelector((state) => state.licenseCategory);
  useEffect(() => {
    dispatch(fetchDrivers());
    dispatch(fetchLicenseCategory());
  }, [dispatch]);

  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [isViewVehicleModalOpen, setIsViewVehicleModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);


  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400";
      case "In Journey":
        return "bg-green-500";
      case "Available":
        return "bg-blue-500";
      case "Unavailable":
        return "bg-red-600";
      default:
        return "bg-gray-300";
    }
  };

  const filteredDrivers = drivers.filter((driver) => {
    if (filter === "All") return true;
    if (filter === "Active") return driver.status === "Pending" || driver.status === "In Journey";
    if (filter === "Available") return driver.status === "Available";
    if (filter === "Unavailable") return driver.status === "Unavailable";
    return false;
  });

  const renderShiftIcon = (shift) => {
    if (shift === "Remote") {
      return (
        <>
          <i className="bi bi-brightness-high-fill mr-1"></i>
          <i className="bi bi-moon-stars-fill"></i>
        </>
      );
    } else if (shift === "Day") {
      return <i className="bi bi-brightness-high-fill mr-1"></i>;
    } else if (shift === "Night") {
      return <i className="bi bi-moon-stars-fill mr-1"></i>;
    }
    return null;
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) {
      console.error(`Invalid date format for DOB: ${dob}`);
      return 'Invalid Date';
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
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
            onClick={() => setFilter("Unavailable")}
            className={`px-3 py-1 rounded-full ${filter === "Unavailable" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white "}`}
          >
            Unavailable
          </button>
        </div>
        <div className='flex gap-3'>
          <button
            onClick={() => setIsAddVehicleModalOpen(true)}
            className="bg-blue-500 text-white px-1 py-0 rounded-lg flex items-center"
          >
            <i className="bi bi-person-plus-fill p-1 px-1.5 text-xl"></i>
          </button>
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-blue-500 text-white px-2.5 py-0 rounded-lg flex items-center gap-1"
          >
            <i className="bi bi-funnel-fill"></i> Filter
          </button>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onFilterSelect={(selectedFilter) => setFilter(selectedFilter)}
      />

      <AddDriverModal
        isOpen={isAddVehicleModalOpen}
        onClose={() => setIsAddVehicleModalOpen(false)}
      />

      <ViewDetailModal
        isOpen={isViewVehicleModalOpen}
        onClose={() => setIsViewVehicleModalOpen(false)}
        driver={selectedDriver}
        dlc={licenseCategories}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        driver={selectedDriver}
      />


      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => (
              <div key={driver.id} className="bg-white rounded-lg shadow-md p-2 flex flex-col sm:flex-row gap-2">
                <div className="w-full sm:w-24 md:w-28 lg:w-32 h-28 md:h-32 lg:h-36">
                  <img
                    src={driver.dImg || 'placeholder_image_url'}
                    alt={driver.dName}
                    className="object-cover rounded-md w-full h-full"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <h2 className="text-base md:text-lg font-semibold text-gray-800">
                      {driver.dName} - {driver.uniqId}
                    </h2>
                    <span className={`text-xs md:text-sm ${getStatusColor(driver.status)} text-white font-bold px-2 py-0.5 rounded`}>
                      {driver.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <span className="text-xs md:text-sm bg-blue-100 rounded-full px-1 py-0.5 text-center">
                      Exp - {driver.expe}
                    </span>
                    <span className="text-xs md:text-sm bg-blue-100 rounded-full px-1 py-0.5 text-center flex items-center justify-center">
                      Rating - {driver.starRating} <i className="bi bi-star-fill text-yellow-500 ml-1"></i>
                    </span>
                    <span className="text-xs md:text-sm bg-blue-100 rounded-full px-1 py-0.5 text-center">
                      Age - {calculateAge(driver.DOB)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1 mt-2">
                    <span className="text-xs md:text-sm bg-blue-100 rounded-full px-1 py-0.5 text-center">
                      <span className="mr-1">{renderShiftIcon(driver.shift)}</span>
                      {driver.shift}
                    </span>
                    <span className="text-xs md:text-sm bg-blue-100 rounded-full px-1 py-0.5 text-center">
                      <GiSteeringWheel className="inline mr-1" />
                      {licenseCategories
                        .filter(category => driver.DLcategory.includes(category.uniqId))
                        .slice(-2) // Get only the last two items
                        .map((category, index, arr) => (
                          <span key={category.uniqId} className="text-black">
                            {category.ABB}{index < arr.length - 1 && " / "}
                          </span>
                        ))}
                    </span>
                  </div>

                  <div className="flex justify-end items-center space-x-1 mt-2">
                    <i
                      className="bi bi-chat-left-text-fill text-blue-500 hover:bg-blue-50 p-2 py-1 text-lg cursor-pointer rounded-md"
                      onClick={() => {
                        setSelectedDriver(driver);
                        setIsReviewModalOpen(true);
                      }}
                    ></i>
                    <i
                      className="bi bi-eye-fill text-blue-500  hover:bg-blue-50 p-2 py-1 text-lg cursor-pointer rounded-md"
                      onClick={() => {
                        setSelectedDriver(driver);
                        setIsViewVehicleModalOpen(true);
                      }}
                    ></i>
                    <i
                      className="bi bi-trash3-fill text-red-400 hover:bg-red-50 p-2 py-1 text-lg cursor-pointer rounded-md"
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
