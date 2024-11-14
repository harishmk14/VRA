import React, { useState, useEffect } from 'react';
import '../index.css';
import img from '../Assets/img/profile.jpg';
// import FilterModal from '../Employees/FilterModal'; 
// import AddEmployeeModal from '../Employees/AddEmployeeModal'; 
// import ViewDetailModal from '../Employees/ViewDetailsModal'; 
// import ReviewModal from '../Employees/ReviewModal';
import { GiSteeringWheel } from "react-icons/gi";

const Employee = () => {
  const [filter, setFilter] = useState("All");
  // const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  // const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false); 
  // const [isViewEmployeeModalOpen, setIsViewEmployeeModalOpen] = useState(false); 
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  // const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
            className={`px-3 py-1 rounded-full ${filter === "Active" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white"}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Available")}
            className={`px-3 py-1 rounded-full ${filter === "Available" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white"}`}
          >
            Leave
          </button>
        </div>
        <div className='flex gap-3'>
          <button
            // onClick={() => setIsAddEmployeeModalOpen(true)} 
            className="bg-blue-500 text-white px-1 py-0 rounded-lg flex items-center"
          >
            <i className="bi bi-person-plus-fill p-1 px-1.5 text-xl"></i>
          </button>
          <button
            // onClick={() => setIsFilterModalOpen(true)} 
            className="bg-blue-500 text-white px-2.5 py-0 rounded-lg flex items-center gap-1"
          >
            <i className="bi bi-funnel-fill"></i> Filter
          </button>
        </div>
      </div>

      {/* <FilterModal
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
      /> */}

      <div className="flex-grow overflow-auto hide-scroll p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-sm w-full mx-auto">
    {/* Status Badge */}
    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
      Active
    </span>

    {/* Card Content */}
    <div className="flex flex-col items-center">
      {/* Avatar */}
      <div className="w-32 h-32 mb-3">
        <img
          src={img}
          alt="hiiii"
          className="w-full h-full rounded-full object-cover shadow-md"
        />
      </div>

      {/* Employee Info */}
      <h2 className="text-lg font-bold text-gray-800 mb-1">Harish - 5</h2>

      {/* Experience, Rating, Age */}
      <div className="grid grid-cols-[40%,60%] mb-3 w-full space-x-2">
        <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-2 py-1 flex items-center justify-center">
          Rating
        </span>
        <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-2 py-1 flex items-center justify-center">
          Exp - 5 Years
          <i className="bi bi-star-fill text-yellow-500 ml-1"></i>
        </span>
      </div>

      {/* Shift and DL Category */}
      <div className="grid grid-cols-[60%,40%] mb-3 w-full space-x-2">
        <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-2 py-1 flex items-center justify-center">
          <i className="bi bi-brightness-high-fill mr-1"></i>
          DL Category
        </span>
        <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-2 py-1 flex items-center justify-center">
          <GiSteeringWheel className="mr-1" />
          Day
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center space-x-5 ml-auto">
        <i className="bi bi-card-text text-blue-500 text-2xl mt-1 cursor-pointer"></i>
        <i className="bi bi-eye-fill text-blue-500 text-2xl mr-3 mt-1 cursor-pointer"></i>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Employee;
