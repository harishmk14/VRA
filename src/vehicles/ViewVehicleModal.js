import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleFeatures } from '../Slice/vehicleFeaturesSlice';
import { updateVehicle } from '../Slice/updateVehicleSlice';
import { deleteVehicle } from '../Slice/vehicleDelete';

const ViewVehicleModal = ({ isOpen, onClose, vehicle }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedVehicle, setEditedVehicle] = useState(vehicle || {});
  const [selectedFeatures, setSelectedFeatures] = useState(vehicle?.featureId || []);

  const { features, status, error } = useSelector((state) => state.vehicleFeatures);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchVehicleFeatures());
      setEditedVehicle(vehicle); // Set initial vehicle details in editedVehicle when modal opens
      setSelectedFeatures(vehicle?.featureId || []); // Set initial selected features
    }
  }, [dispatch, isOpen, vehicle]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!isOpen) return null;

  // Handle input change for editable fields
  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setEditedVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: type === 'checkbox' ? (checked ? 'Yes' : 'No') : value, // Store 'Yes' or 'No' for checkboxes
    }));
  };

  const handleDelete = (id) => {
    dispatch(deleteVehicle(id));
  };

  // Handle checkbox change for features
  const handleFeatureChange = (e) => {
    const featureId = e.target.value;
    setSelectedFeatures((prevSelectedFeatures) => {
      if (prevSelectedFeatures.includes(featureId)) {
        return prevSelectedFeatures.filter((id) => id !== featureId);
      } else {
        return [...prevSelectedFeatures, featureId];
      }
    });
  };

  // Handle save action
  const handleSave = () => {
    const updatedVehicle = {
      ...editedVehicle,
      featureId: selectedFeatures, // Send selected features as an array
    };
    dispatch(updateVehicle({ vehicleId: vehicle.uniqId, updatedData: updatedVehicle }));
    setIsEditing(false); // Exit edit mode after saving
    onClose(); // Close modal after saving (optional)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">
            {isEditing ? 'Edit Vehicle Details' : 'View Vehicle Details'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Vehicle Type */}
        <div>
          <label className="grid text-sm font-medium mb-1">Vehicle Type</label>
          {isEditing ? (
            <select
              name="vType"
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              value={editedVehicle.vType || ""}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
              <option value="bus">Bus</option>
              <option value="truck">Delivery Truck</option>
            </select>
          ) : (
            <p>{vehicle.vType}</p>
          )}
        </div>

        {/* Brand Name */}
        <div>
          <label className="grid text-sm font-medium mb-1">Brand Name</label>
          {isEditing ? (
            <input
              name="brand"
              value={editedVehicle.brand || ""}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full"
            />
          ) : (
            <p>{vehicle.brand}</p>
          )}
        </div>

        {/* Vehicle Model */}
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Model</label>
          {isEditing ? (
            <input
              name="vModel"
              value={editedVehicle.vModel || ""}
              onChange={handleInputChange}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          ) : (
            <p>{vehicle.vModel}</p>
          )}
        </div>

        {/* Registration No */}
        <div>
          <label className="block text-sm font-medium mb-1">Registration No</label>
          {isEditing ? (
            <input
              name="regNo"
              value={editedVehicle.regNo || ""}
              onChange={handleInputChange}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          ) : (
            <p>{vehicle.regNo}</p>
          )}
        </div>

        {/* Registration Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Registration Type</label>
          {isEditing ? (
            <input
              type="text"
              name="regType"
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              value={editedVehicle.regType || "Commercial"} // Assuming it's always commercial
              readOnly
            />
          ) : (
            <p>{vehicle.regType}</p>
          )}
        </div>

        {/* Seater */}
        <div>
          <label className="block text-sm font-medium mb-1">Seater</label>
          {isEditing ? (
            <input
              type='number'
              name="seatCnt"
              value={editedVehicle.seatCnt || ""}
              onChange={handleInputChange}
              className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
            />
          ) : (
            <p>{vehicle.seatCnt}</p>
          )}
        </div>

        {/* AC/Non-AC */}
        {vehicle.vType !== 'bike' && (
          <div>
            <label className="block text-sm font-medium mb-1">AC/Non-AC</label>
            {isEditing ? (
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                name="ac"
                value={editedVehicle.ac || ""}
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            ) : (
              <p>{vehicle.ac}</p>
            )}
          </div>
        )}

        {/* Gear Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Gear Type</label>
          {isEditing ? (
            <select
              className='w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300'
              name="gear"
              value={editedVehicle.gear || ""}
              onChange={handleInputChange}
            >
              <option>Select Gear Type</option>
              <option value="manual">Manual</option>
              <option value="auto">Automatic</option>
            </select>
          ) : (
            <p>{vehicle.gear}</p>
          )}
        </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            {isEditing ? (
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                name="fuel"
                value={editedVehicle.fuel || ""}
                onChange={handleInputChange}
              >
                <option>Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="gas">Gas</option>
                <option value="electric">Electric</option>
              </select>
            ) : (
              <p>{vehicle.fuel}</p>
            )}
          </div>

          {/* Toll Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Toll Type</label>
            {isEditing ? (
              <select
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                name="toll"
                value={editedVehicle.toll || ""}
                onChange={handleInputChange}
              >
                <option>Select Toll Type</option>
                <option value="Toll Free">Toll Free</option>
                <option value="Toll">Toll</option>
              </select>
            ) : (
              <p>{vehicle.toll}</p>
            )}
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            {isEditing ? (
              <input
                type="text"
                name="color"
                value={editedVehicle.color || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.color}</p>
            )}
          </div>

          {/* Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Range (in km)</label>
            {isEditing ? (
              <input
                name="rangeKm"
                value={editedVehicle.rangeKm || ""}
                onChange={handleInputChange}
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.rangeKm}</p>
            )}
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Per Day</label>
            {isEditing ? (
              <input
                name="priceDay"
                value={editedVehicle.priceDay || ""}
                onChange={handleInputChange}
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.priceDay}</p>
            )}
          </div>

          {/* Fuel Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Capacity (in Liters)</label>
            {isEditing ? (
              <input
                name="fuelCap"
                value={editedVehicle.fuelCap || ""}
                onChange={handleInputChange}
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.fuelCap}</p>
            )}
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage (per liter)</label>
            {isEditing ? (
              <input
                name="mileage"
                value={editedVehicle.mileage || ""}
                onChange={handleInputChange}
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.mileage}</p>
            )}
          </div>

          {/* Engine CC */}
          <div>
            <label className="block text-sm font-medium mb-1">Engine CC</label>
            {isEditing ? (
              <input
                name="engineCC"
                value={editedVehicle.engineCC || ""}
                onChange={handleInputChange}
                type="number"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.engineCC}</p>
            )}
          </div>

          {/* Sunroof */}
      <div>
        {vehicle.vType !== 'bike' && (
          <div className="mb-2">
            <label className="text-sm font-medium mb-1">Sunroof</label>
            {isEditing ? (
              <input
                type="checkbox"
                name="sunroof"
                checked={editedVehicle.sunroof === 'Yes'} // Check if stored value is 'Yes'
                onChange={handleInputChange}
                className="border rounded ml-20"
              />
            ) : (
              <p>{editedVehicle.sunroof}</p>
            )}
          </div>
        )}
      </div>

      {/* GPS Tracking */}
      <div>
        {vehicle.vType !== 'bike' && (
          <div>
            <label className="text-sm font-medium mb-1">GPS Tracking</label>
            {isEditing ? (
              <input
                type="checkbox"
                name="gps"
                checked={editedVehicle.gps === 'Yes'} // Check if stored value is 'Yes'
                onChange={handleInputChange}
                className="border rounded ml-11"
              />
            ) : (
              <p>{editedVehicle.gps}</p>
            )}
          </div>
        )}
      </div>


          {/* Insurance ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance ID</label>
            {isEditing ? (
              <input
                name="insId"
                value={editedVehicle.insId || ""}
                onChange={handleInputChange}
                type="text"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.insId}</p>
            )}
          </div>

          {/* Insurance Renewal Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Renewal Date</label>
            {isEditing ? (
              <input
                type="date"
                name="insRenewalDay"
                value={editedVehicle.insRenewalDay ? new Date(editedVehicle.insRenewalDay).toISOString().split('T')[0] : editedVehicle.insRenewalDay || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.insRenewalDay ? new Date(vehicle.insRenewalDay).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Insurance Expire Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Expire Date</label>
            {isEditing ? (
              <input
                type="date"
                name="insExpDay"
                value={editedVehicle.insExpDay ? new Date(editedVehicle.insExpDay).toISOString().split('T')[0] : editedVehicle.insExpDay || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.insExpDay ? new Date(vehicle.insExpDay).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Last Serviced Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Serviced Date</label>
            {isEditing ? (
              <input
                type="date"
                name="lastService"
                value={editedVehicle.lastService ? new Date(editedVehicle.lastService).toISOString().split('T')[0] : editedVehicle.lastService || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.lastService ? new Date(vehicle.lastService).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Next Service Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Next Service Date</label>
            {isEditing ? (
              <input
                type="date"
                name="nextService"
                value={editedVehicle.nextService ? new Date(editedVehicle.nextService).toISOString().split('T')[0] : editedVehicle.nextService || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.nextService ? new Date(vehicle.nextService).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Holder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Name</label>
            {isEditing ? (
              <input
                name="holderName"
                value={editedVehicle.holderName || ""}
                onChange={handleInputChange}
                type='text'
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.holderName}</p>
            )}
          </div>

          {/* Holder Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Mobile</label>
            {isEditing ? (
              <input
                name="holderMobile"
                value={editedVehicle.holderMobile || ""}
                onChange={handleInputChange}
                type="tel"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.holderMobile}</p>
            )}
          </div>

          {/* Holder Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Email</label>
            {isEditing ? (
              <input
                name="holderEmail"
                value={editedVehicle.holderEmail || ""}
                onChange={handleInputChange}
                type="email"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.holderEmail}</p>
            )}
          </div>

          {/* Airbags */}
          {vehicle.vType !== 'bike' && (
            <div>
              <label className="block text-sm font-medium mb-1">Airbags</label>
              {isEditing ? (
                <input
                  name="airBag"
                  value={editedVehicle.airBag || ""}
                  onChange={handleInputChange}
                  type="number"
                  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                />
              ) : (
                <p>{vehicle.airBag}</p>
              )}
            </div>
          )}

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            {isEditing ? (
              <textarea
                name="accHis"
                value={editedVehicle.accHis || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{vehicle.accHis}</p>
            )}
          </div>

{/* Vehicle Features */}
<div>
  <label className="block text-sm font-medium mb-1">Vehicle Features</label>
  {isEditing ? (
    <div className="flex flex-wrap gap-2">
      {features.data.map(feature => (
        <div key={feature.uniqId} className="flex items-center">
<input
  type="checkbox"
  value={feature.uniqId}
  onChange={handleFeatureChange}
  className="mr-2"
  checked={selectedFeatures.includes(feature.uniqId)}
/>
          <span>{feature.name}</span>
        </div>
      ))}
    </div>
  ) : (
<ul>
      {features.data
        .filter(feature => vehicle.featureId.includes(feature.uniqId))
        .map(feature => (
          <li key={feature.uniqId} className="text-gray-600">
            <i className="bi bi-dot"></i>{feature.name}
          </li>
        ))}
    </ul>
            )}
          </div>

          {/* Vehicle Images */}
          <div className='space-y-3'>
            <label className="block text-sm font-medium mb-1">Vehicle Images</label>
            {isEditing ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  // onChange={(e) => handleImageChange(e.target.files)}
                  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  // onChange={(e) => handleImageChange(e.target.files)}
                  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  // onChange={(e) => handleImageChange(e.target.files)}
                  className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                />
              </>
            ) : (
              <div className="flex gap-3">
                {vehicle.vImg.map((image, index) => (
                  <div key={index} className="w-full h-auto mb-2 border border-gray-300 p-2 rounded-md">
                    <img src={image} alt={`Vehicle ${index + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Registration Document */}
          <div>
            <label className="block text-sm font-medium mb-1">Registration Doc</label>
            {isEditing ? (
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                // onChange={(e) => handleDocumentChange('registrationDoc', e.target.files[0])}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <a href={vehicle.regDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Registration Doc
                </a>
              </div>
            )}
          </div>

          {/* Insurance Document */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance Doc</label>
            {isEditing ? (
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                // onChange={(e) => handleDocumentChange('insuranceDoc', e.target.files[0])}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <div className="w-fit h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <a href={vehicle.insDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Insurance Doc
                </a>
              </div>
            )}
          </div>

          {/* Holder Driving License */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder DL</label>
            {isEditing ? (
              <input
                type="file"
                accept="image/*"
                // onChange={(e) => handleDocumentChange('drivingLicense', e.target.files[0])}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img src={vehicle.holderDL} alt="Driving License" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>

          {/* Holder Proof */}
          <div>
            <label className="block text-sm font-medium mb-1">Holder Proof</label>
            {isEditing ? (
              <input
                type="file"
                accept="image/*"
                // onChange={(e) => handleDocumentChange('aadharProof', e.target.files[0])}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <div className="w-60 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img src={vehicle.holderProof} alt="Aadhar Card" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white font-bold py-1.5 px-3 rounded-lg mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(vehicle.uniqId)}
                className="bg-red-500 text-white font-bold py-1.5 px-3 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewVehicleModal;
