// updateVehicleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const updateVehicle = createAsyncThunk(
  'vehicles/updateVehicle',
  async ({ vehicleId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:7000/vechicle/update/${vehicleId}`, updatedData);
      toast.success('Vehicle updated successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to update vehicle.');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const updateVehicleSlice = createSlice({
  name: 'updateVehicle',
  initialState: {
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateVehicle.fulfilled, (state, action) => {
     
        state.error = null;
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default updateVehicleSlice.reducer;

