import React, { useState } from 'react';


const vehicleTypes = {
  bike: ['Scooters', 'Commuter Bikes', 'Sportbikes', 'Cruiser Bikes', 'Touring Bikes', 'Adventure Bikes', 'Dirt Bikes', 'Electric Bikes'],
  car: ['Economy Hatchbacks', 'Sedans', 'Crossovers', 'Full-Size SUVs', 'Luxury Cars', 'MUVs / MPVs', 'Electric Cars'],
  van: ['Normal', 'Mini Van'],
  bus: ['Normal', 'Mini Bus'],
  truck: ['Mini Trucks', 'Pickup Trucks', 'Intermediate Commercial Vehicles (ICVs)', 'Heavy Commercial Vehicles (HCVs)', 'Multi-Axle Trucks', 'Container Trucks', 'Tipper Trucks'],
};

const commonFeatures = [
  'Anti-lock Braking System', 'Electronic Stability Control', 'Traction Control',
  'Forward Collision Warning', 'Automatic Emergency Braking', 'Blind Spot Detection',
  'Lane Departure Warning', 'Lane Keeping Assist', 'Adaptive Cruise Control',
  'Driver Monitoring System', 'Adaptive Headlights', 'Seatbelts',
  'Crumple Zones', 'Head Restraints', 'Side-Impact Protection',
  'Collision Safety Features', '360-Degree Camera System',
  'Traffic Sign Recognition', 'Cross-Traffic Alert', 'Collision Avoidance System'
];

const bikeFeatures = ['Anti-lock Braking System'];

