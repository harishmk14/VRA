// src/features/vehicleFeaturesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch vehicle features
export const fetchVehicleFeatures = createAsyncThunk(
  'vehicleFeatures/fetchVehicleFeatures',
  async (param) => {
    console.log(param);
    const url = param === 'Bike' 
      ? 'http://localhost:7000/vechicle/getall/feature/bike' 
      : 'http://localhost:7000/vechicle/getall/feature';
    const response = await axios.get(url);
    return response.data; // Assuming response.data contains the array of features
  }
);


// Slice to manage vehicle features state
const vehicleFeaturesSlice = createSlice({
  name: 'vehicleFeatures',
  initialState: {
    features: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleFeatures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicleFeatures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.features = action.payload.data;
      })
      .addCase(fetchVehicleFeatures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default vehicleFeaturesSlice.reducer;
