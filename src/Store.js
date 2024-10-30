import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice';
import updateCustomerReducer from './Slice/updateCustomerSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleFeaturesReducer from './Slice/vehicleFeaturesSlice';
import updateVehicleReducer from './Slice/updateVehicleSlice'; 
import vehiclesReducer2 from './Slice/vehicleDelete';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    updateCustomer: updateCustomerReducer,
    vehicles: vehicleReducer,
    vehicleFeatures: vehicleFeaturesReducer,
    updateVehicle: updateVehicleReducer,
    vehicles1: vehiclesReducer2,
  },
});

export default store;