const AddVehicleModal = ({ isOpen, onClose }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [airbags, setAirbags] = useState('');
  const [acType, setAcType] = useState('');
  const [tollType, setTollType] = useState('');
  const [sunroof, setSunroof] = useState(false);
const [gpsTracking, setGpsTracking] = useState(false);
  
  const handleVehicleTypeChange = (e) => {
    const type = e.target.value;
    setVehicleType(type);
    setVehicleModel(''); // Reset vehicle model
    setSelectedFeatures([]); // Reset selected features
    setAirbags(type === 'bike' ? 'No' : ''); // Set airbags based on vehicle type
    setTollType(type === 'bike' ? 'Toll Free' : 'Toll'); // Set toll type based on vehicle type
  };

  const handleVehicleModelChange = (e) => {
    const model = e.target.value;
    setVehicleModel(model);
    if (model.includes('Electric')) setFuelType('electric');
    else setFuelType('petrol'); // Default fuel type
  };

  const handleFeatureChange = (e) => {
    const value = e.target.value;
    setSelectedFeatures(prevState => 
      prevState.includes(value) 
        ? prevState.filter(feature => feature !== value) 
        : [...prevState, value]
    );
  };

  if (!isOpen) return null;

  const featuresToShow = vehicleType === 'bike' 
  ? bikeFeatures 
  : ['car', 'van', 'bus', 'truck'].includes(vehicleType) 
  ? commonFeatures 
  : [];

const handleReset = () => {
  setVehicleType('');
  setVehicleModel('');
  setFuelType('');
  setSelectedFeatures([]);
  setAirbags('');
  setAcType('');
  setTollType('');
  setSunroof(false);
  setGpsTracking(false);

  // Reset the rest of the input fields that are controlled by state
  // For example, if you have state variables for these fields:
  document.querySelectorAll('input').forEach(input => {
    input.value = '';
  });
  
  document.querySelectorAll('textarea').forEach(textarea => {
    textarea.value = '';
  });

  // Reset the select dropdowns
  document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5  relative overflow-auto max-h-[90vh]">
      <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
        <h2 className="text-2xl font-bold">Add Vehicles</h2>
        <button onClick={onClose}  className="text-gray-500 hover:text-gray-700">
          <span className="text-2xl ">&times;</span>
        </button>
      </div>
        <div className="grid grid-cols-2 gap-5 gap-x-8">
{/* Vehicle Type */}
<div>
            <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
            <select 
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={vehicleType}
              onChange={handleVehicleTypeChange}
            >
              <option>Select Vehicle Type</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
              <option value="bus">Bus</option>
              <option value="truck">Delivery Truck</option>
            </select>
          </div>

          {/* Brand Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Brand Name</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>


          {/* Vehicle Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Model</label>
            <select 
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={vehicleModel}
              onChange={handleVehicleModelChange}
              disabled={!vehicleType}
            >
              <option>Select Vehicle Model</option>
              {vehicleType && vehicleTypes[vehicleType]?.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* Registration No */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration No</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Registration Type (Only Commercial) */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration Type</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value="Commercial"
              readOnly
            />
          </div>

          {/* Seater */}
          <div>
            <label className="block text-sm font-medium mb-1">Seater</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

{/* AC/Non-AC */}
{vehicleType !== 'bike' && (
  <div>
    <label className="block text-sm font-medium mb-1">AC/Non-AC</label>
    <select
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
      value={acType}
      onChange={(e) => setAcType(e.target.value)}
    >
      <option>Select </option>
      <option value="AC">AC</option>
      <option value="Non-AC">Non-AC</option>
    </select>
  </div>
)}

          {/* Gear Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Gear Type</label>
            <select className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'>
            <option>Select Gear Type</option>
              <option value="manual">Manual</option>
              <option value="auto">Automatic</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option>Select Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="gas">Gas</option>
              <option value="electric">Electric</option>
            </select>
          </div>

          {/* Toll Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Toll Type</label>
            <select
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={tollType}
              onChange={(e) => setTollType(e.target.value)}
            >
              <option>Select Toll Type</option>
              <option value="Toll Free">Toll Free</option>
              <option value="Toll">Toll</option>
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Range (in km)</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Per Day</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters)</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage (per liter)</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Engine CC */}
          <div>
            <label className="block text-sm font-medium mb-1">Engine CC</label>
            <input
              type="number"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

{/* Sunroof */}
{vehicleType !== 'bike' && (
  <div className="flex flex-col gap-1">
    <div className="flex items-center">
      <input 
        type="checkbox" 
        className="mr-2"
        checked={sunroof} // Controlled by state
        onChange={(e) => setSunroof(e.target.checked)} // Update state on change
      />
      <span>Sunroof</span>
    </div>
    <div className="flex items-center">
      <input 
        type="checkbox" 
        className="mr-2"
        checked={gpsTracking} // Controlled by state
        onChange={(e) => setGpsTracking(e.target.checked)} // Update state on change
      />
      <span>GPS Tracking</span>
    </div>
  </div>
)}

          {/* Insurance ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance ID</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Insurance Renewal Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Renewal Date</label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Insurance Expire Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Expire Date</label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Last Serviced Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Serviced Date</label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Next Service Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Next Service Date</label>
            <input
              type="date"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Holder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Name</label>
            <input
              type="text"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Holder Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Mobile</label>
            <input
              type="tel"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Holder Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Email</label>
            <input
              type="email"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>

{/* Airbags */}
{vehicleType !== 'bike' && (
  <div>
    <label className="block text-sm font-medium mb-1">Airbags</label>
    <input
      type="number"
      className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
      value={airbags}
      onChange={(e) => setAirbags(e.target.value)}
    />
  </div>
)}

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            <textarea
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          </div>



          {/* Vehicle Features */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Features</label>
            <div className="flex flex-wrap gap-2">
              {featuresToShow.map(feature => (
                <div key={feature} className="flex items-center">
                  <input
                    type="checkbox"
                    value={feature}
                    onChange={handleFeatureChange}
                    className="mr-2"
                    checked={selectedFeatures.includes(feature)}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload Vehicle Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Vehicle Image</label>
            <input type="file" className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300" />
          </div>

          {/* Upload Registration Doc */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Registration Doc</label>
            <input type="file" className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300" />
          </div>

          {/* Upload Insurance Doc */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Insurance Doc</label>
            <input type="file" className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300" />
          </div>

          {/* Upload Holder DL */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Holder DL</label>
            <input type="file" className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300" />
          </div>

          {/* Upload Holder Proof */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Holder Proof</label>
            <input type="file" className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300" />
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-8 gap-4">
        <button
              // onClick={handleAdd}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
            >
              Add
            </button>
            <button
              onClick={handleReset}
              className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Reset
            </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModal;
