// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice';
import updateCustomerReducer from './Slice/updateCustomerSlice';
import vehicleReducer from './Slice/vehicleSlice';
import vehicleFeaturesReducer from './Slice/vehicleFeaturesSlice';
import updateVehicleReducer from './Slice/updateVehicleSlice'; 
import vehiclesReducer2 from './Slice/vehicleDelete';
import driverReducer from './Slice/driverSlice';
import driverLangReducer from './Slice/driversLang';
import uploadImgReducer from './Slice/uploadImgSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    updateCustomer: updateCustomerReducer,
    vehicles: vehicleReducer,
    vehicleFeatures: vehicleFeaturesReducer,
    updateVehicle: updateVehicleReducer,
    vehicles1: vehiclesReducer2,
    drivers: driverReducer, 
    driverLanguages: driverLangReducer,
    uploadImg: uploadImgReducer,
  },
});

export default store;
