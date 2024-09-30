import React, { useState } from 'react';
import '../index.css';
import FilterModal from '../Components/FilterModal'; // Import the FilterModal component

const Vehicles = () => {
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
      status: "Pending",
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
      status: "In Journey",
    },
    {
      id: 4,
      model: "Nissan Leaf",
      image: "https://www.cnet.com/a/img/resize/e5f50dfbbd4cf60df3b76e9646e8611f54b4ce1b/hub/2019/04/06/3c5cde59-d491-4f28-a817-719af6f08c7d/2019-nissan-leaf-plus-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
      fuelType: "Electric",
      transmission: "Auto Gear",
      seater: 5,
      range: "270 km",
      price: 1800,
      status: "Available",
    },
    {
      id: 5,
      model: "BMW 3 Series",
      image: "https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_m340i_fq_oem_1_1600.jpg",
      fuelType: "Diesel",
      transmission: "Auto Gear",
      seater: 5,
      range: "500 km",
      price: 2300,
      status: "Pending",
    },
    {
      id: 6,
      model: "Audi A4",
      image: "https://hips.hearstapps.com/hmg-prod/images/2022-audi-a4-mmp-1-1621027611.jpg?crop=0.795xw:0.671xh;0.0849xw,0.178xh&resize=2048:*",
      fuelType: "Petrol",
      transmission: "Auto Gear",
      seater: 5,
      range: "600 km",
      price: 2400,
      status: "In Journey",
    },
    {
      id: 7,
      model: "Kia EV6",
      image: "https://vehicle-images.dealerinspire.com/07b4-18004013/KNDC34LA0R5217693/d01f697bac826d89119f0cded99291a9.jpg",
      fuelType: "Electric",
      transmission: "Auto Gear",
      seater: 5,
      range: "400 km",
      price: 2200,
      status: "Available",
    },
    {
      id: 8,
      model: "Hyundai Elantra",
      image: "https://www.usatoday.com/gcdn/-mm-/221944ead94f36fb867f16da5b1d7db08ab24309/c=0-476-4926-3259/local/-/media/2017/02/08/DetroitFreePress/DetroitFreePress/636221808508481702-2018-Hyundai-Elantra-GT-03.JPG",
      fuelType: "Petrol",
      transmission: "Auto Gear",
      seater: 5,
      range: "550 km",
      price: 1700,
      status: "Pending",
    },
    {
      id: 9,
      model: "Volkswagen ID.4",
      image: "https://uploads.vw-mms.de/system/production/images/vwn/037/107/images/85fff5370f464ce2397eba04709886a786dff846/DB2021AU00589_web_1600.jpg?1649157750",
      fuelType: "Electric",
      transmission: "Auto Gear",
      seater: 5,
      range: "400 km",
      price: 2100,
      status: "In Journey",
    },
    {
      id: 10,
      model: "Chevrolet Malibu",
      image: "https://cdn.motor1.com/images/mgl/g4MN9E/s1/chevrolet-malibu.webp",
      fuelType: "Gas",
      transmission: "Manual",
      seater: 5,
      range: "500 km",
      price: 1600,
      status: "Service",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400"; // Yellow for Pending
      case "In Journey":
        return "bg-green-500"; // Green for In Journey
      case "Available":
        return "bg-blue-500"; // Blue for Available
      case "Service":
        return "bg-red-600"; // Red for Service
      default:
        return "bg-gray-300"; // Default gray if status is unknown
    }
  };

  const filteredVehicles = vehiclesData.filter((vehicle) => {
    if (filter === "All") return true; // Show all vehicles
    if (filter === "Active") return vehicle.status === "Pending" || vehicle.status === "In Journey"; // Show Pending & In Journey
    if (filter === "Available") return vehicle.status === "Available"; // Show Available
    if (filter === "Maintenance") return vehicle.status === "Service"; // Show Service
    return false;
  });

  return (
    <div className="h-full flex flex-col p-5 py-3 pb-0">
      <div className="flex justify-between items-center pb-2 sticky top-0 z-10">
        <button className="bg-blue-500 text-white rounded-xl hover:bg-blue-300 px-1 py-0">
          <i className="bi bi-plus text-3xl"></i>
        </button>

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
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on button click
          className='text-lg hover:text-blue-500 rounded-lg p-1'
        >
          <i className="bi bi-filter-right pr-2 size-3"></i>
          Filter
        </button>
      </div>

      {/* FilterModal Component */}
      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
        onFilterSelect={(selectedFilter) => setFilter(selectedFilter)} // Handle filter selection
      />

      <div className="flex-grow overflow-auto hide-scroll p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden p-2">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-32 object-cover"
                />
                <span className={`absolute top-2 right-2 ${getStatusColor(vehicle.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
                  {vehicle.status}
                </span>
              </div>

              <div className="p-2 space-y-2">
                <h2 className="text-sm font-semibold text-gray-800">
                  {vehicle.model}
                </h2>

                <div className="grid grid-cols-3 gap-1 mt-2">
                  <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
                    {vehicle.fuelType}
                  </span>
                  <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
                    {vehicle.transmission}
                  </span>
                  <span className="text-xs bg-blue-100 rounded-full px-1 py-1 text-center">
                    Seater {vehicle.seater}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-xs">Range {vehicle.range}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm font-bold text-gray-900">
                    Rs {vehicle.price} <span className="text-xs text-gray-500">Per Day</span>
                  </div>
                  <button className="px-3 py-1 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600">
                    View
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

export default Vehicles;
