// src/features/vehicleFeaturesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchVehicleFeatures = createAsyncThunk(
  'vehicleFeatures/fetchVehicleFeatures',
  async (param) => {
    const queryParam = param ? param : 'all';
    const response = await axios.get(`http://localhost:7000/vechicle/getall/feature/${queryParam}`);
    return response.data; 
  }
);

const vehicleFeaturesSlice = createSlice({
  name: 'vehicleFeatures',
  initialState: {
    features: [],
    status: 'idle', 
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
