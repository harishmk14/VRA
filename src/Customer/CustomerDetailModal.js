import React, { useState } from 'react';
import aadhar from '../Assets/img/aadhar.jpg';

const CustomerDetailModal = ({ customer, onClose, onSave }) => {
  // Declare state hooks at the top level
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({ ...customer });

  console.log(customer);

  if (!customer) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedCustomer);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-36">
      <div className="bg-white p-8 pt-0 rounded-lg shadow-lg w-4/5 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10 p-5 px-0">
          <h2 className="text-2xl font-bold">Customer Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className='grid grid-cols-2 gap-5 gap-x-8'>
          {['name', 'DOB', 'gender', 'email', 'phoneNo', 'altNo', 'address', 'noOfTrips', 'password', 'securityQuestion', 'securityAnswer'].map((field, index) => (
            <div key={index}>
              <label className="grid text-sm font-medium mb-1">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              {isEditing ? (
                <input
                  type={field === 'dob' ? 'date' : field === 'noOfTrips' ? 'number' : field === 'password' ? 'password' : 'text'}
                  name={field}
                  value={editedCustomer[field] || ''}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1 w-full"
                  placeholder={field === 'noOfTrips' ? "1" : ""}
                  min={field === 'noOfTrips' ? "1" : undefined}
                  required={field !== 'alternateMobileNo' && field !== 'address'}
                />
              ) : (
                <p>{editedCustomer[field] || '-'}</p>
              )}
            </div>
          ))}
                    <div>
            <label className="block text-sm font-medium mb-1">Customer Image</label>
            {isEditing ? (
              <input
                type="file"
                name="customerImage"
                accept="image/*"
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <div className="w-36 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img src='customer.pImg' alt="Customer" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Proof</label>
            {isEditing ? (
              <input
                type="file"
                name="proof"
                accept="image/*"
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img src={aadhar} alt="Aadhar Card" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Driving License Image</label>
            {isEditing ? (
              <input
                type="file"
                name="drivingLicense"
                accept="image/*"
                className="border rounded px-2 py-1 w-full"
              />
            ) : (
              <div className="w-64 h-auto mb-2 border border-gray-300 p-2 rounded-md">
                <img src='https://www.informalnewz.com/wp-content/uploads/2024/02/DL-Convert-PVC-Card.jpg' alt="Driving License" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-4 gap-3">
          {isEditing ? (
            <>
              {/* <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Not Verify</button> */}
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Edit</button>
              {/* <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Cancel Trip</button> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailModal;
