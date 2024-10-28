import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice';
import updateCustomerReducer from './Slice/updateCustomerSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleFeaturesReducer from './Slice/vehicleFeaturesSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    updateCustomer: updateCustomerReducer,
    vehicles: vehicleReducer,
    vehicleFeatures: vehicleFeaturesReducer,
  },
});

export default store;
