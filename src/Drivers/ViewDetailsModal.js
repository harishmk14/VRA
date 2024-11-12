import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDriverLanguages } from '../Slice/driversLang';
import { updateDriver } from '../Slice/updateDriverSlice';

const ViewDriverModal = ({ isOpen, onClose, driver , dlc}) => {
  const dispatch = useDispatch();
  const { languages, status, error } = useSelector((state) => state.driverLanguages);

  const [isEditing, setIsEditing] = useState(false);
  const [editedDriver, setEditedDriver] = useState(driver || {});
  const [selectedLanguages, setSelectedLanguages] = useState(driver?.languageIds || []);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchDriverLanguages());
      setEditedDriver(driver); 
      setSelectedLanguages(driver?.langKow || []); 
    }
  }, [dispatch, isOpen, driver]);
  

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setEditedDriver((prevDriver) => ({
      ...prevDriver,
      [name]: type === 'checkbox' ? (checked ? 'Yes' : 'No') : value, 
    }));
  };

  const handleLanguageChange = (e) => {
    const languageId = e.target.value;
    setSelectedLanguages((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(languageId)) {
        return prevSelectedLanguages.filter((id) => id !== languageId);
      } else {
        return [...prevSelectedLanguages, languageId];
      }
    });
  };

  const handleSave = () => {
    const updatedDriver = {
      ...editedDriver,
      langKow: selectedLanguages, 
    };
    console.log(updatedDriver);
    dispatch(updateDriver({ driverId: driver.uniqId, updatedData: updatedDriver }));
    setIsEditing(false); 
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white rounded-lg p-8 pt-0 shadow-lg w-4/5 relative overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-1 mb-2">
          <h2 className="text-2xl font-bold">View Driver Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 gap-x-8">
          {/* Driver ID */}
          <div>
            <label className="grid text-sm font-medium mb-1">Driver ID</label>
            {isEditing ? (
              <input
                type="text"
                name="driverId"
                value={driver.uniqId}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                readOnly
              />
            ) : (
              <p>{driver.uniqId}</p>
            )}
          </div>

          {/* Driver Name */}
          <div>
            <label className="grid text-sm font-medium mb-1">Driver Name</label>
            {isEditing ? (
              <input
                type="text"
                name="dName"
                value={editedDriver.dName || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.dName}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            {isEditing ? (
              <select
                name="dGender"
                value={editedDriver.dGender || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{driver.dGender}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            {isEditing ? (
              <input
                type="date"
                name="DOB"
                value={editedDriver.DOB ? new Date(editedDriver.DOB).toISOString().split('T')[0] : editedDriver.DOB || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.DOB ? new Date(driver.DOB).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Batch No */}
          <div>
            <label className="block text-sm font-medium mb-1">Batch No</label>
            {isEditing ? (
              <input
                type="text"
                name="batchNo"
                value={editedDriver.batchNo || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.batchNo}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            {isEditing? (
              <input
                type="number"
                name="expe"
                value={editedDriver.expe || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.expe}</p>
            )}
          </div>

          {/* Driver Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Type</label>
            {isEditing ? (
              <select
                name="dType"
                value={editedDriver.dType || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              >
                <option value="">Select Type</option>
                <option value="Permanent">Permanent</option>
                <option value="Acting">Acting</option>
              </select>
            ) : (
              <p>{driver.dType}</p>
            )}
          </div>

          {/* Language Known */}
<div>
  <label className="block text-sm font-medium mb-1">Language Known</label>
  {isEditing ? (
    <div className="flex flex-wrap gap-2">
      {languages.map(language => (
        <div key={language.uniqId} className="flex items-center">
          <input
            type="checkbox"
            value={language.uniqId}
            onChange={handleLanguageChange}
            className="mr-2"
            checked={selectedLanguages.includes(language.uniqId)} 
          />
          <span>{language.lang}</span>
        </div>
      ))}
    </div>
  ) : (
    <ul>
      {languages
        .filter(language => driver.langKow.includes(language.uniqId))
        .map(language => (
          <li key={language.uniqId} className="text-black">
            <i className="bi bi-dot"></i>{language.lang}
          </li>
        ))}
    </ul>
  )}
</div>




          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedDriver.email || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.email}</p>
            )}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No</label>
            {isEditing ? (
              <input
                type="text"
                name="mobileNo"
                value={editedDriver.mobileNo || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.mobileNo}</p>
            )}
          </div>

          {/* Alternate Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1">Alternate Mobile No</label>
            {isEditing? (
              <input
                type="text"
                name="altMobNo"
                value={editedDriver.altMobNo || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.altMobNo}</p>
            )}
          </div>

          {/* Shift Preference */}
          <div>
            <label className="block text-sm font-medium mb-1">Shift Preference</label>
            {isEditing ? (
              <select
                name="shift"
                value={editedDriver.shift || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              >
              <option value="">Select Preference</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
              <option value="Remote">Remote</option>
              </select>
            ) : (
              <p>{driver.shift}</p>
            )}
          </div>

          {/* Driving License No */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License No</label>
            {isEditing ? (
              <input
                type="text"
                name="DLno"
                value={editedDriver.DLno || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.DLno}</p>
            )}
          </div>

          {/* DL Category */}
          <div>
            <label className="block text-sm font-medium mb-1">DL Category</label>
            {isEditing ? (
              <input
                type="text"
                name="DLcategory"
                value={editedDriver.DLcategory || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <>
              {dlc
                .filter(category => driver.DLcategory.includes(category.uniqId))
                .map((category) => (
                  <li key={category.uniqId} className="text-black">{category.ABB}
                </li>
                ))}
                </>
            )}
          </div>

          {/* License Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">License Expiry Date</label>
            {isEditing ? (
              <input
                type="date"
                name="DLexpire"
                value={editedDriver.DLexpire ? new Date(editedDriver.DLexpire).toISOString().split('T')[0] : editedDriver.DLexpire || ''}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.DLexpire ? new Date(driver.DLexpire).toISOString().split('T')[0].split('-').reverse().join('/') : 'N/A'}</p>
            )}
          </div>

          {/* Insurance No */}
          <div>
            <label className="block text-sm font-medium mb-1">Insurance No</label>
            {isEditing ? (
              <input
                type="text"
                name="insNo"
                value={editedDriver.insNo || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.insNo}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            {isEditing ? (
              <textarea
                name="add"
                value={editedDriver.add || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.add}</p>
            )}
          </div>

          {/* Criminal Record */}
          <div>
            <label className="block text-sm font-medium mb-1">Criminal Record</label>
            {isEditing ? (
              <textarea
                name="crimeRec"
                value={editedDriver.crimeRec || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.crimeRec}</p>
            )}
          </div>

          {/* Driving History */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving History</label>
            {isEditing ? (
              <textarea
                name="drivHis"
                value={editedDriver.drivHis || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.drivHis}</p>
            )}
          </div>

          {/* Accident History */}
          <div>
            <label className="block text-sm font-medium mb-1">Accident History</label>
            {isEditing ? (
              <textarea
                name="accHis"
                value={editedDriver.accHis || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.accHis}</p>
            )}
          </div>

          {/* Salary */}
          <div>
            <label className="grid text-sm font-medium mb-1">Salary</label>
            {isEditing ? (
              <input
                type="number"
                name="salary"
                value={editedDriver.salary || ""}
                onChange={handleInputChange}
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
              />
            ) : (
              <p>{driver.salary}</p>
            )}
          </div>

          {/* Driver Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Image</label>
            {isEditing ? (
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                // onChange={(e) => setMedicalCertificate(e.target.files[0])}
                required
              />
            ) : (
              <div className="w-40 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img
                  src={driver.dImg}
                  alt="Driverimg"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {/* Medical Certificate */}
          <div>
            <label className="block text-sm font-medium mb-1">Medical Certificate</label>
            {isEditing ? (
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                // onChange={(e) => setMedicalCertificate(e.target.files[0])}
                required
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img
                  src={driver.mediCert}
                  alt="medical"
                  className="w-auto h-64 object-cover"
                />
              </div>
            )}
          </div>

          {/* PCC */}
          <div>
            <label className="block text-sm font-medium mb-1">PCC</label>
            {isEditing ? (
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                // onChange={(e) => setMedicalCertificate(e.target.files[0])}
                required
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img
                  src={driver.pcc}
                  alt="pcc"
                  className="w-auto h-64 object-cover"
                />
              </div>
            )}
          </div>

          {/* Driving License */}
          <div>
            <label className="block text-sm font-medium mb-1">Driving License</label>
            {isEditing ? (
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                // onChange={(e) => setMedicalCertificate(e.target.files[0])}
                required
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img
                  src={driver.dlImd}
                  alt="Driving License"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {/* Aadhar */}
          <div>
            <label className="block text-sm font-medium mb-1">Aadhar Proof</label>
            {isEditing ? (
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-1 border rounded text-gray-700 bg-white focus:ring-2 focus:ring-gray-300"
                // onChange={(e) => setMedicalCertificate(e.target.files[0])}
                required
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img
                  src={driver.adhar}
                  alt="Aadhar Proof"
                  className="w-full h-auto object-cover"
                />
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
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-2 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Deactivate
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ViewDriverModal;
