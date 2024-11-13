import React, { useState, useEffect } from 'react';
import '../index.css';
import FilterModal from '../Employees/FilterModal'; 
import AddEmployeeModal from '../Employees/AddEmployeeModal'; 
import ViewDetailModal from '../Employees/ViewDetailsModal'; 
import ReviewModal from '../Employees/ReviewModal';
import { GiSteeringWheel } from "react-icons/gi";

const Employee = () => {
  const [filter, setFilter] = useState("All");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false); 
  const [isViewEmployeeModalOpen, setIsViewEmployeeModalOpen] = useState(false); 
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
            onClick={() => setIsAddEmployeeModalOpen(true)} 
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

      <AddEmployeeModal
        isOpen={isAddEmployeeModalOpen}
        onClose={() => setIsAddEmployeeModalOpen(false)} 
      />

      <ViewDetailModal
        isOpen={isViewEmployeeModalOpen}
        onClose={() => setIsViewEmployeeModalOpen(false)} 
        employee={selectedEmployee}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)} 
        employee={selectedEmployee} 
      />

      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
          {/* Employee cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-2 grid grid-cols-[30%_70%]">
            <div className="w-40 h-40">
              <img
                src="employee_image_url"
                alt="Employee"
                className="object-cover rounded-md"
              />
            </div>

            <div className="px-2 space-y-2.5 relative">
              <span className={`absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded`}>
                Active
              </span>
              <h2 className="text-lg font-semibold text-gray-800">
                John Doe - 12345
              </h2>

              <div className="grid grid-cols-3 gap-1">
                <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                  Exp - 5 Years
                </span>
                <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                  Rating - 4.5 <i className="bi bi-star-fill text-yellow-500 ml-1"></i>
                </span>
                <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                  Age - 30
                </span>
              </div>
              <div className="grid grid-cols-[40%_60%] gap-1">
                <span className="text-sm bg-blue-100 rounded-full px-1 py-1 text-center">
                  <span className="mr-1"><i className="bi bi-brightness-high-fill"></i></span>
                  Day
                </span>
                <span className="flex text-sm bg-blue-100 rounded-full px-1 py-1 text-center items-center justify-center">
                  <GiSteeringWheel className="flex mr-2" />
                  DL Category: A / B
                </span>
              </div>

              <div className="flex justify-between items-center gap-2 mt-2">
                <button
                  onClick={() => setIsViewEmployeeModalOpen(true)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  View Details
                </button>
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
