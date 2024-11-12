import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCustomer } from '../Slice/updateCustomerSlice';
import { getAllCustomers } from '../Slice/customerSlice'; 
import { toast } from 'react-toastify'; 

const CustomerDetailModal = ({ customer, onClose}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({ ...customer });
  const dispatch = useDispatch();  
  if (!customer) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedData = Object.keys(editedCustomer).reduce((acc, key) => {
        if (editedCustomer[key] !== customer[key]) {
          acc[key] = editedCustomer[key];
        }
        return acc;
      }, {});

      await dispatch(updateCustomer({ id: customer.uniqId, updatedData }));
      dispatch(getAllCustomers());
      setIsEditing(false);
      toast.success("Customer details updated successfully!");
    } catch (error) {
      console.error('Update failed:', error);
    }
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
        {['name', 'DOB', 'gender', 'email', 'phoneNo', 'altNo', 'address', 'password', 'securityQuestion', 'securityAnswer'].map((field, index) => (
  <div key={index}>
    <label className="grid text-sm font-medium mb-1">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
    {isEditing ? (
      <input
        type={field === 'DOB' ? 'date' : field === 'password' ? 'password' : 'text'}
        name={field}
        value={field === 'DOB' && editedCustomer[field] ? new Date(editedCustomer[field]).toISOString().split('T')[0] : editedCustomer[field] || ''}
        onChange={handleInputChange}
        className="border rounded px-2 py-1 w-full"
        required={field !== 'altNo' && field !== 'address'}
      />
    ) : (
      <p>
        {field === 'DOB' && editedCustomer[field]
          ? new Date(editedCustomer[field]).toISOString().split('T')[0].split('-').reverse().join('/') 
          : editedCustomer[field] || '-'}
      </p>
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
                <img src={customer.pImg} alt="Customer" className="w-full h-auto object-cover" />
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
                <img src={customer.proof} alt="proof" className="w-full h-auto object-cover" />
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
                <img src={customer.DL} alt="Driving License" className="w-full h-auto object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-4 gap-3">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailModal;
