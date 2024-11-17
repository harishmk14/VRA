import React, { useState } from 'react';
import '../index.css';
import img from '../Assets/img/profile.jpg';

const Employee = () => {
  const [filter, setFilter] = useState("All");
  const [deleted, setDeleted] = useState(false); // State to track if item is deleted

  const handleDeleteClick = () => {
    setDeleted(true); // Mark the item as deleted
    setTimeout(() => setDeleted(false), 1000); // Reset the animation after 1 second
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
            className={`px-3 py-1 rounded-full ${filter === "Active" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white"}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Deactive")}
            className={`px-3 py-1 rounded-full ${filter === "Deactive" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white"}`}
          >
            Deactive
          </button>
          <button
            onClick={() => setFilter("Leave")}
            className={`px-3 py-1 rounded-full ${filter === "Leave" ? "bg-blue-500 text-white" : "hover:bg-blue-200 hover:text-white"}`}
          >
            Leave
          </button>
        </div>
        <div className='flex gap-3'>
          <button
            className="bg-blue-500 text-white px-1 py-0 rounded-lg flex items-center"
          >
            <i className="bi bi-person-plus-fill p-1 px-1.5 text-xl"></i>
          </button>
          <button
            className="bg-blue-500 text-white px-2.5 py-0 rounded-lg flex items-center gap-1"
          >
            <i className="bi bi-funnel-fill"></i> Filter
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="relative bg-white rounded-lg shadow-lg p-2.5 max-w-sm w-full mx-auto">
            {/* Status Badge */}
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Active
            </span>

            {/* Card Content */}
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-32 h-32 mb-3">
                <img
                  src={img}
                  alt="Employee Avatar"
                  className="w-full h-full rounded-full object-cover shadow-md"
                />
              </div>

              {/* Employee Info */}
              <h2 className="text-base font-semibold text-gray-800 mb-1">Harish - EMP0001</h2>

              {/* Experience, Rating, Age */}
              <div className="grid grid-cols-[40%,60%] mb-3 w-full space-x-2">
                <span className="text-xs bg-blue-100 rounded-full px-2 py-1 flex items-center justify-center">
                  CSR
                </span>
                <span className="text-xs bg-blue-100 rounded-full px-2 py-1 flex items-center justify-center">
                  Exp - 5 Years
                  <i className="bi bi-star-fill text-yellow-500 text-[10px] ml-1"></i>
                </span>
              </div>

              {/* Shift and DL Category */}
              <div className="grid grid-cols-[60%,40%] mb-3 w-full space-x-2">
                <span className="text-xs bg-blue-100 rounded-full px-2 py-1 flex items-center justify-center">
                  <i className="bi bi-brightness-high-fill text-[10px] mr-1"></i>
                  Remote
                </span>
                <span className="text-xs bg-blue-100 rounded-full px-2 py-1 flex items-center justify-center">
                  <i className="bi bi-gender-male text-[10px] mr-1"></i>
                  Male
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center space-x-1 ml-auto">
                <i className="bi bi-chat-left-text-fill text-blue-500 hover:bg-blue-50 p-2 py-1 rounded-md text-xl cursor-pointer"></i>
                <i className="bi bi-eye-fill text-blue-500  hover:bg-blue-50 p-2 py-1 rounded-md text-xl cursor-pointer"></i>
                <i
                  className={`bi bi-trash3-fill ${deleted ? 'animate-trash' : 'text-red-400 hover:bg-red-50'} p-2 py-1 rounded-md text-xl cursor-pointer`}
                  onClick={handleDeleteClick}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
